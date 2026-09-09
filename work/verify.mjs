import assert from 'node:assert/strict';
import {readFile, stat} from 'node:fs/promises';

const read = name => readFile(new URL('../' + name, import.meta.url), 'utf8');
const [html, css, js, originalHTML, originalJS] = await Promise.all([
  'index.html', 'style.css', 'script.js', 'work/before-eunoia/index.html', 'work/before-eunoia/script.js'
].map(read));
const translations = JSON.parse(js.match(/const translations = (\{[\s\S]*?\n\});/)[1]);
assert.deepEqual(Object.keys(translations.en).sort(), Object.keys(translations.id).sort());
for (const locale of Object.values(translations)) {
  assert.ok(Object.values(locale).every(value => typeof value === 'string' && value.trim()));
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate IDs');
for (const [,target] of html.matchAll(/(?:href="#|for="|aria-controls="|aria-labelledby="|aria-describedby=")([^"]+)"/g)) {
  assert.ok(ids.includes(target), 'Missing link/label target: ' + target);
}
const keys = [...html.matchAll(/data-i18n(?:-placeholder|-aria-label)?="([^"]+)"/g)].map(match => match[1]);
for (const key of keys) assert.ok(translations.en[key] && translations.id[key], 'Missing translation: ' + key);
for (const [key,value] of Object.entries(translations.en)) {
  const placeholders = text => [...text.matchAll(/\{\w+\}/g)].map(match => match[0]).sort();
  assert.deepEqual(placeholders(value), placeholders(translations.id[key]), 'Template mismatch: ' + key);
}
assert.ok(originalHTML.includes(translations.en['plan.crisis']), 'English safety notice changed');
assert.ok(originalJS.includes(translations.id['plan.crisis']), 'Indonesian safety notice changed');
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.ok(!/<style\b|<script(?![^>]*src=)/.test(html), 'Unexpected inline styling or script');
assert.ok(!/@import|url\(\s*['"]?https?:/.test(css), 'External stylesheet dependency');
assert.ok(!/\bfetch\(|XMLHttpRequest|sendBeacon|WebSocket|https?:\/\//.test(js), 'Network path in production script');
assert.ok(!/(?:src|href)="https?:/.test(html), 'External asset in markup');
assert.ok(css.includes('@media(prefers-reduced-motion:reduce)'));
assert.ok(js.includes("if (!finePointer.matches || reducedMotion.matches"));
assert.ok(js.includes("'stillpoint-' + new Date().toISOString().slice(0,10)"));
assert.ok(!/localStorage\.(?:setItem|getItem)\([^)]*(?:thought|evidence|alt|act|g1)/.test(js));
const assets = ['index.html','style.css','script.js','favicon.svg'];
let bytes = 0;
for (const asset of assets) {
  bytes += (await stat(new URL('../' + asset, import.meta.url))).size;
  const response = await fetch('http://127.0.0.1:4173/' + asset);
  assert.equal(response.status, 200, asset + ' did not load');
  assert.ok((await response.text()).length > 0);
}
console.log(JSON.stringify({result:'PASS',assets,bytes,translationsPerLanguage:Object.keys(translations.en).length,
  markupTranslationBindings:keys.length,uniqueIDs:ids.length,
  checks:['translation parity','template parity','IDs and labels','English and Indonesian crisis text unchanged',
    'single h1','external asset absence','no client data transmission','original storage namespace',
    'reduced motion and touch guards','HTTP 200 for every release asset']},null,2));

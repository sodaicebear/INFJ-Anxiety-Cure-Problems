import http from 'node:http';
import {readFile} from 'node:fs/promises';

// Isolated browser fixtures; never included in the four-file static release.
const files = new Map([
  ['/', ['index.html', 'text/html']],
  ['/index.html', ['index.html', 'text/html']],
  ['/style.css', ['style.css', 'text/css']],
  ['/script.js', ['script.js', 'text/javascript']],
  ['/favicon.svg', ['favicon.svg', 'image/svg+xml']]
]);
http.createServer(async (request, response) => {
  const url = new URL(request.url, 'http://127.0.0.1:4174');
  const mode = url.searchParams.get('qa') || 'system-light';
  const reduced = mode === 'reduced-touch';
  const dark = mode === 'system-dark';
  if (url.pathname === '/qa-prelude.js') {
    response.writeHead(200, {'Content-Type':'text/javascript', 'Cache-Control':'no-store'});
    response.end(`(() => {
      const nativeMatchMedia = window.matchMedia.bind(window);
      window.matchMedia = query => {
        const matches = query.includes('prefers-reduced-motion') ? ${reduced} :
          query.includes('prefers-color-scheme') ? ${dark} :
          query.includes('pointer: fine') ? ${!reduced} : undefined;
        return matches === undefined ? nativeMatchMedia(query) :
          {matches, media:query, addEventListener(){}, removeEventListener(){}};
      };
      const saved = new Map();
      Object.defineProperty(window, 'localStorage', {value:{
        getItem(key) {
          if (${mode === 'blocked'}) throw new DOMException('Storage blocked','SecurityError');
          if (${mode === 'malformed'} && !saved.has(key)) return '{invalid';
          return saved.get(key) ?? null;
        },
        setItem(key,value) {
          if (${mode === 'blocked'}) throw new DOMException('Storage blocked','SecurityError');
          saved.set(key,String(value));
        }
      }});
      document.documentElement.dataset.qaMode = ${JSON.stringify(mode)};
    })();`);
    return;
  }
  const file = files.get(url.pathname);
  if (!file) { response.writeHead(404); response.end(); return; }
  let content = await readFile(new URL('../' + file[0], import.meta.url), 'utf8');
  if (file[0] === 'index.html') content = content
    .replace('<script src="script.js', `<script src="qa-prelude.js?qa=${mode}"></script><script src="script.js`)
    .replace(/style.css\?v=[^" ]+/, `style.css?qa=${mode}`);
  if (file[0] === 'style.css') content = content
    .replaceAll('@media(prefers-reduced-motion:reduce)', reduced ? '@media all' : '@media not all')
    .replaceAll('@media(prefers-color-scheme:dark)', dark ? '@media all' : '@media not all')
    .replaceAll('@media(hover:hover) and (pointer:fine)', reduced ? '@media not all' : '@media(hover:hover) and (pointer:fine)');
  response.writeHead(200, {'Content-Type':file[1], 'Cache-Control':'no-store'});
  response.end(content);
}).listen(4174, '127.0.0.1', () => console.log('Isolated QA fixtures: http://127.0.0.1:4174/?qa=reduced-touch'));

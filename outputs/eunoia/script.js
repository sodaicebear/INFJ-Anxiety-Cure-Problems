'use strict';
(function(){
  const translations = {
  "en": {
    "skip": "Skip to content",
    "menu": "Menu",
    "tabs.breathe": "Breathe",
    "tabs.ground": "Ground",
    "tabs.reframe": "Reframe",
    "tabs.patterns": "Patterns",
    "tabs.plan": "Daily rhythm",
    "hero.eyebrow": "A small pause in the internet.",
    "hero.title": "A way back",
    "hero.titleEnd": "to yourself.",
    "hero.lede": "For when your mind feels a little too loud.",
    "hero.start": "Start a reset",
    "hero.aside": "you can take your time here.",
    "hero.foot": "A personal experiment in paying attention.",
    "entry.label": "Begin wherever you are",
    "entry.title": "What do you need right now?",
    "entry.thinking": "I can't stop thinking.",
    "entry.tense": "My body feels tense.",
    "entry.people": "I'm overwhelmed by people.",
    "entry.future": "I keep imagining what could go wrong.",
    "entry.decision": "I need to make a decision.",
    "entry.moment": "I just need a moment.",
    "breathe.title": "A little more room.",
    "breathe.sub": "Follow a breath. Let the rest wait.",
    "breathe.ready": "Whenever you're ready",
    "breathe.pressStart": "4 in · 4 hold · 6 out",
    "breathe.start": "Begin breathing",
    "breathe.reset": "Reset",
    "breathe.cycles": "cycles completed",
    "breathe.note": "Keep it comfortable. You can breathe normally or stop at any time.",
    "ground.title": "This room. This moment.",
    "ground.sub": "Bring your attention to something nearby. One sense at a time.",
    "ground.permission": "A word or two is enough. You can skip anything that doesn't feel right.",
    "ground.see": "things you can see",
    "ground.touch": "things you can feel",
    "ground.hear": "sounds you can hear",
    "ground.smell": "things you can smell",
    "ground.good": "small thing that feels okay",
    "ground.doneTitle": "You are here.",
    "ground.done": "The room was here the whole time.",
    "ground.back": "Previous",
    "ground.skip": "Skip this sense",
    "ground.next": "Continue",
    "reframe.title": "Let the thought change shape.",
    "reframe.sub": "You don't have to believe every version of the story. Put one on the page.",
    "reframe.thoughtLabel": "What is your mind telling you?",
    "reframe.evidenceLabel": "What are the facts?",
    "reframe.altLabel": "What else could be true?",
    "reframe.actLabel": "What is the smallest next step?",
    "reframe.build": "Reframe this thought",
    "reframe.paperLabel": "A little distance",
    "reframe.outputTitle": "Another way to see it.",
    "reframe.outputHint": "Your words will find a little more room here.",
    "reframe.quote": "A prediction is not the whole story.",
    "patterns.title": "Something familiar?",
    "patterns.sub": "A few reflections through an INFJ lens. Keep what fits; leave what doesn't. These are prompts, not a diagnosis.",
    "patterns.oneTitle": "Doorslam dread",
    "patterns.oneBody": "A short reply can start to feel like rejection. You might pull away before you know what happened.",
    "patterns.counter": "A counter-move",
    "patterns.oneMove": "Ask one plain question: “Are we okay? Your message felt a little short.” Leave room for an ordinary explanation.",
    "patterns.twoTitle": "Absorbed emotion",
    "patterns.twoBody": "Sometimes you leave a conversation feeling heavier. It may be hard to tell where their feelings end and yours begin.",
    "patterns.twoMove": "Take a little time without input. Walk, wash a cup, stretch. Ask: was I feeling this before the conversation?",
    "patterns.threeTitle": "Perfect-standard paralysis",
    "patterns.threeBody": "The version in your head can make a real first attempt feel inadequate. Starting may feel harder than imagining.",
    "patterns.threeMove": "Decide what “enough for today” looks like before you start. Give this version an ending.",
    "patterns.fourTitle": "Over-giving, then resentment",
    "patterns.fourBody": "A quick yes may leave you with less energy than you expected. Frustration can turn into guilt.",
    "patterns.fourMove": "Give yourself time before agreeing: “Let me check my week and come back to you.”",
    "patterns.fiveTitle": "Sensory & social depletion",
    "patterns.fiveBody": "After a lot of people, light, or noise, even small decisions can feel like too much.",
    "patterns.fiveMove": "Leave some quiet time after the event. You can plan for rest before you need it.",
    "plan.title": "A day with some breathing room.",
    "plan.sub": "A few places to return to. Mark what happened, and let the rest be.",
    "plan.saved": "Saved in this browser. A fresh page each day.",
    "plan.morning": "Morning",
    "plan.item1": "Daylight and a little movement",
    "plan.item2": "Put the top worry on paper before opening messages",
    "plan.midday": "Midday",
    "plan.item3": "One focused stretch of work, phone in another room",
    "plan.afternoon": "Afternoon",
    "plan.item4": "Twenty minutes of protected solitude",
    "plan.evening": "Evening",
    "plan.item5": "Say one true thing to someone",
    "plan.night": "Night",
    "plan.item6": "Screens off 45 minutes before bed",
    "about.label": "A note on this place",
    "about.title": "Made for a moment, not a better version of you.",
    "about.body": "EUNOIA is a personal experiment inspired by grounding, reflective writing, cognitive reframing, personality-pattern reflection, and intentional routines. Use what helps. You can leave the rest.",
    "about.privacy": "What you type stays on your device. Your writing lasts until you reload; only your language, theme, and daily rhythm are saved in this browser.",
    "plan.crisisTitle": "When you need another person",
    "plan.crisis": "If anxiety is stopping you from sleeping, eating, studying, or leaving the house for weeks, or you have thoughts of harming yourself, please talk to a doctor, a campus counsellor, or a local crisis line. This site is a self-help tool, not treatment, and reaching out is a strength move, not a failure.",
    "closing": "You can come back. You can also close this tab.",
    "top": "Back to the beginning",
    "footer": "A little quieter, perhaps.",
    "ground.seePlaceholder": "lamp, window, mug…",
    "ground.seeAria": "Five things you can see",
    "ground.touchPlaceholder": "desk, sleeve, floor…",
    "ground.touchAria": "Four things you can feel",
    "ground.hearPlaceholder": "fan, traffic, my breath…",
    "ground.hearAria": "Three sounds you can hear",
    "ground.smellPlaceholder": "coffee, rain…",
    "ground.smellAria": "Two things you can smell",
    "ground.goodPlaceholder": "The chair is holding me.",
    "ground.goodAria": "One small thing that feels okay",
    "reframe.thoughtPlaceholder": "They replied briefly. Maybe I did something wrong.",
    "reframe.evidencePlaceholder": "They sent three words. It has been a busy week.",
    "reframe.altPlaceholder": "They might be tired or in a hurry.",
    "reframe.actPlaceholder": "Ask one clear question, or close the laptop for a while.",
    "nav.label": "Experiences",
    "menu.close": "Close",
    "meta.title": "EUNOIA · A way back to yourself",
    "meta.description": "A small, quiet place for a busy mind. Breathing, grounding, reflective writing, and a gentler daily rhythm.",
    "meta.social": "A small, quiet place for a busy mind.",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.label": "Dark mode",
    "ground.finish": "Finish",
    "ground.restart": "Return to the senses",
    "ground.stage": "Sense {step} of 5",
    "breathe.running": "Breathing…",
    "breathe.inhale": "Breathe in",
    "breathe.hold": "Hold softly",
    "breathe.exhale": "Breathe out",
    "breathe.seconds": "{seconds}s",
    "reframe.empty": "Start with the thought on your mind. One sentence is enough.",
    "reframe.noticed": "I noticed the thought: ",
    "reframe.verify": "What I can verify is: ",
    "reframe.little": "very little so far",
    "reframe.possible": "Another possibility is: ",
    "reframe.ordinary": "something ordinary that isn't about me",
    "reframe.now": "For now, I can ",
    "reframe.unresolved": "leave this unresolved and return to my day",
    "reframe.unknown": ", and let the rest stay unknown.",
    "storage.unavailable": "Your changes work for this visit, but this browser couldn't save them."
  },
  "id": {
    "skip": "Lewati ke isi",
    "menu": "Menu",
    "menu.close": "Tutup",
    "tabs.breathe": "Bernapas",
    "tabs.ground": "Membumi",
    "tabs.reframe": "Tinjau ulang",
    "tabs.patterns": "Pola",
    "tabs.plan": "Ritme harian",
    "hero.eyebrow": "Jeda kecil di tengah internet.",
    "hero.title": "Kembali pelan",
    "hero.titleEnd": "ke dirimu.",
    "hero.lede": "Untuk saat pikiranmu terasa terlalu ramai.",
    "hero.start": "Ambil jeda",
    "hero.aside": "di sini, tak perlu buru-buru.",
    "hero.foot": "Eksperimen pribadi tentang memberi perhatian.",
    "entry.label": "Mulai dari yang kamu rasakan",
    "entry.title": "Apa yang kamu butuhkan sekarang?",
    "entry.thinking": "Pikiranku tak berhenti berputar.",
    "entry.tense": "Tubuhku terasa tegang.",
    "entry.people": "Aku kewalahan menghadapi orang lain.",
    "entry.future": "Aku terus membayangkan hal buruk.",
    "entry.decision": "Aku perlu mengambil keputusan.",
    "entry.moment": "Aku hanya butuh waktu sebentar.",
    "breathe.title": "Sedikit ruang lagi.",
    "breathe.sub": "Ikuti satu napas. Yang lain bisa menunggu.",
    "breathe.ready": "Kapan pun kamu siap",
    "breathe.pressStart": "4 tarik · 4 tahan · 6 embus",
    "breathe.start": "Mulai bernapas",
    "breathe.reset": "Atur ulang",
    "breathe.cycles": "siklus selesai",
    "breathe.note": "Lakukan senyamannya. Kamu boleh bernapas seperti biasa atau berhenti kapan saja.",
    "breathe.running": "Sedang bernapas…",
    "breathe.inhale": "Tarik napas",
    "breathe.hold": "Tahan perlahan",
    "breathe.exhale": "Embuskan napas",
    "breathe.seconds": "{seconds} dtk",
    "ground.title": "Ruangan ini. Saat ini.",
    "ground.sub": "Perhatikan sesuatu di dekatmu. Satu indra setiap kali.",
    "ground.permission": "Satu atau dua kata cukup. Lewati bagian yang terasa kurang nyaman.",
    "ground.see": "hal yang bisa kamu lihat",
    "ground.touch": "hal yang bisa kamu rasakan lewat sentuhan",
    "ground.hear": "suara yang bisa kamu dengar",
    "ground.smell": "aroma yang bisa kamu cium",
    "ground.good": "hal kecil yang terasa cukup baik",
    "ground.seePlaceholder": "lampu, jendela, cangkir…",
    "ground.touchPlaceholder": "meja, lengan baju, lantai…",
    "ground.hearPlaceholder": "kipas, lalu lintas, napasku…",
    "ground.smellPlaceholder": "kopi, hujan…",
    "ground.goodPlaceholder": "Kursi ini menopang tubuhku.",
    "ground.seeAria": "Lima hal yang bisa kamu lihat",
    "ground.touchAria": "Empat hal yang bisa kamu rasakan lewat sentuhan",
    "ground.hearAria": "Tiga suara yang bisa kamu dengar",
    "ground.smellAria": "Dua aroma yang bisa kamu cium",
    "ground.goodAria": "Satu hal kecil yang terasa cukup baik",
    "ground.doneTitle": "Kamu ada di sini.",
    "ground.done": "Ruangan ini ada di sini sejak tadi.",
    "ground.back": "Sebelumnya",
    "ground.skip": "Lewati indra ini",
    "ground.next": "Lanjutkan",
    "ground.finish": "Selesai",
    "ground.restart": "Kembali ke indra",
    "ground.stage": "Indra {step} dari 5",
    "reframe.title": "Beri pikiran itu bentuk lain.",
    "reframe.sub": "Tak semua cerita di kepala harus kamu percaya. Tuliskan salah satunya.",
    "reframe.thoughtLabel": "Apa yang sedang dikatakan pikiranmu?",
    "reframe.evidenceLabel": "Apa faktanya?",
    "reframe.altLabel": "Apa lagi yang mungkin benar?",
    "reframe.actLabel": "Apa langkah terkecil selanjutnya?",
    "reframe.thoughtPlaceholder": "Balasannya singkat. Mungkin aku melakukan kesalahan.",
    "reframe.evidencePlaceholder": "Mereka mengirim tiga kata. Minggu ini sedang sibuk.",
    "reframe.altPlaceholder": "Mungkin mereka lelah atau terburu-buru.",
    "reframe.actPlaceholder": "Tanyakan satu hal dengan jelas, atau tutup laptop sebentar.",
    "reframe.build": "Tinjau ulang pikiran ini",
    "reframe.paperLabel": "Sedikit jarak",
    "reframe.outputTitle": "Sudut pandang lain.",
    "reframe.outputHint": "Kata-katamu akan mendapat sedikit ruang di sini.",
    "reframe.quote": "Perkiraan bukan keseluruhan cerita.",
    "reframe.empty": "Mulai dari pikiran yang sedang muncul. Satu kalimat cukup.",
    "reframe.noticed": "Aku menyadari pikiran ini: ",
    "reframe.verify": "Yang bisa kupastikan: ",
    "reframe.little": "masih sangat sedikit",
    "reframe.possible": "Kemungkinan lainnya: ",
    "reframe.ordinary": "sesuatu yang biasa dan tidak berkaitan denganku",
    "reframe.now": "Untuk sekarang, aku bisa ",
    "reframe.unresolved": "membiarkannya belum terjawab dan kembali menjalani hariku",
    "reframe.unknown": ", lalu membiarkan sisanya tetap belum diketahui.",
    "patterns.title": "Terasa akrab?",
    "patterns.sub": "Beberapa refleksi dari sudut pandang INFJ. Ambil yang cocok, tinggalkan yang lain. Ini bahan renungan, bukan diagnosis.",
    "patterns.counter": "Langkah penyeimbang",
    "patterns.oneTitle": "Takut hubungan terputus",
    "patterns.oneBody": "Balasan singkat bisa terasa seperti penolakan. Kamu mungkin menarik diri sebelum tahu apa yang sebenarnya terjadi.",
    "patterns.oneMove": "Ajukan satu pertanyaan sederhana: “Kita baik-baik saja? Pesanmu terasa agak singkat.” Beri ruang untuk penjelasan yang biasa.",
    "patterns.twoTitle": "Menyerap emosi orang lain",
    "patterns.twoBody": "Kadang kamu selesai berbincang dengan perasaan lebih berat. Mungkin sulit membedakan perasaan mereka dari perasaanmu sendiri.",
    "patterns.twoMove": "Ambil waktu tanpa masukan baru. Berjalan, cuci cangkir, regangkan tubuh. Tanyakan: apakah aku sudah merasa begini sebelum berbincang?",
    "patterns.threeTitle": "Terhenti oleh standar sempurna",
    "patterns.threeBody": "Versi ideal di kepala bisa membuat percobaan pertama terasa kurang. Memulai mungkin lebih sulit daripada membayangkan.",
    "patterns.threeMove": "Tentukan seperti apa “cukup untuk hari ini” sebelum mulai. Beri versi ini kesempatan untuk selesai.",
    "patterns.fourTitle": "Terlalu memberi, lalu kesal",
    "patterns.fourBody": "Terlalu cepat mengiyakan bisa menguras energi lebih dari perkiraanmu. Kekesalan kadang berubah menjadi rasa bersalah.",
    "patterns.fourMove": "Beri dirimu waktu sebelum setuju: “Aku cek jadwalku dulu, lalu kukabari lagi.”",
    "patterns.fiveTitle": "Lelah oleh suasana dan interaksi",
    "patterns.fiveBody": "Setelah banyak bertemu orang, terpapar cahaya, atau mendengar kebisingan, keputusan kecil pun bisa terasa berat.",
    "patterns.fiveMove": "Sisihkan waktu tenang setelah acara. Kamu boleh merencanakan istirahat sebelum membutuhkannya.",
    "plan.title": "Sehari dengan ruang untuk bernapas.",
    "plan.sub": "Beberapa hal untuk kembali berpijak. Tandai yang sempat dilakukan, lalu biarkan sisanya.",
    "plan.saved": "Tersimpan di browser ini. Halaman baru setiap hari.",
    "plan.morning": "Pagi",
    "plan.midday": "Siang",
    "plan.afternoon": "Sore",
    "plan.evening": "Malam",
    "plan.night": "Menjelang tidur",
    "plan.item1": "Cahaya matahari dan sedikit bergerak",
    "plan.item2": "Tulis kekhawatiran utama sebelum membuka pesan",
    "plan.item3": "Satu waktu kerja penuh perhatian, ponsel di ruangan lain",
    "plan.item4": "Dua puluh menit waktu sendiri yang terjaga",
    "plan.item5": "Sampaikan satu hal yang jujur kepada seseorang",
    "plan.item6": "Matikan layar 45 menit sebelum tidur",
    "about.label": "Catatan tentang tempat ini",
    "about.title": "Untuk menemani sejenak, tanpa tuntutan menjadi lebih baik.",
    "about.body": "EUNOIA adalah eksperimen pribadi yang terinspirasi dari grounding, menulis reflektif, meninjau ulang pikiran, refleksi pola kepribadian, dan rutinitas yang disengaja. Gunakan yang membantu. Sisanya boleh kamu tinggalkan.",
    "about.privacy": "Yang kamu ketik tetap di perangkatmu. Tulisanmu bertahan sampai halaman dimuat ulang; hanya bahasa, tema, dan ritme harian yang disimpan di browser ini.",
    "plan.crisisTitle": "Saat kamu membutuhkan orang lain",
    "plan.crisis": "Jika kecemasan membuatmu tidak bisa tidur, makan, belajar, atau keluar rumah selama berminggu-minggu, atau jika kamu memiliki pikiran untuk menyakiti diri sendiri, mohon bicara dengan dokter, konselor kampus, atau layanan krisis setempat. Situs ini adalah alat bantu mandiri, bukan pengobatan, dan mencari bantuan adalah langkah yang kuat, bukan kegagalan.",
    "closing": "Kamu boleh kembali. Kamu juga boleh menutup tab ini.",
    "top": "Kembali ke awal",
    "footer": "Mungkin, sedikit lebih tenang.",
    "nav.label": "Latihan",
    "meta.title": "EUNOIA · Kembali ke dirimu",
    "meta.description": "Tempat kecil yang tenang untuk pikiran yang ramai. Bernapas, grounding, menulis reflektif, dan ritme harian yang lebih lembut.",
    "meta.social": "Tempat kecil yang tenang untuk pikiran yang ramai.",
    "theme.light": "Terang",
    "theme.dark": "Gelap",
    "theme.label": "Tema gelap",
    "storage.unavailable": "Perubahanmu berlaku selama kunjungan ini, tetapi browser ini tidak bisa menyimpannya."
  }
};

  const root = document.documentElement;
  const $ = (id) => document.getElementById(id);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const mobile = window.matchMedia('(max-width: 960px)');
  const themeKey = 'stillpoint-theme';
  const languageKey = 'stillpoint-language';
  let storageFailed = false;
  function readSaved(key) {
    try { return localStorage.getItem(key); }
    catch (_) { storageFailed = true; return null; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); }
    catch (_) { storageFailed = true; }
    renderStorageStatus();
  }
  let language = readSaved(languageKey) === 'id' ? 'id' : 'en';
  const savedTheme = readSaved(themeKey);
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  const t = (key, values = {}) => {
    const template = translations[language][key] || translations.en[key] || key;
    return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
  };
  const currentTheme = () => root.dataset.theme || (colorScheme.matches ? 'dark' : 'light');
  let timer = null, phaseIndex = 0, left = 4, cycles = 0;
  const seq = [['breathe.inhale', 4, 2.05], ['breathe.hold', 4, 2.05], ['breathe.exhale', 6, 1]];
  let groundIndex = 0;
  let reframeSnapshot = null;
  let reframeError = false;
  const steps = [...document.querySelectorAll('#steps .step')];
  const boxes = [...document.querySelectorAll('#planList input')];
  let dayKey = '';
  let savedPlan = {};
  const languageOptions = [...document.querySelectorAll('[data-language]')];

  function renderStorageStatus() {
    $('storageStatus').textContent = storageFailed ? t('storage.unavailable') : '';
  }
  function renderTheme() {
    const dark = currentTheme() === 'dark';
    $('themeToggle').setAttribute('aria-checked', String(dark));
    $('themeToggle').setAttribute('aria-label', t('theme.label'));
    $('themeLabel').textContent = t(dark ? 'theme.dark' : 'theme.light');
  }
  function renderBreathingText() {
    const phase = t(timer ? seq[phaseIndex][0] : 'breathe.ready');
    if ($('phase').textContent !== phase) $('phase').textContent = phase;
    $('count').textContent = timer ? t('breathe.seconds', {seconds:left}) : t('breathe.pressStart');
    $('cycles').textContent = String(cycles);
    $('startBtn').textContent = t(timer ? 'breathe.running' : 'breathe.start');
    $('startBtn').setAttribute('aria-disabled', String(Boolean(timer)));
  }
  function animateBreath() {
    $('fill').style.transitionDuration = (phaseIndex === 1 ? .3 : seq[phaseIndex][1]) + 's';
    $('fill').style.transform = 'scale(' + seq[phaseIndex][2] + ')';
    $('fill').style.opacity = phaseIndex === 2 ? '.45' : '.85';
  }
  function tick() {
    left--;
    if (left <= 0) {
      phaseIndex = (phaseIndex + 1) % seq.length;
      if (phaseIndex === 0) cycles++;
      left = seq[phaseIndex][1];
      animateBreath();
    }
    renderBreathingText();
  }
  $('startBtn').addEventListener('click', () => {
    if (timer) return;
    phaseIndex = 0; left = 4;
    timer = setInterval(tick, 1000);
    animateBreath();
    renderBreathingText();
  });
  $('stopBtn').addEventListener('click', () => {
    clearInterval(timer); timer = null; cycles = 0; phaseIndex = 0; left = 4;
    $('fill').style.transitionDuration = '.6s';
    $('fill').style.transform = 'scale(1)';
    $('fill').style.opacity = '.7';
    renderBreathingText();
  });

  function renderGround(focus = false) {
    const complete = groundIndex === steps.length;
    steps.forEach((step, index) => { step.hidden = index !== groundIndex; });
    $('groundComplete').hidden = !complete;
    $('groundBack').disabled = groundIndex === 0;
    $('groundSkip').hidden = complete;
    $('groundCount').textContent = complete ? '5 / 5' : (groundIndex + 1) + ' / 5';
    $('groundNext').textContent = t(complete ? 'ground.restart' : groundIndex === 4 ? 'ground.finish' : 'ground.next');
    $('ground').style.setProperty('--ground-noise', String(Math.max(0, .13 - groundIndex * .026)));
    document.querySelectorAll('.ground-marks i').forEach((mark, index) => mark.classList.toggle('visited', index <= groundIndex));
    if (focus) {
      if (complete) $('groundComplete').focus({preventScroll:true});
      else steps[groundIndex].querySelector('input').focus({preventScroll:true});
      $('groundStatus').textContent = complete ? t('ground.doneTitle') : t('ground.stage', {step:groundIndex + 1});
      if (!reducedMotion.matches) {
        (complete ? $('groundComplete') : steps[groundIndex]).animate(
          [{opacity:.35,transform:'translateX(6px)'},{opacity:1,transform:'translateX(0)'}],
          {duration:350,easing:'cubic-bezier(.22,.7,.24,1)'}
        );
      }
    }
  }
  $('groundNext').addEventListener('click', () => { groundIndex = groundIndex === 5 ? 0 : groundIndex + 1; renderGround(true); });
  $('groundSkip').addEventListener('click', () => { groundIndex = Math.min(5, groundIndex + 1); renderGround(true); });
  $('groundBack').addEventListener('click', () => { groundIndex = Math.max(0, groundIndex - 1); renderGround(true); });
  steps.forEach(step => {
    const input = step.querySelector('input');
    input.addEventListener('input', () => step.classList.toggle('done', input.value.trim().length > 0));
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter' && !event.isComposing) { event.preventDefault(); $('groundNext').click(); }
    });
  });

  function renderReframe(animate = false) {
    const out = $('out');
    out.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = t('reframe.outputTitle');
    out.append(heading);
    if (!reframeSnapshot) {
      const hint = document.createElement('p');
      hint.className = 'output-hint';
      hint.textContent = t('reframe.outputHint');
      out.append(hint);
      return;
    }
    const [thought, evidence, alternative, action] = reframeSnapshot;
    const first = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = thought;
    first.append(document.createTextNode(t('reframe.noticed')), strong);
    out.append(first);
    const sentence = text => /[.!?…]$/.test(text) ? text : text + '.';
    [
      sentence(t('reframe.verify') + (evidence || t('reframe.little'))),
      sentence(t('reframe.possible') + (alternative || t('reframe.ordinary'))),
      t('reframe.now') + (action || t('reframe.unresolved')).replace(/[.!?…]+$/, '') + t('reframe.unknown')
    ].forEach(text => { const p = document.createElement('p'); p.textContent = text; out.append(p); });
    if (animate && !reducedMotion.matches) out.animate([{opacity:0},{opacity:1}], {duration:650,easing:'ease-out'});
  }
  $('reframeForm').addEventListener('submit', event => {
    event.preventDefault();
    const values = ['thought','evidence','alt','act'].map(id => $(id).value.trim());
    reframeError = !values[0];
    $('reframeError').hidden = !reframeError;
    $('reframeError').textContent = reframeError ? t('reframe.empty') : '';
    $('thought').setAttribute('aria-invalid', String(reframeError));
    if (reframeError) { $('thought').focus(); return; }
    reframeSnapshot = values;
    renderReframe(true);
    $('out').focus({preventScroll:true});
    if (mobile.matches) $('out').scrollIntoView({behavior:reducedMotion.matches ? 'auto' : 'smooth',block:'center'});
  });

  // Keep the original storage namespace and UTC date convention for saved plans.
  function loadPlan() {
    const nextKey = 'stillpoint-' + new Date().toISOString().slice(0,10);
    if (nextKey === dayKey) return;
    dayKey = nextKey;
    try {
      const parsed = JSON.parse(readSaved(dayKey) || '{}');
      savedPlan = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch (_) { savedPlan = {}; }
    boxes.forEach(box => { box.checked = savedPlan[box.id] === true; });
    renderStorageStatus();
  }
  boxes.forEach(box => box.addEventListener('change', () => {
    const checked = box.checked;
    loadPlan();
    box.checked = checked;
    savedPlan[box.id] = checked;
    save(dayKey, JSON.stringify(savedPlan));
  }));
  document.addEventListener('visibilitychange', () => { if (!document.hidden) loadPlan(); });
  setInterval(loadPlan, 60000);

  function renderLanguage() {
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)); });
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]').content = t('meta.description');
    document.querySelectorAll('meta[property="og:title"],meta[name="twitter:title"]').forEach(el => { el.content = t('meta.title'); });
    document.querySelectorAll('meta[property="og:description"],meta[name="twitter:description"]').forEach(el => { el.content = t('meta.social'); });
    languageOptions.forEach(option => option.setAttribute('aria-checked', String(option.dataset.language === language)));
    $('menuToggle').textContent = t($('headerNav').classList.contains('is-open') ? 'menu.close' : 'menu');
    $('reframeError').textContent = reframeError ? t('reframe.empty') : '';
    renderTheme(); renderBreathingText(); renderGround(); renderReframe(); renderStorageStatus();
  }
  function setLanguageMenu(open, focus = true) {
    $('languageMenu').hidden = !open;
    $('languageToggle').setAttribute('aria-expanded', String(open));
    if (open && focus) languageOptions.find(option => option.dataset.language === language).focus();
  }
  $('languageToggle').addEventListener('click', () => setLanguageMenu($('languageMenu').hidden));
  $('languageToggle').addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault(); setLanguageMenu(true);
    }
  });
  languageOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
      language = option.dataset.language;
      renderLanguage(); save(languageKey, language);
      setLanguageMenu(false); $('languageToggle').focus();
    });
    option.addEventListener('keydown', event => {
      const keys = ['ArrowDown','ArrowUp','Home','End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? languageOptions.length-1 :
        (index + (event.key === 'ArrowDown' ? 1 : -1) + languageOptions.length) % languageOptions.length;
      languageOptions[next].focus();
    });
  });
  $('languageMenu').addEventListener('focusout', () => {
    setTimeout(() => { if (!$('languageMenu').contains(document.activeElement)) setLanguageMenu(false); }, 0);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.language-picker')) setLanguageMenu(false);
  });
  $('themeToggle').addEventListener('click', () => {
    root.dataset.theme = currentTheme() === 'dark' ? 'light' : 'dark';
    save(themeKey, root.dataset.theme); renderTheme();
  });
  colorScheme.addEventListener('change', renderTheme);

  function setMobileMenu(open, focus = false) {
    $('headerNav').classList.toggle('is-open', open);
    $('menuToggle').setAttribute('aria-expanded', String(open));
    $('menuToggle').textContent = t(open ? 'menu.close' : 'menu');
    if (!open) setLanguageMenu(false);
    if (focus) $('menuToggle').focus();
  }
  $('menuToggle').addEventListener('click', () => setMobileMenu(!$('headerNav').classList.contains('is-open')));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (!$('languageMenu').hidden) { setLanguageMenu(false); $('languageToggle').focus(); }
    else if ($('headerNav').classList.contains('is-open')) setMobileMenu(false, true);
  });
  mobile.addEventListener('change', () => {
    const focusWasInNav = $('headerNav').contains(document.activeElement);
    setMobileMenu(false, mobile.matches && focusWasInNav);
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    setMobileMenu(false);
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex','-1');
      target.focus({preventScroll:true});
    }
  }));

  // One atmosphere responds to the pointer; it never captures clicks or runs on touch.
  const hero = document.querySelector('.hero');
  let pointerFrame = 0;
  hero.addEventListener('pointermove', event => {
    if (!finePointer.matches || reducedMotion.matches || pointerFrame) return;
    const x = event.clientX, y = event.clientY;
    pointerFrame = requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty('--air-x', ((x-bounds.left)/bounds.width-.5)*8 + 'px');
      hero.style.setProperty('--air-y', ((y-bounds.top)/bounds.height-.5)*8 + 'px');
      pointerFrame = 0;
    });
  });
  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--air-x','0px'); hero.style.setProperty('--air-y','0px');
  });
  document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('pointermove', event => {
      if (!finePointer.matches || reducedMotion.matches) return;
      const bounds = button.getBoundingClientRect();
      const x = Math.max(-2,Math.min(2,(event.clientX-bounds.left-bounds.width/2)*.04));
      const y = Math.max(-2,Math.min(2,(event.clientY-bounds.top-bounds.height/2)*.04));
      button.style.translate = x+'px '+y+'px';
    });
    button.addEventListener('pointerleave', () => { button.style.translate = '0px 0px'; });
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      document.getAnimations().forEach(animation => animation.cancel());
      document.querySelectorAll('.magnetic').forEach(button => { button.style.translate = '0px 0px'; });
    }
  });
  if ('IntersectionObserver' in window) {
    const labels = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!reducedMotion.matches) entry.target.animate([{opacity:.35},{opacity:1}],{duration:700});
      labels.unobserve(entry.target);
    }), {threshold:.8});
    document.querySelectorAll('.section-index').forEach(label => labels.observe(label));
    const navigation = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('nav a').forEach(link => {
        if (link.hash === '#'+entry.target.id) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    }), {rootMargin:'-15% 0px -60% 0px'});
    document.querySelectorAll('section[id]').forEach(section => navigation.observe(section));
  }
  loadPlan();
  renderLanguage();
})();

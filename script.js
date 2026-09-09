(function(){
  var translations = {
    en: {
      meta: { title: 'Stillpoint — An anxiety toolkit for INFJs', description: 'Stillpoint is an anxiety self-help toolkit for INFJs, with breathing, grounding, reframing, and daily planning exercises.', socialDescription: 'A calm, private anxiety self-help toolkit for INFJs.' },
      skip: 'Skip to content', switch: { light: 'Light', dark: 'Dark', themeLight: 'Current theme: light. Activate to switch to dark theme.', themeDark: 'Current theme: dark. Activate to switch to light theme.', languageEn: 'Current language: English. Activate to switch to Bahasa Indonesia.', languageId: 'Current language: Bahasa Indonesia. Activate to switch to English.' }, nav: { label: 'Sections' }, tabs: { breathe: 'Breathe', ground: 'Ground', reframe: 'Reframe', patterns: 'INFJ patterns', plan: 'Daily plan' },
      hero: { eyebrow: 'A calm room for an overthinking mind', title: 'Your anxiety is mostly your intuition running without a brake.', lede: 'INFJ anxiety rarely comes from nothing. It comes from absorbing other people, predicting ten futures at once, and holding it all in silence. Stillpoint gives you four moves: settle the body, return to now, question the story, protect your energy.', start: 'Start a 2-minute reset', patterns: 'See my patterns', orb: 'here, now', privacy: 'Nothing here is stored anywhere but this browser. Nothing is sent, shared, or scored.' },
      breathe: { title: '1. Settle the body first', sub: 'You cannot reason your way out of a nervous system that thinks it is in danger. A long exhale is the fastest honest signal that you are safe. Follow the circle: inhale 4, hold 4, exhale 6.', ready: 'Ready', pressStart: 'Press start', whyTitle: 'Why this works for you', why: 'Your mind is fast and abstract, so it will try to "solve" the anxiety. Breathing gives it a small, concrete, finishable job — which is the only kind of job an anxious INFJ mind can actually complete.', start: 'Start', reset: 'Reset', running: 'Running…', cycles: 'Cycles completed:', aim: 'Aim for 6 cycles', tightTitle: 'If your chest is tight right now', tight: 'Put both feet flat, unclench your jaw, drop your shoulders, and let the exhale be longer than the inhale. Do that three times before reading anything else on this page.', inhale: 'Inhale', hold: 'Hold', exhale: 'Exhale' },
      ground: { title: '2. Come back from the future', sub: 'Ni-Fi anxiety lives in scenarios that have not happened. Grounding does not argue with the scenario — it just moves your attention to the room you are actually in. Fill in what you notice; the boxes are yours alone.', see: 'things you can see', seePlaceholder: 'lamp, window, mug…', seeAria: 'Five things you can see', touch: 'things you can touch', touchPlaceholder: 'desk, sleeve, floor…', touchAria: 'Four things you can touch', hear: 'sounds you can hear', hearPlaceholder: 'fan, traffic, my breath…', hearAria: 'Three sounds you can hear', smell: 'things you can smell', smellPlaceholder: 'coffee, rain…', smellAria: 'Two things you can smell', good: 'thing that is true and good right now', goodPlaceholder: 'I am safe in this room.', goodAria: 'One good thing that is true now', tenTitle: 'The 10-second version', ten: 'In a meeting or a crowd, you do not need all five. Name three things you can see and press your feet into the floor. That is enough to interrupt the spiral.', whoseTitle: 'Whose feeling is this?', whose: 'INFJs absorb the mood of the room and then treat it as their own. Ask, in order:', question1: '· Was I anxious before I saw this person or message?', question2: '· Is there an actual request being made of me?', question3: '· If this feeling belongs to someone else, I can care about it without carrying it.' },
      reframe: { title: '3. Put the story on trial', sub: 'Your intuition is often right about patterns and often wrong about certainty. Write the thought down, then answer four questions. Seeing it outside your head takes away most of its authority.', thoughtLabel: 'The thought that is looping', thoughtPlaceholder: 'They replied briefly, so I must have done something wrong and this relationship is ending.', evidenceLabel: 'Facts I can actually verify', evidencePlaceholder: 'They sent three words. They were in a busy week.', altLabel: 'A second explanation that fits the same facts', altPlaceholder: 'They were tired and answered fast.', actLabel: 'The smallest thing I can do in the next hour', actPlaceholder: 'Ask one direct question, or close the laptop and walk.', build: 'Build my reframe', outputTitle: 'Your reframe', outputHint: 'Fill in the fields and press the button. Your reframe will appear here so you can read it back as a sentence instead of a feeling.', memoryTitle: 'Three sentences worth memorising', quote1: 'A prediction is not information.', quote2: "I can hold someone's pain without making it my responsibility.", quote3: 'Not deciding today is also a decision I am allowed to make.', empty: 'Start with the looping thought — one sentence is enough.', noticed: 'I noticed the thought:', verify: 'What I can verify is only this:', little: 'very little, honestly', possible: 'An equally possible reading is:', ordinary: 'something ordinary and not about me', now: 'So for now I will', unresolved: 'let it be unresolved and return to my own day', unknown: ', and let the rest stay unknown.' },
      patterns: { title: '4. The five loops that catch INFJs', sub: 'Anxiety is easier to interrupt when it has a name. Open the one that sounds like this week and use the counter-move — not as self-improvement, just as a way out of the room.', counter: 'Counter-move:', oneTitle: 'Doorslam dread — reading distance into every small silence', oneTag: 'Fi–Ni loop', oneBody: 'You notice a tone shift, build a full story about being unwanted, then quietly withdraw first to protect yourself. The withdrawal then creates the distance you feared.', oneMove: 'ask one plain question out loud within 24 hours. "Are we okay? Your message read short to me." Direct questions cost less than a week of simulation.', twoTitle: 'Absorbed emotion — carrying feelings that were never yours', twoTag: 'Fe overload', twoBody: "You leave a conversation heavier than you arrived and cannot say why. Your empathy has no default off switch, so other people's stress becomes your body's stress.", twoMove: 'a 20-minute decompression buffer after intense contact. No phone, no analysis. Walk, wash dishes, stretch. Give the borrowed feeling somewhere to leave.', threeTitle: 'Perfect-standard paralysis — nothing is ready, so nothing ships', threeTag: 'Ni idealism', threeBody: 'You can see the ideal version so vividly that the real version feels humiliating. So you delay, and the delay becomes new anxiety.', threeMove: 'set a deliberate "good enough" line before you start, and a hard stop time. Ship at the line. Your vision is a compass, not an entry requirement.', fourTitle: 'Over-giving then resentment — yes now, exhaustion later', fourTag: 'Weak boundary', fourBody: 'You agree because you can feel how much they need it, then resent the cost. Resentment turns inward and reads as anxiety and guilt.', fourMove: 'buy time before agreeing. "Let me check and come back to you tonight." One sentence protects most of your week.', fiveTitle: 'Sensory and social depletion — the crash after being seen', fiveTag: 'Se grip', fiveBody: 'After long social exposure you overeat, doomscroll, or overspend, then feel out of control and anxious about yourself.', fiveMove: 'plan the recovery before the event, not after. Book solitude on the calendar as if it were a meeting, because for you it is one.' },
      plan: { title: '5. A day built for a sensitive nervous system', sub: 'Anxiety drops most from boring structure, not insight. Tick what you did today — the list resets itself each day and lives only in this browser.', item1: 'Daylight and movement within an hour of waking', item2: 'Write the top worry on paper before opening messages', item3: 'One 90-minute deep-work block, phone in another room', item4: '20 minutes of protected solitude, no input', item5: 'Say one true thing out loud to one person', item6: 'Screens off 45 minutes before bed', morning: '— morning', midday: '— midday', afternoon: '— afternoon', evening: '— evening', night: '— night', boundaryTitle: 'Boundary lines you can borrow', boundary1: '"I want to help, and I need to check my week first."', boundary2: '"I care about this. I don\'t have the capacity today."', boundary3: '"Can I answer you tomorrow morning?"', crisisTitle: 'When to bring in a person, not a page', crisis: 'If anxiety is stopping you from sleeping, eating, studying, or leaving the house for weeks, or you have thoughts of harming yourself, please talk to a doctor, a campus counsellor, or a local crisis line. This site is a self-help tool, not treatment, and reaching out is a strength move, not a failure.' },
      footer: 'Stillpoint · built for one quiet, intense mind · everything you type stays on this device'
    },
    id: {
      meta: { title: 'Stillpoint — Perangkat bantu cemas untuk INFJ', description: 'Stillpoint adalah perangkat bantu mandiri untuk kecemasan pada INFJ, dengan latihan napas, grounding, reframing, dan rencana harian.', socialDescription: 'Perangkat bantu mandiri yang tenang dan privat untuk kecemasan pada INFJ.' },
      skip: 'Lewati ke konten', switch: { light: 'Terang', dark: 'Gelap', themeLight: 'Tema saat ini: terang. Aktifkan untuk beralih ke tema gelap.', themeDark: 'Tema saat ini: gelap. Aktifkan untuk beralih ke tema terang.', languageEn: 'Bahasa saat ini: Inggris. Aktifkan untuk beralih ke Bahasa Indonesia.', languageId: 'Bahasa saat ini: Indonesia. Aktifkan untuk beralih ke bahasa Inggris.' }, nav: { label: 'Bagian' }, tabs: { breathe: 'Bernapas', ground: 'Membumi', reframe: 'Tinjau ulang', patterns: 'Pola INFJ', plan: 'Rencana harian' },
      hero: { eyebrow: 'Ruang tenang untuk pikiran yang terlalu banyak memikirkan', title: 'Kecemasanmu sering kali adalah intuisimu yang berjalan tanpa rem.', lede: 'Kecemasan INFJ jarang muncul tanpa alasan. Ia tumbuh saat kamu menyerap orang lain, meramal sepuluh kemungkinan sekaligus, lalu memendam semuanya sendiri. Stillpoint menawarkan empat langkah: tenangkan tubuh, kembali ke saat ini, periksa ceritanya, dan jaga energimu.', start: 'Mulai jeda 2 menit', patterns: 'Lihat polaku', orb: 'di sini, kini', privacy: 'Tidak ada yang disimpan di mana pun selain di browser ini. Tidak ada yang dikirim, dibagikan, atau dinilai.' },
      breathe: { title: '1. Tenangkan tubuh terlebih dahulu', sub: 'Kamu tidak bisa berpikir keluar dari sistem saraf yang merasa sedang dalam bahaya. Hembusan napas yang panjang adalah sinyal paling jujur dan cepat bahwa kamu aman. Ikuti lingkaran ini: tarik 4, tahan 4, hembuskan 6.', ready: 'Siap', pressStart: 'Tekan mulai', whyTitle: 'Mengapa ini membantu', why: 'Pikiranmu cepat dan abstrak, jadi ia akan mencoba “memecahkan” kecemasan. Bernapas memberinya tugas kecil, nyata, dan bisa diselesaikan — jenis tugas yang benar-benar bisa dituntaskan oleh pikiran INFJ yang sedang cemas.', start: 'Mulai', reset: 'Atur ulang', running: 'Berjalan…', cycles: 'Siklus selesai:', aim: 'Targetkan 6 siklus', tightTitle: 'Jika dadamu terasa sesak sekarang', tight: 'Letakkan kedua kaki rata di lantai, lepaskan rahangmu, turunkan bahumu, dan biarkan hembusan napas lebih panjang daripada tarikan napas. Lakukan tiga kali sebelum membaca hal lain di halaman ini.', inhale: 'Tarik napas', hold: 'Tahan', exhale: 'Hembuskan' },
      ground: { title: '2. Kembali dari masa depan', sub: 'Kecemasan Ni-Fi hidup dalam skenario yang belum terjadi. Grounding tidak berdebat dengan skenario itu — ia hanya memindahkan perhatianmu ke ruangan tempatmu benar-benar berada. Isi apa yang kamu sadari; kotak-kotak ini hanya milikmu.', see: 'hal yang bisa kamu lihat', seePlaceholder: 'lampu, jendela, cangkir…', seeAria: 'Lima hal yang bisa kamu lihat', touch: 'hal yang bisa kamu sentuh', touchPlaceholder: 'meja, lengan baju, lantai…', touchAria: 'Empat hal yang bisa kamu sentuh', hear: 'suara yang bisa kamu dengar', hearPlaceholder: 'kipas, lalu lintas, napasku…', hearAria: 'Tiga suara yang bisa kamu dengar', smell: 'hal yang bisa kamu cium', smellPlaceholder: 'kopi, hujan…', smellAria: 'Dua hal yang bisa kamu cium', good: 'hal yang benar dan baik saat ini', goodPlaceholder: 'Aku aman di ruangan ini.', goodAria: 'Satu hal baik yang benar saat ini', tenTitle: 'Versi 10 detik', ten: 'Di rapat atau di keramaian, kamu tidak perlu melakukan kelimanya. Sebutkan tiga hal yang kamu lihat dan tekan telapak kakimu ke lantai. Itu cukup untuk memutus spiral.', whoseTitle: 'Perasaan siapa ini?', whose: 'INFJ sering menyerap suasana ruangan lalu menganggapnya sebagai milik sendiri. Tanyakan secara berurutan:', question1: '· Apakah aku sudah cemas sebelum melihat orang atau pesan ini?', question2: '· Apakah ada permintaan nyata yang ditujukan kepadaku?', question3: '· Jika perasaan ini milik orang lain, aku bisa peduli tanpa harus memikulnya.' },
      reframe: { title: '3. Uji cerita itu', sub: 'Intuisimu sering tepat dalam mengenali pola, tetapi sering keliru soal kepastian. Tuliskan pikiran itu, lalu jawab empat pertanyaan. Melihatnya di luar kepalamu mengurangi sebagian besar kuasanya.', thoughtLabel: 'Pikiran yang terus berputar', thoughtPlaceholder: 'Mereka membalas singkat, jadi pasti aku melakukan kesalahan dan hubungan ini akan berakhir.', evidenceLabel: 'Fakta yang benar-benar bisa kuverifikasi', evidencePlaceholder: 'Mereka mengirim tiga kata. Mereka sedang menjalani minggu yang sibuk.', altLabel: 'Penjelasan lain yang juga sesuai dengan fakta yang sama', altPlaceholder: 'Mereka lelah dan menjawab dengan cepat.', actLabel: 'Hal terkecil yang bisa kulakukan dalam satu jam ke depan', actPlaceholder: 'Ajukan satu pertanyaan langsung, atau tutup laptop lalu berjalan kaki.', build: 'Susun reframing-ku', outputTitle: 'Reframing-mu', outputHint: 'Isi kolom-kolomnya lalu tekan tombol. Reframing-mu akan muncul di sini agar kamu bisa membacanya sebagai kalimat, bukan sekadar perasaan.', memoryTitle: 'Tiga kalimat yang layak diingat', quote1: 'Prediksi bukanlah informasi.', quote2: 'Aku bisa menampung rasa sakit seseorang tanpa menjadikannya tanggung jawabku.', quote3: 'Tidak memutuskan hari ini juga keputusan yang boleh kuambil.', empty: 'Mulai dari pikiran yang berputar itu — satu kalimat sudah cukup.', noticed: 'Aku menyadari pikiran ini:', verify: 'Yang benar-benar bisa kuverifikasi hanya ini:', little: 'sangat sedikit, sejujurnya', possible: 'Pembacaan lain yang sama mungkinnya adalah:', ordinary: 'sesuatu yang biasa dan bukan tentang diriku', now: 'Jadi, untuk sekarang aku akan', unresolved: 'membiarkannya belum terjawab dan kembali ke hariku sendiri', unknown: ', lalu membiarkan sisanya tetap belum diketahui.' },
      patterns: { title: '4. Lima pola yang sering menjebak INFJ', sub: 'Kecemasan lebih mudah diputus ketika punya nama. Buka pola yang paling terasa seperti minggu ini dan gunakan langkah penyeimbangnya — bukan untuk memperbaiki diri, hanya untuk keluar dari ruangan itu.', counter: 'Langkah penyeimbang:', oneTitle: 'Cemas ditinggalkan — membaca jarak dari setiap jeda kecil', oneTag: 'Pola Fi–Ni', oneBody: 'Kamu menangkap perubahan nada, menyusun cerita lengkap bahwa kamu tidak diinginkan, lalu diam-diam menarik diri lebih dulu untuk melindungi diri. Penarikan diri itu justru menciptakan jarak yang kamu takutkan.', oneMove: 'ajukan satu pertanyaan sederhana dengan lantang dalam 24 jam. “Kita baik-baik saja? Pesanmu terasa singkat bagiku.” Pertanyaan langsung lebih ringan daripada seminggu penuh simulasi di kepala.', twoTitle: 'Emosi terserap — memikul perasaan yang bukan milikmu', twoTag: 'Beban Fe', twoBody: 'Kamu meninggalkan percakapan dengan beban lebih berat daripada saat datang dan tidak tahu sebabnya. Empatimu tidak punya tombol mati bawaan, jadi stres orang lain berubah menjadi stres di tubuhmu.', twoMove: 'beri jeda dekompresi 20 menit setelah kontak yang intens. Tanpa ponsel, tanpa analisis. Berjalan, mencuci piring, meregangkan tubuh. Beri perasaan pinjaman itu tempat untuk pergi.', threeTitle: 'Lumpuh oleh standar sempurna — tidak ada yang siap, jadi tak ada yang selesai', threeTag: 'Idealisme Ni', threeBody: 'Kamu bisa melihat versi ideal dengan sangat jelas sampai versi nyata terasa memalukan. Lalu kamu menunda, dan penundaan itu berubah menjadi kecemasan baru.', threeMove: 'tetapkan batas “cukup baik” sebelum memulai, serta waktu berhenti yang tegas. Selesaikan di batas itu. Visimu adalah kompas, bukan syarat untuk mulai.', fourTitle: 'Terlalu memberi lalu kesal — iya sekarang, lelah kemudian', fourTag: 'Batas lemah', fourBody: 'Kamu setuju karena bisa merasakan betapa mereka membutuhkannya, lalu membenci biaya yang harus kamu bayar. Kekesalan itu berbalik ke dalam dan terasa sebagai kecemasan serta rasa bersalah.', fourMove: 'beri dirimu waktu sebelum menyetujui. “Aku cek dulu, lalu kuberi kabar malam ini.” Satu kalimat bisa melindungi sebagian besar minggumu.', fiveTitle: 'Lelah secara indra dan sosial — jatuh setelah dilihat orang', fiveTag: 'Cengkeraman Se', fiveBody: 'Setelah terlalu lama bersosialisasi, kamu makan berlebihan, doomscroll, atau belanja berlebihan, lalu merasa kehilangan kendali dan cemas terhadap dirimu sendiri.', fiveMove: 'rencanakan pemulihan sebelum acaranya, bukan sesudahnya. Jadwalkan waktu sendiri di kalender seolah itu rapat, karena bagimu memang demikian.' },
      plan: { title: '5. Sehari yang dibangun untuk sistem saraf yang peka', sub: 'Kecemasan paling banyak berkurang karena struktur yang membosankan, bukan karena wawasan. Centang yang kamu lakukan hari ini — daftar ini akan diatur ulang setiap hari dan hanya tersimpan di browser ini.', item1: 'Cahaya siang dan bergerak dalam satu jam setelah bangun', item2: 'Tulis kekhawatiran terbesar di kertas sebelum membuka pesan', item3: 'Satu blok kerja mendalam 90 menit, ponsel di ruangan lain', item4: '20 menit waktu sendiri yang terlindungi, tanpa masukan', item5: 'Ucapkan satu hal yang jujur kepada satu orang', item6: 'Matikan layar 45 menit sebelum tidur', morning: '— pagi', midday: '— siang', afternoon: '— sore', evening: '— malam', night: '— malam', boundaryTitle: 'Kalimat batas yang bisa kamu pinjam', boundary1: '“Aku ingin membantu, dan aku perlu memeriksa jadwalku dulu.”', boundary2: '“Aku peduli pada ini. Hari ini aku tidak punya kapasitas.”', boundary3: '“Boleh aku menjawabmu besok pagi?”', crisisTitle: 'Saat perlu melibatkan seseorang, bukan hanya halaman', crisis: 'Jika kecemasan membuatmu tidak bisa tidur, makan, belajar, atau keluar rumah selama berminggu-minggu, atau jika kamu memiliki pikiran untuk menyakiti diri sendiri, mohon bicara dengan dokter, konselor kampus, atau layanan krisis setempat. Situs ini adalah alat bantu mandiri, bukan pengobatan, dan mencari bantuan adalah langkah yang kuat, bukan kegagalan.' },
      footer: 'Stillpoint · dibuat untuk satu pikiran yang tenang dan intens · semua yang kamu ketik tetap di perangkat ini'
    }
  };

  var activeLanguage = 'en';
  function t(key){
    return key.split('.').reduce(function(value, part){ return value && value[part]; }, translations[activeLanguage]) || '';
  }

  // Theme preference
  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var themeLabel = document.getElementById('themeLabel');
  var languageToggle = document.getElementById('languageToggle');
  var languageLabel = document.getElementById('languageLabel');
  var themeKey = 'stillpoint-theme';
  var languageKey = 'stillpoint-language';
  var storedTheme = null;
  var storedLanguage = null;
  var colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  try { storedTheme = localStorage.getItem(themeKey); } catch(err){}
  try { storedLanguage = localStorage.getItem(languageKey); } catch(err){}
  function currentTheme(){
    return root.dataset.theme || (colorScheme.matches ? 'dark' : 'light');
  }
  function updateThemeToggle(theme){
    var isDark = theme === 'dark';
    themeLabel.textContent = isDark ? t('switch.dark') : t('switch.light');
    themeToggle.setAttribute('aria-checked', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? t('switch.themeDark') : t('switch.themeLight'));
  }
  function setTheme(theme, save){
    root.dataset.theme = theme;
    updateThemeToggle(theme);
    if(save){
      try { localStorage.setItem(themeKey, theme); } catch(err){}
    }
  }
  function updateLanguageToggle(){
    var isIndonesian = activeLanguage === 'id';
    languageLabel.textContent = isIndonesian ? 'ID' : 'EN';
    languageToggle.setAttribute('aria-checked', String(isIndonesian));
    languageToggle.setAttribute('aria-label', isIndonesian ? t('switch.languageId') : t('switch.languageEn'));
  }
  function translatePage(){
    document.querySelectorAll('[data-i18n]').forEach(function(element){ element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element){ element.placeholder = t(element.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function(element){ element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel)); });
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]').setAttribute('content', t('meta.description'));
    document.querySelector('meta[property="og:title"]').setAttribute('content', t('meta.title'));
    document.querySelector('meta[property="og:description"]').setAttribute('content', t('meta.socialDescription'));
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', t('meta.title'));
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', t('meta.socialDescription'));
    updateLanguageToggle();
    updateThemeToggle(currentTheme());
    if(hasReframe) buildReframe();
  }
  function setLanguage(language, save){
    activeLanguage = language;
    root.lang = language;
    translatePage();
    if(save){
      try { localStorage.setItem(languageKey, language); } catch(err){}
    }
  }
  setLanguage(storedLanguage === 'id' ? 'id' : 'en', false);
  if(storedTheme === 'light' || storedTheme === 'dark'){
    setTheme(storedTheme, false);
  } else {
    updateThemeToggle(currentTheme());
    colorScheme.addEventListener('change', function(){
      if(!root.dataset.theme) updateThemeToggle(currentTheme());
    });
  }
  themeToggle.addEventListener('click', function(){
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark', true);
  });
  languageToggle.addEventListener('click', function(){
    setLanguage(activeLanguage === 'en' ? 'id' : 'en', true);
  });

  // Tabs
  var tabs = document.querySelectorAll('nav [data-tab]');
  var panels = ['breathe','ground','reframe','patterns','plan'];
  function show(id){
    panels.forEach(function(p){ document.getElementById(p).hidden = (p !== id); });
    tabs.forEach(function(t){
      var selected = t.dataset.tab === id;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
    });
  }
  tabs.forEach(function(t, index){
    t.addEventListener('click', function(){ show(t.dataset.tab); });
    t.addEventListener('keydown', function(event){
      if(event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      var nextIndex = (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      var nextTab = tabs[nextIndex];
      show(nextTab.dataset.tab);
      nextTab.focus();
    });
  });
  document.querySelectorAll('[data-goto]').forEach(function(b){
    b.addEventListener('click', function(){
      show(b.dataset.goto);
      document.getElementById(b.dataset.goto).scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Breathing 4-4-6
  var seq = [['breathe.inhale',4,2.05],['breathe.hold',4,2.05],['breathe.exhale',6,1]];
  var i=0, left=seq[0][1], timer=null, cycles=0;
  var phase=document.getElementById('phase'), count=document.getElementById('count'),
      fill=document.getElementById('fill'), cyc=document.getElementById('cycles');
  function render(){
    phase.textContent = t(seq[i][0]);
    count.textContent = left + 's';
    fill.style.transitionDuration = (seq[i][0]==='breathe.hold' ? '0.3s' : seq[i][1]+'s');
    fill.style.transform = 'scale(' + seq[i][2] + ')';
  }
  function tick(){
    left--;
    if(left <= 0){
      i = (i+1) % seq.length;
      if(i === 0){ cycles++; cyc.textContent = cycles; }
      left = seq[i][1];
      render();
    } else { count.textContent = left + 's'; }
  }
  document.getElementById('startBtn').addEventListener('click', function(){
    if(timer) return;
    i=0; left=seq[0][1]; render();
    timer = setInterval(tick, 1000);
    this.textContent = t('breathe.running');
  });
  document.getElementById('stopBtn').addEventListener('click', function(){
    clearInterval(timer); timer=null; cycles=0; cyc.textContent='0';
    i=0; left=seq[0][1];
    phase.textContent=t('breathe.ready'); count.textContent=t('breathe.pressStart');
    fill.style.transitionDuration='0.4s'; fill.style.transform='scale(1)';
    document.getElementById('startBtn').textContent = t('breathe.start');
  });

  // Grounding completion state
  document.querySelectorAll('#steps input').forEach(function(inp){
    inp.addEventListener('input', function(){
      inp.closest('.step').classList.toggle('done', inp.value.trim().length > 0);
    });
  });

  // Reframe builder
  var hasReframe = false;
  function buildReframe(){
    var thought=v('thought'), e=v('evidence'), a=v('alt'), c=v('act');
    hasReframe = true;
    if(!thought){ document.getElementById('out').innerHTML = '<h4>' + t('reframe.outputTitle') + '</h4><p style="margin:0">' + t('reframe.empty') + '</p>'; return; }
    var html = '<h4>' + t('reframe.outputTitle') + '</h4>';
    html += '<p>' + t('reframe.noticed') + ' <b>' + esc(thought) + '</b></p>';
    html += '<p>' + t('reframe.verify') + ' ' + esc(e || t('reframe.little')) + '.</p>';
    html += '<p>' + t('reframe.possible') + ' ' + esc(a || t('reframe.ordinary')) + '.</p>';
    html += '<p style="margin:0">' + t('reframe.now') + ' ' + esc(c || t('reframe.unresolved')) + t('reframe.unknown') + '</p>';
    document.getElementById('out').innerHTML = html;
  }
  document.getElementById('buildBtn').addEventListener('click', buildReframe);
  function v(id){ return document.getElementById(id).value.trim(); }
  function esc(s){ return s.replace(/[&<>\"]/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[m]; }); }

  // Daily plan, resets each day
  var boxes = document.querySelectorAll('#planList input');
  var key = 'stillpoint-' + new Date().toISOString().slice(0,10);
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch(err){ saved = {}; }
  function sync(){
    var done=0;
    boxes.forEach(function(b){ if(b.checked) done++; });
    document.getElementById('bar').style.width = (done / boxes.length * 100) + '%';
  }
  boxes.forEach(function(b){
    if(saved[b.id]) b.checked = true;
    b.addEventListener('change', function(){
      saved[b.id] = b.checked;
      try { localStorage.setItem(key, JSON.stringify(saved)); } catch(err){}
      sync();
    });
  });
  sync();
})();

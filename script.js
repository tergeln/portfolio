(function () {
  var mn = {
    'nav.about': 'Миний тухай', 'nav.projects': 'Төслүүд', 'nav.making': 'Мэргэжлээс гадуурх ур чадвар', 'nav.experience': 'Туршлага', 'nav.education': 'Боловсрол',
    'nav.skills': 'Ур чадвар', 'nav.certificates': 'Гэрчилгээ', 'nav.contact': 'Холбоо барих',
    'hero.lead': 'Сайн байна уу, танилцахад таатай байна!',
    'hero.contact': 'Холбогдох', 'hero.work': 'Төслүүдийг үзэх',
    'alt.sea': 'Ногоон дөрвөлжин хээтэй алчуураар ороосон Тэргэл шуургатай далайн өмнө зогсож байна',
    'alt.campus': 'Тэргэл их сургуулийн хотхоны цөөрмийн дэргэд цэлмэг тэнгэрийн доор зогсож байна',
    'alt.gate': 'Тэргэл улаан, цэнхэр дугуй дүрстэй улаан модон хаалганы өмнө нэг хөл дээрээ зогсож байна',
    'about.title': 'Миний тухай',
    'about.p1': 'Намайг Тэргэл гэдэг. Би 21 настай, Монгол Улсын Их Сургуулийн програм хангамжийн инженерчлэлийн 4-р курсын оюутан.',
    'projects.title': 'Төслүүд',
    'p1.title': 'mci.mn: Magic Code AI-д зориулж хийсэн вебсайт', 'p1.role': 'Төслийн багийн ахлагч',
    'p1.b1': '4–5 хөгжүүлэгчтэй багийг удирдсан.',
    'p1.b2': 'Frontend болон backend хэсгийг хөгжүүлсэн.',
    'p1.b3': 'Magic Code AI-ийн сургалт, вебсайт хийх үйлчилгээг танилцуулсан responsive вебсайтыг гаргасан.',
    'p1.visit': 'mci.mn сайт руу орох',
    'p2.title': 'Recifridge: хиймэл оюунд суурилсан ухаалаг хөргөгчний удирдлагын систем', 'p2.role': 'Нээлттэй эхийн багийн төсөл, Чүнбүк Үндэсний Их Сургууль',
    'p2.b1': 'Солилцооны хөтөлбөрийн үеэр танилцсан оюутнуудтай хамтран хөгжүүлсэн.',
    'p2.b2': 'Хэрэглэгч хүнсээ бүртгэн удирдаж, хиймэл оюуны санал болгосон жор авах боломжтой.',
    'p2.b3': 'Хоол хийх зөвлөгөө өгдөг хиймэл оюун туслах болон шим тэжээлийн мэдээллийг хянах эрүүл мэндийн самбартай.',
    'making.title': 'Мэргэжлээс гадуурх ур чадвар',
    'making.p1': 'CorelDRAW дээр арьс, модыг лазер болон CNC машинаар зүсэх, сийлэх вектор зураг зурж, FreeCAD дээр 3D хэвлэлийн эд ангийн загвар хийдэг.',
    'p4.title': 'Zurag: арга хэмжээний зургийн платформ', 'p4.role': 'Frontend, backend болон царай таних моделийг хийсэн · Хөгжүүлэлт үргэлжилж байна',
    'p4.b1': 'Хэрэглэгч селфигээ оруулахад сайт тухайн арга хэмжээний зургуудаас түүнийг хайж олно.',
    'p4.b2': 'Олдсон зургаа өндөр нягтралтай эх хувиар нь татаж авна.',
    'p4.b3': 'Гэрэл зурагчид зургаа бөөнөөр оруулж, үнээ тогтоож, борлуулалтаа хянана.',
    'p4.visit': 'Zurag сайт руу орох',
    'p3.title': 'Цэцгийн зураг ангилагч (Python, машин сургалт)', 'p3.role': 'Хэв танилтын үндэс хичээлийн төсөл, МУИС · 2025 оны 12-р сар',
    'p3.b1': 'FLOWER17 датасетийн 1360 зурагт тулгуурлан цэцгийг 17 төрөлд ангилна.',
    'p3.b2': 'OpenCV ашиглан хэлбэр, бүтэц, өнгөний шинжүүдийг (Hu Moments, Haralick texture, HSV өнгөний гистограмм) ялгаж гаргасан.',
    'p3.b3': '7 алгоритмыг (Logistic Regression, LDA, KNN, Decision Tree, Random Forest, Naive Bayes, SVM) 10-fold cross-validation-аар харьцуулж, хамгийн тогтвортой, нарийвчлал өндөр Random Forest-ийг сонгон Weka-д шалгасан.',
    'exp.title': 'Туршлага',
    'e1.when': '2026.06 – 07', 'e1.title': 'Дадлагажигч', 'e1.where': 'MCS Technologies ХХК, Улаанбаатар',
    'e1.desc': 'Мэргэжлийн ажлын орчинд практик туршлага хуримтлуулж, техникийн болон мэргэжлийн ур чадвараа хөгжүүлсэн.',
    'e2.when': '2025.06 – 08', 'e2.title': 'Бета тестер <span class="note">(гэрээт)</span>', 'e2.where': 'Боловсролын мэдээллийн технологийн төв',
    'e2.b1': 'fin.esis.edu.mn болон esis.edu.mn вебсайтуудыг туршсан.', 'e2.b2': 'Хэрэглэгчийн гарын авлага бичсэн.',
    'e2.b3': 'Иргэдийн асуултад утас, чатаар хариулж, хэрэглэгчдийн гомдлыг шийдвэрлэсэн.', 'e2.b4': 'Тайлан бэлтгэсэн.',
    'edu.title': 'Боловсрол',
    'd1.title': 'Монгол Улсын Их Сургууль', 'd1.where': 'Програм хангамжийн инженерчлэлийн бакалавр', 'd1.desc': 'Голч дүн 3.6 / 4.0',
    'd2.when': '2026 оны хавар', 'd2.title': 'Чүнбүк Үндэсний Их Сургууль, Өмнөд Солонгос', 'd2.where': 'Солилцооны оюутан, програм хангамж', 'd2.desc': 'Голч дүн 4.25 / 4.5',
    'skills.title': 'Ур чадвар',
    's1.k': 'Програмчлал ба веб', 's1.v': 'HTML, CSS, JavaScript, TypeScript, Python, C, C++, frontend, backend',
    's2.k': 'Өгөгдөл ба өгөгдлийн сан',
    's3.k': 'Дизайн ба үйлдвэрлэл', 's3.v': 'FreeCAD, CorelDRAW, CapCut, 3D загварчлал, 3D хэвлэл, лазер зүсэлт, лазер сийлбэр',
    's4.k': 'Мэргэжлийн ур чадвар', 's4.v': 'Програм хангамжийн туршилт, тайлан бичих, хэрэглэгчтэй харилцах, асуудал шийдвэрлэх, багаар ажиллах, баг удирдах',
    's5.k': 'Хэл', 's5.v': 'Монгол (төрөлх), англи',
    'cert.title': 'Гэрчилгээ',
    'c1.title': 'UNCCD COP17 талархлын гэрчилгээ', 'c1.where': 'Vertical Harvest, Улаанбаатар',
    'c1.desc': 'UNCCD COP17 олон улсын арга хэмжээний үеэр олон улсын харилцаа, хамтын ажиллагааг зохион байгуулж дэмжихэд англи хэлний мэдлэгээрээ хувь нэмэр оруулсны төлөө.',
    'c2.when': '2025.05.16', 'c2.desc': 'Linux-ийн үндсэн мэдлэг: командын мөр, файл ба зөвшөөрөл, хэрэглэгчид, системийн суурь удирдлага.',
    'c3.when': '2025.03.27', 'c3.desc': 'Linux shell дээрх анхны алхмууд болон өдөр тутмын командуудыг хамарсан анхан шатны сургалт.',
    'c4.when': '2024.05.07', 'c4.title': 'ClimateScience олимпиад 2024', 'c4.where': 'Урьдчилсан шатанд оролцсон гэрчилгээ',
    'c4.desc': 'Уур амьсгалын асуудлыг шийдвэрлэх олон улсын тэмцээний урьдчилсан шатанд оролцсон.',
    'contact.title': 'Холбоо барих',
    'footer.place': 'Улаанбаатар, Монгол'
  };
  var titles = { en: document.title, mn: 'Тэргэл Нямлхагва, програм хангамжийн инженерчлэлийн оюутан' };
  var nodes = document.querySelectorAll('[data-i18n]');
  var alts = document.querySelectorAll('[data-i18n-alt]');
  var en = {};
  nodes.forEach(function (n) { en[n.dataset.i18n] = n.innerHTML; });
  alts.forEach(function (n) { en[n.dataset.i18nAlt] = n.alt; });
  var buttons = document.querySelectorAll('.lang button');

  function setLang(lang, animate) {
    var dict = lang === 'mn' ? mn : en;
    nodes.forEach(function (n) {
      n.innerHTML = dict[n.dataset.i18n] || en[n.dataset.i18n];
      if (animate) { n.classList.remove('swap'); void n.offsetWidth; n.classList.add('swap'); }
    });
    alts.forEach(function (n) { n.alt = dict[n.dataset.i18nAlt] || en[n.dataset.i18nAlt]; });
    document.documentElement.lang = lang;
    document.title = titles[lang];
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang, true); }); });
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved && (navigator.language || '').toLowerCase().indexOf('mn') === 0) saved = 'mn';
  if (saved === 'mn') setLang('mn', false);

  var reveals = document.querySelectorAll('.reveal');
  // items inside each section appear one after another
  reveals.forEach(function (r) {
    r.querySelectorAll('.prose > p, .item, .project, .skills > div, .works figure, .contact .cols > div > *').forEach(function (el, k) {
      el.classList.add('stagger'); el.style.setProperty('--i', Math.min(k, 8));
    });
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video').forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); v.controls = true; });
  }

  var top = document.querySelector('.top');
  var menuBtn = document.querySelector('.menu-btn');
  function setMenu(open) { top.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); }
  menuBtn.addEventListener('click', function () { setMenu(!top.classList.contains('open')); });
  document.querySelectorAll('.top nav a, .brand').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', function (e) { if (!top.contains(e.target)) setMenu(false); });
  var bar = document.querySelector('.progress');
  function onScroll() {
    top.classList.toggle('scrolled', window.scrollY > 8);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--p', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();
  // light / dark theme
  var themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();

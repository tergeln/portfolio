(function () {
  var mn = {
    'nav.about': 'Миний тухай', 'nav.projects': 'Төслүүд', 'nav.making': 'Хажуугийн ажил', 'nav.experience': 'Туршлага', 'nav.education': 'Боловсрол',
    'nav.skills': 'Ур чадвар', 'nav.certificates': 'Гэрчилгээ', 'nav.contact': 'Холбоо барих',
    'hero.lead': 'Монгол Улсын Их Сургуулийн програм хангамжийн инженерчлэлийн оюутан. Би веб хөгжүүлж, програм хангамж туршдаг бөгөөд <a href="https://www.mci.mn/" target="_blank" rel="noopener">mci.mn</a> сайтыг бүтээсэн багийг ахалсан.',
    'hero.status': 'Дадлага, ажлын байр, фрийланс ажилд нээлттэй',
    'hero.contact': 'Холбогдох', 'hero.work': 'Төслүүдийг үзэх',
    'alt.sea': 'Ногоон дөрвөлжин хээтэй алчуураар ороосон Тэргэл шуургатай далайн өмнө зогсож байна',
    'alt.campus': 'Тэргэл их сургуулийн хотхоны цөөрмийн дэргэд цэлмэг тэнгэрийн доор зогсож байна',
    'alt.gate': 'Тэргэл улаан, цэнхэр дугуй дүрстэй улаан модон хаалганы өмнө нэг хөл дээрээ зогсож байна',
    'about.title': 'Миний тухай',
    'about.p1': 'Би Монгол Улсын Их Сургуулийн програм хангамжийн инженерчлэлийн оюутан. Өмнөд Солонгосын Чүнбүк Үндэсний Их Сургуульд солилцооны оюутнаар суралцаж, олон улсын туршлага хуримтлуулсан. 4–5 хөгжүүлэгчтэй багийг ахалж Magic Code AI-ийн вебсайтыг бүтээн ашиглалтад оруулсан бөгөөд MCS Technologies ХХК-д дадлага хийсэн.',
    'about.p2': 'Програм хөгжүүлэлт, фронт-энд хөгжүүлэлт, програм хангамжийн туршилт, хиймэл оюунд суурилсан аппликейшнүүдийг сонирхдог.',
    'projects.title': 'Төслүүд',
    'p1.title': 'Magic Code AI компанийн вебсайт', 'p1.role': 'Багийн ахлагч, full-stack хөгжүүлэгч',
    'p1.b1': '4–5 хөгжүүлэгчтэй багийг ахалж, ажлыг төлөвлөн, даалгавруудыг зохицуулж, нээлт хүртэл явцыг хянасан.',
    'p1.b2': 'Сайтын фронт-энд болон бэк-энд талыг өөрийн гараар хөгжүүлсэн.',
    'p1.b3': 'Багийн мэдээллийн технологийн сургалт, вебсайт хөгжүүлэх үйлчилгээг утас, таблет, компьютер дээр танилцуулдаг респонсив вебсайтыг ашиглалтад оруулсан.',
    'p1.visit': 'mci.mn сайт руу орох',
    'p2.title': 'Recifridge: хиймэл оюунд суурилсан ухаалаг хөргөгчний удирдлагын систем', 'p2.role': 'Нээлттэй эхийн багийн төсөл, Чүнбүк Үндэсний Их Сургууль',
    'p2.b1': 'Солилцооны хөтөлбөрийн үеэр танилцсан оюутнуудтай хамтран хөгжүүлсэн.',
    'p2.b2': 'Хэрэглэгч хүнсээ бүртгэн удирдаж, хиймэл оюуны санал болгосон жор авах боломжтой.',
    'p2.b3': 'Хоол хийх зөвлөгөө өгдөг хиймэл оюун туслах болон шим тэжээлийн мэдээллийг хянах эрүүл мэндийн самбартай.',
    'making.title': 'Хажуугийн ажил',
    'making.p1': 'Сурахын хажуугаар жижиг бүтээгдэхүүний загвар гаргадаг. CorelDRAW дээр арьс, модыг лазер болон CNC машинаар зүсэх, сийлэх вектор зураг зурж, FreeCAD дээр 3D хэвлэлийн эд ангийн загвар хийдэг.',
    'making.legend': 'Зураг дээрх улаан шугам нь зүсэлт, бараан хэсэг нь сийлбэр.',
    'w1': 'Монголын газрын зурагтай модон түлхүүрийн оосор', 'w2': 'Хулганы дэвсгэр: газрын зураг доторх монгол бичиг',
    'w3': 'Арьсан оосрын сийлбэр: соёмбо, монгол бичиг',
    'w7': 'Шагайны 3D загвар',
    'exp.title': 'Туршлага',
    'e1.when': '2026 оны 6–7 сар', 'e1.title': 'Дадлагажигч', 'e1.where': 'MCS Technologies ХХК, Улаанбаатар',
    'e1.desc': 'Мэргэжлийн ажлын орчинд практик туршлага хуримтлуулж, техникийн болон мэргэжлийн ур чадвараа хөгжүүлсэн.',
    'e2.when': '2025 оны 6–8 сар', 'e2.title': 'Бета тестер <span class="note">(гэрээт)</span>', 'e2.where': 'Боловсролын мэдээллийн технологийн төв',
    'e2.b1': 'fin.esis.edu.mn болон esis.edu.mn вебсайтуудыг туршсан.', 'e2.b2': 'Хэрэглэгчийн гарын авлага бичсэн.',
    'e2.b3': 'Иргэдийн асуултад утас, чатаар хариулж, хэрэглэгчдийн гомдлыг шийдвэрлэсэн.', 'e2.b4': 'Тайлан бэлтгэсэн.',
    'edu.title': 'Боловсрол',
    'd1.title': 'Монгол Улсын Их Сургууль', 'd1.where': 'Програм хангамжийн инженерчлэлийн бакалавр', 'd1.desc': 'Голч дүн 4.25 / 4.5',
    'd2.when': '2026 оны хавар', 'd2.title': 'Чүнбүк Үндэсний Их Сургууль, Өмнөд Солонгос', 'd2.where': 'Солилцооны оюутан, програм хангамж', 'd2.desc': 'Голч дүн 3.6 / 4.0',
    'skills.title': 'Ур чадвар',
    's1.k': 'Програмчлал ба веб', 's1.v': 'HTML, CSS, JavaScript, TypeScript, Python, C, C++, фронт-энд хөгжүүлэлт',
    's2.k': 'Өгөгдөл ба өгөгдлийн сан',
    's3.k': 'Дизайн ба үйлдвэрлэл', 's3.v': 'FreeCAD, CorelDRAW, 3D хэвлэл, лазер зүсэлт, лазер сийлбэр',
    's4.k': 'Мэргэжлийн ур чадвар', 's4.v': 'Програм хангамжийн туршилт, тайлан бичих, хэрэглэгчтэй харилцах, асуудал шийдвэрлэх, багаар ажиллах, баг удирдах',
    's5.k': 'Хэл', 's5.v': 'Монгол (төрөлх), англи',
    'cert.title': 'Гэрчилгээ',
    'c1.title': 'UNCCD COP17 талархлын гэрчилгээ', 'c1.where': 'Vertical Harvest, Улаанбаатар',
    'c1.desc': 'UNCCD COP17 олон улсын арга хэмжээний үеэр олон улсын харилцаа, хамтын ажиллагааг зохион байгуулж дэмжихэд англи хэлний мэдлэгээрээ хувь нэмэр оруулсны төлөө.',
    'c2.when': '2025 оны 5-р сарын 16', 'c2.desc': 'Linux-ийн үндсэн мэдлэг: командын мөр, файл ба зөвшөөрөл, хэрэглэгчид, системийн суурь удирдлага.',
    'c3.when': '2025 оны 3-р сарын 27', 'c3.desc': 'Linux shell дээрх анхны алхмууд болон өдөр тутмын командуудыг хамарсан анхан шатны сургалт.',
    'c4.when': '2024 оны 5-р сарын 7', 'c4.title': 'ClimateScience олимпиад 2024', 'c4.where': 'Урьдчилсан шатанд оролцсон гэрчилгээ',
    'c4.desc': 'Уур амьсгалын асуудлыг шийдвэрлэх олон улсын тэмцээний урьдчилсан шатанд оролцсон.',
    'contact.title': 'Холбоо барих', 'contact.text': 'Дадлага, ажлын байр, фрийланс ажилд нээлттэй. Надтай имэйлээр холбогдох нь хамгийн хурдан.',
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
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  document.getElementById('year').textContent = new Date().getFullYear();
})();

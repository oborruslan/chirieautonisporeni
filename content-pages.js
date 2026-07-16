const INFO_LANGUAGE_NAMES = { ro: 'Română', ru: 'Русский', en: 'English' };
const INFO_SITE_CONFIG = window.ELITA_CONFIG || {};
const INFO_PHONE_NUMBER = String(INFO_SITE_CONFIG.phoneNumber || '').replace(/\D/g, '');
const INFO_WHATSAPP_NUMBER = String(INFO_SITE_CONFIG.whatsappNumber || INFO_PHONE_NUMBER).replace(/\D/g, '');

const INFO_COMMON = {
  ro: {
    navRental: 'Închirieri auto', navFleet: 'Flota noastră', navAbout: 'Despre noi', navTerms: 'Termeni și condiții', navContact: 'Contact',
    myBooking: 'Rezervarea mea', home: 'Principală', booking: 'Rezervare', findCar: 'Caută o mașină', information: 'Informații',
    privacy: 'Politica de confidențialitate', faq: 'Întrebări frecvente', location: 'Locație', moldova: 'Republica Moldova', delivery: 'Predarea și ridicarea se confirmă la rezervare.',
    footerTitle: 'Închirieri auto în Nisporeni', footerLead: 'Rezervări flexibile pentru o zi, un weekend, mai multe zile sau perioade lunare, în funcție de disponibilitatea mașinilor.',
    bookingWhatsapp: 'Rezervările sunt pregătite direct în WhatsApp.', sendBooking: 'Trimite o rezervare', copyright: '© 2026 Închirieri auto Nisporeni',
    availability: 'Prețurile și disponibilitatea se confirmă înainte de rezervare.', openMenu: 'Deschide meniul', closeMenu: 'Închide meniul', chooseLanguage: 'Selectează limba',
    openWhatsapp: 'Deschide WhatsApp', backToTop: 'Înapoi la începutul paginii', callNow: 'Sună-ne acum', phoneWhatsapp: 'Telefon și WhatsApp', headerAria: 'Antet principal', homeAria: 'Elita Auto Rent — Acasă'
  },
  ru: {
    navRental: 'Аренда авто', navFleet: 'Наш автопарк', navAbout: 'О нас', navTerms: 'Условия аренды', navContact: 'Контакты',
    myBooking: 'Моя бронь', home: 'Главная', booking: 'Бронирование', findCar: 'Найти автомобиль', information: 'Информация',
    privacy: 'Политика конфиденциальности', faq: 'Частые вопросы', location: 'Местоположение', moldova: 'Республика Молдова', delivery: 'Место выдачи и возврата подтверждается при бронировании.',
    footerTitle: 'Аренда авто в Ниспоренах', footerLead: 'Гибкая аренда на день, выходные, несколько дней или месяц — в зависимости от наличия автомобилей.',
    bookingWhatsapp: 'Заявка на бронирование отправляется через WhatsApp.', sendBooking: 'Отправить заявку', copyright: '© 2026 Аренда авто Ниспорены',
    availability: 'Цена и наличие подтверждаются до бронирования.', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню', chooseLanguage: 'Выбрать язык',
    openWhatsapp: 'Открыть WhatsApp', backToTop: 'Наверх', callNow: 'Позвонить сейчас', phoneWhatsapp: 'Телефон и WhatsApp', headerAria: 'Основной заголовок', homeAria: 'Elita Auto Rent — Главная'
  },
  en: {
    navRental: 'Car rental', navFleet: 'Our fleet', navAbout: 'About us', navTerms: 'Terms and conditions', navContact: 'Contact',
    myBooking: 'My booking', home: 'Home', booking: 'Booking', findCar: 'Find a car', information: 'Information',
    privacy: 'Privacy policy', faq: 'Frequently asked questions', location: 'Location', moldova: 'Republic of Moldova', delivery: 'Pickup and return are confirmed with the booking.',
    footerTitle: 'Car rental in Nisporeni', footerLead: 'Flexible rentals for a day, a weekend, several days or a month, subject to vehicle availability.',
    bookingWhatsapp: 'Booking requests are prepared directly in WhatsApp.', sendBooking: 'Send a booking', copyright: '© 2026 Nisporeni car rental',
    availability: 'Prices and availability are confirmed before booking.', openMenu: 'Open menu', closeMenu: 'Close menu', chooseLanguage: 'Select language',
    openWhatsapp: 'Open WhatsApp', backToTop: 'Back to top', callNow: 'Call us now', phoneWhatsapp: 'Phone and WhatsApp', headerAria: 'Main header', homeAria: 'Elita Auto Rent — Home'
  }
};

const ABOUT_COPY = {
  ro: {
    pageTitle: 'Despre noi | Închirieri auto Nisporeni', eyebrow: 'Despre noi', title: 'Mobilitate simplă, chiar din Nisporeni',
    lead: 'O soluție locală pentru închirierea unei mașini pe o zi, pentru un weekend, mai multe zile sau, la cerere, pentru o perioadă mai lungă.',
    introTitle: 'O flotă restrânsă, aleasă cu grijă',
    introOne: 'Activitatea este orientată spre clienții din Nisporeni și din localitățile apropiate, cu rezervări clare și comunicare directă prin WhatsApp.',
    introTwo: 'Disponibilitatea, prețul final, locul exact de predare și condițiile specifice fiecărei mașini sunt confirmate înainte de închiriere.',
    highlightTitle: 'Ridicare în Nisporeni', highlightText: 'Adresa exactă și ora se stabilesc direct cu clientul după confirmarea rezervării.',
    valuesTitle: 'Ce oferim',
    cardOneTitle: 'Rezervare directă', cardOneText: 'Alegi mașina și perioada, iar cererea este pregătită imediat în WhatsApp.',
    cardTwoTitle: 'Perioade flexibile', cardTwoText: 'Închiriere pentru o zi, mai multe zile sau perioade lunare, în funcție de disponibilitate.',
    cardThreeTitle: 'Comunicare locală', cardThreeText: 'Detaliile despre ridicare, returnare și mașină sunt confirmate înainte de plecare.',
    locationTitle: 'Ne găsești în Nisporeni', locationText: 'Momentan indicăm localitatea Nisporeni. Punctul exact va fi adăugat ulterior și se confirmă la rezervare.', mapButton: 'Vezi Nisporeni pe hartă'
  },
  ru: {
    pageTitle: 'О нас | Аренда авто Ниспорены', eyebrow: 'О нас', title: 'Простая мобильность прямо из Ниспорен',
    lead: 'Местное решение для аренды автомобиля на день, выходные, несколько дней или, по запросу, на более длительный срок.',
    introTitle: 'Небольшой автопарк, подобранный с вниманием',
    introOne: 'Мы работаем для клиентов из Ниспорен и ближайших населённых пунктов, предлагая понятное бронирование и прямую связь через WhatsApp.',
    introTwo: 'Наличие, окончательная цена, точное место передачи и условия для конкретного автомобиля подтверждаются до начала аренды.',
    highlightTitle: 'Получение в Ниспоренах', highlightText: 'Точный адрес и время согласовываются с клиентом после подтверждения бронирования.',
    valuesTitle: 'Что мы предлагаем',
    cardOneTitle: 'Прямое бронирование', cardOneText: 'Выберите автомобиль и период — заявка сразу будет подготовлена в WhatsApp.',
    cardTwoTitle: 'Гибкие сроки', cardTwoText: 'Аренда на день, несколько дней или месяц — в зависимости от наличия автомобилей.',
    cardThreeTitle: 'Местная связь', cardThreeText: 'Условия получения, возврата и сведения об автомобиле подтверждаются до поездки.',
    locationTitle: 'Мы находимся в Ниспоренах', locationText: 'Пока на карте указан город Ниспорены. Точная точка будет добавлена позже и подтверждается при бронировании.', mapButton: 'Открыть Ниспорены на карте'
  },
  en: {
    pageTitle: 'About us | Nisporeni car rental', eyebrow: 'About us', title: 'Simple mobility, right from Nisporeni',
    lead: 'A local car rental option for one day, a weekend, several days or, on request, a longer period.',
    introTitle: 'A small fleet, selected with care',
    introOne: 'The service is designed for customers in Nisporeni and nearby communities, with clear booking steps and direct communication through WhatsApp.',
    introTwo: 'Availability, final price, exact handover point and vehicle-specific conditions are confirmed before the rental starts.',
    highlightTitle: 'Pickup in Nisporeni', highlightText: 'The exact address and time are agreed directly with the customer after the booking is confirmed.',
    valuesTitle: 'What we offer',
    cardOneTitle: 'Direct booking', cardOneText: 'Choose a car and period, and your request is prepared immediately in WhatsApp.',
    cardTwoTitle: 'Flexible periods', cardTwoText: 'Rent for one day, several days or a month, depending on vehicle availability.',
    cardThreeTitle: 'Local communication', cardThreeText: 'Pickup, return and vehicle details are confirmed before departure.',
    locationTitle: 'Find us in Nisporeni', locationText: 'For now, the map points to Nisporeni. The exact handover point will be added later and is confirmed with each booking.', mapButton: 'View Nisporeni on the map'
  }
};

const TERMS_COPY = {
  ro: {
    pageTitle: 'Termeni și condiții | Închirieri auto Nisporeni', eyebrow: 'Informații juridice', title: 'Termeni și condiții',
    lead: 'Condiții generale orientative pentru rezervarea și închirierea autovehiculelor în Nisporeni, Republica Moldova.',
    tocTitle: 'Cuprins', notice: 'Acesta este un model general pentru etapa actuală a site-ului. Înainte de publicare trebuie completat cu denumirea juridică, IDNO, datele de contact, tarifele, garanția, asigurarea și politica de anulare ale firmei.', updated: 'Versiune actualizată: 13 iulie 2026',
    sections: [
      ['scope', '1. Domeniul de aplicare', ['Acești termeni descriu modul general în care se solicită și se confirmă închirierea unui autovehicul. Trimiterea formularului sau a mesajului WhatsApp reprezintă o cerere de rezervare, nu confirmarea automată a unui contract.', 'Închirierea devine fermă după confirmarea disponibilității, a prețului, a perioadei și după acceptarea contractului individual de închiriere.'], []],
      ['eligibility', '2. Condiții pentru conducător', ['Clientul trebuie să prezinte un act de identitate și un permis de conducere valabil pentru categoria vehiculului. Vârsta minimă, vechimea permisului și conducătorii suplimentari se confirmă înainte de rezervare.'], ['Autovehiculul poate fi condus numai de persoanele înscrise în contract.', 'Documentele trebuie să fie valabile pe întreaga perioadă de închiriere.']],
      ['booking', '3. Rezervare și disponibilitate', ['Fotografiile descriu vehiculele disponibile, însă starea de disponibilitate se confirmă individual. Dacă mașina selectată nu este disponibilă, poate fi propusă o alternativă numai cu acordul clientului.'], ['Perioada, tariful și serviciile incluse se confirmă în scris.', 'Orice modificare a rezervării trebuie acceptată de ambele părți.']],
      ['handover', '4. Predare și returnare', ['Predarea și returnarea se efectuează în Nisporeni, la locul și ora convenite. Adresa exactă va fi comunicată după confirmarea rezervării. Clientul trebuie să anunțe din timp orice întârziere.'], ['La predare se poate întocmi un proces-verbal și o evidență foto a stării mașinii.', 'Vehiculul se returnează cu actele, cheile și accesoriile primite.']],
      ['price', '5. Preț, plată și garanție', ['Prețurile afișate sunt orientative până la confirmarea rezervării. Tariful final, moneda de plată, modalitatea de plată și eventuala garanție se indică în contractul individual. Nu se percep sume care nu au fost comunicate și acceptate în prealabil.'], []],
      ['use', '6. Utilizarea autovehiculului', ['Clientul se obligă să utilizeze vehiculul prudent și în conformitate cu legislația rutieră.'], ['Sunt interzise cursele, testele de viteză, tractarea, transportul ilicit și conducerea sub influența alcoolului sau a substanțelor interzise.', 'Ieșirea din Republica Moldova, utilizarea pe drumuri necorespunzătoare sau transmiterea mașinii unei alte persoane necesită acord scris.']],
      ['condition', '7. Combustibil, curățenie și daune', ['Nivelul de combustibil, kilometrajul și starea vehiculului se notează la predare. Mașina se returnează în starea convenită, ținând cont de uzura normală. Costurile pentru lipsuri sau daune trebuie să fie reale, explicate și documentate.'], []],
      ['incident', '8. Accident, defecțiune și asigurare', ['În caz de accident, avarie, furt sau defecțiune, clientul trebuie să oprească în siguranță, să contacteze serviciile competente când este necesar și să informeze imediat locatorul. Condițiile și limitele asigurării se prezintă înainte de semnarea contractului.'], []],
      ['cancellation', '9. Anulare și modificări', ['Cererea de anulare sau modificare se transmite cât mai devreme prin canalul de contact folosit la rezervare. Eventualele taxe și termene de anulare se comunică înainte de confirmare și se includ în contractul individual.'], []],
      ['data', '10. Date personale și comunicări', ['Datele furnizate sunt folosite pentru procesarea solicitării, contactarea clientului, pregătirea contractului și îndeplinirea obligațiilor legale. Comunicarea prin WhatsApp este inițiată de utilizator; politica completă de confidențialitate va fi publicată separat înainte de lansare.'], []],
      ['liability', '11. Răspundere și forță majoră', ['Fiecare parte răspunde pentru obligațiile asumate prin contract și pentru prejudiciile dovedite, în limitele legii. Nicio parte nu răspunde pentru întârzieri cauzate de evenimente externe imprevizibile și inevitabile, cu informarea celeilalte părți cât mai curând posibil.'], []],
      ['law', '12. Legea aplicabilă și soluționarea disputelor', ['Raporturile sunt guvernate de legislația Republicii Moldova. Părțile vor încerca mai întâi soluționarea amiabilă, fără a limita drepturile consumatorului de a se adresa autorităților competente sau instanței prevăzute de lege.'], []]
    ]
  },
  ru: {
    pageTitle: 'Условия аренды | Аренда авто Ниспорены', eyebrow: 'Юридическая информация', title: 'Условия аренды',
    lead: 'Общие ориентировочные условия бронирования и аренды автомобилей в Ниспоренах, Республика Молдова.',
    tocTitle: 'Содержание', notice: 'Это общий шаблон для текущего этапа сайта. До публикации необходимо добавить юридическое наименование, IDNO, контакты, тарифы, залог, страхование и правила отмены конкретной компании.', updated: 'Обновлено: 13 июля 2026 г.',
    sections: [
      ['scope', '1. Область применения', ['Эти условия описывают общий порядок запроса и подтверждения аренды автомобиля. Отправка формы или сообщения WhatsApp является заявкой, а не автоматическим заключением договора.', 'Аренда становится подтверждённой после согласования наличия, цены, периода и принятия индивидуального договора аренды.'], []],
      ['eligibility', '2. Требования к водителю', ['Клиент предъявляет удостоверение личности и действительное водительское удостоверение соответствующей категории. Минимальный возраст, стаж и дополнительные водители согласовываются до бронирования.'], ['Управлять автомобилем могут только лица, указанные в договоре.', 'Документы должны быть действительны в течение всего срока аренды.']],
      ['booking', '3. Бронирование и наличие', ['Фотографии показывают автомобили автопарка, однако наличие подтверждается индивидуально. Если выбранная машина недоступна, альтернатива предлагается только с согласия клиента.'], ['Срок, тариф и включённые услуги подтверждаются письменно.', 'Изменения бронирования принимаются обеими сторонами.']],
      ['handover', '4. Выдача и возврат', ['Выдача и возврат происходят в Ниспоренах в согласованном месте и времени. Точный адрес сообщается после подтверждения. О задержке необходимо предупредить заранее.'], ['При выдаче может оформляться акт и фотофиксация состояния автомобиля.', 'Автомобиль возвращается с полученными документами, ключами и принадлежностями.']],
      ['price', '5. Цена, оплата и залог', ['Цены на сайте ориентировочны до подтверждения. Итоговый тариф, валюта, способ оплаты и возможный залог указываются в индивидуальном договоре. Не взимаются суммы, которые не были заранее сообщены и согласованы.'], []],
      ['use', '6. Использование автомобиля', ['Клиент обязан использовать автомобиль бережно и соблюдать правила дорожного движения.'], ['Запрещены гонки, скоростные испытания, буксировка, незаконные перевозки и вождение в состоянии опьянения.', 'Выезд из Молдовы, использование на неподходящих дорогах или передача машины другому лицу требуют письменного согласия.']],
      ['condition', '7. Топливо, чистота и повреждения', ['Уровень топлива, пробег и состояние фиксируются при выдаче. Машина возвращается в согласованном состоянии с учётом нормального износа. Расходы за недостачу или повреждения должны быть фактическими, объяснёнными и подтверждёнными.'], []],
      ['incident', '8. ДТП, неисправность и страхование', ['При ДТП, повреждении, угоне или неисправности клиент должен безопасно остановиться, при необходимости вызвать компетентные службы и немедленно уведомить арендодателя. Условия и лимиты страхования предоставляются до подписания договора.'], []],
      ['cancellation', '9. Отмена и изменения', ['Запрос на отмену или изменение направляется как можно раньше через канал, использованный при бронировании. Возможные сборы и сроки сообщаются до подтверждения и включаются в индивидуальный договор.'], []],
      ['data', '10. Персональные данные и связь', ['Данные используются для обработки заявки, связи, подготовки договора и выполнения законных обязанностей. Общение через WhatsApp инициирует пользователь; полная политика конфиденциальности будет опубликована до запуска.'], []],
      ['liability', '11. Ответственность и форс-мажор', ['Каждая сторона отвечает за договорные обязательства и доказанный ущерб в пределах закона. Стороны не отвечают за задержки из-за непредвиденных и неизбежных внешних событий при своевременном уведомлении.'], []],
      ['law', '12. Применимое право и споры', ['Отношения регулируются законодательством Республики Молдова. Сначала стороны стремятся решить спор мирно, не ограничивая право потребителя обратиться в компетентный орган или суд.'], []]
    ]
  },
  en: {
    pageTitle: 'Terms and conditions | Nisporeni car rental', eyebrow: 'Legal information', title: 'Terms and conditions',
    lead: 'General indicative terms for booking and renting vehicles in Nisporeni, Republic of Moldova.',
    tocTitle: 'Contents', notice: 'This is a general template for the current stage of the website. Before publication, add the company’s legal name, IDNO, contact details, rates, deposit, insurance and cancellation policy.', updated: 'Last updated: 13 July 2026',
    sections: [
      ['scope', '1. Scope and acceptance', ['These terms describe the general process for requesting and confirming a vehicle rental. Submitting the form or a WhatsApp message is a booking request, not automatic acceptance of a contract.', 'A rental becomes binding after availability, price and period are confirmed and the individual rental agreement is accepted.'], []],
      ['eligibility', '2. Driver requirements', ['The customer must provide valid identification and a driving licence for the relevant vehicle category. Minimum age, required driving experience and additional drivers are confirmed before booking.'], ['Only drivers listed in the agreement may drive the vehicle.', 'Documents must remain valid for the entire rental period.']],
      ['booking', '3. Booking and availability', ['Photos show vehicles in the fleet, but availability is confirmed individually. If the selected car is unavailable, an alternative may be offered only with the customer’s consent.'], ['The period, rate and included services are confirmed in writing.', 'Booking changes must be accepted by both parties.']],
      ['handover', '4. Pickup and return', ['Pickup and return take place in Nisporeni at the agreed location and time. The exact address is provided after confirmation. The customer must give early notice of any delay.'], ['A handover report and photographs of the vehicle condition may be prepared.', 'The vehicle must be returned with all documents, keys and accessories supplied.']],
      ['price', '5. Price, payment and deposit', ['Website prices remain indicative until confirmation. The final rate, payment currency, payment method and any deposit are stated in the individual agreement. No amount is charged unless it was communicated and accepted in advance.'], []],
      ['use', '6. Vehicle use', ['The customer must use the vehicle carefully and comply with road traffic law.'], ['Racing, speed testing, towing, unlawful transport and driving under the influence are prohibited.', 'Travel outside Moldova, unsuitable-road use or allowing another person to drive requires written consent.']],
      ['condition', '7. Fuel, cleanliness and damage', ['Fuel level, mileage and condition are recorded at pickup. The vehicle is returned in the agreed condition, allowing for normal wear. Any costs for shortages or damage must be genuine, explained and documented.'], []],
      ['incident', '8. Accident, breakdown and insurance', ['In an accident, damage, theft or breakdown, the customer must stop safely, contact the competent services when required and notify the rental provider immediately. Insurance terms and limits are provided before the agreement is signed.'], []],
      ['cancellation', '9. Cancellation and changes', ['Cancellation or change requests should be sent as early as possible through the channel used for booking. Any applicable fees and deadlines are disclosed before confirmation and included in the individual agreement.'], []],
      ['data', '10. Personal data and communications', ['Information supplied is used to process the request, contact the customer, prepare the agreement and meet legal obligations. WhatsApp communication is initiated by the user; the full privacy policy will be published separately before launch.'], []],
      ['liability', '11. Liability and force majeure', ['Each party is responsible for its contractual obligations and proven loss within the limits of law. Neither party is liable for delays caused by unforeseeable and unavoidable external events, provided the other party is informed as soon as possible.'], []],
      ['law', '12. Applicable law and disputes', ['The relationship is governed by the law of the Republic of Moldova. The parties will first seek an amicable solution, without limiting the consumer’s right to contact a competent authority or court.'], []]
    ]
  }
};

const infoPage = document.body.dataset.page;
let infoLanguage = ['ro', 'ru', 'en'].includes(localStorage.getItem('site-language')) ? localStorage.getItem('site-language') : 'ro';
const infoLanguageButton = document.querySelector('#language-button');
const infoLanguageMenu = document.querySelector('#language-menu');
const infoLanguageLabel = document.querySelector('#current-language-label');
const infoMobileToggle = document.querySelector('#mobile-nav-toggle');
const infoMobilePanel = document.querySelector('#mobile-nav-panel');

function pageCopy() {
  return infoPage === 'terms' ? TERMS_COPY[infoLanguage] : ABOUT_COPY[infoLanguage];
}

function renderTerms() {
  if (infoPage !== 'terms') return;
  const copy = TERMS_COPY[infoLanguage];
  document.querySelector('#terms-toc-links').innerHTML = copy.sections.map(([id, title]) => `<a href="#${id}">${title}</a>`).join('');
  document.querySelector('#terms-sections').innerHTML = copy.sections.map(([id, title, paragraphs, bullets]) => `
    <section id="${id}" class="legal-section">
      <h2>${title}</h2>
      ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      ${bullets.length ? `<ul>${bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>` : ''}
    </section>
  `).join('');
}

function applyInfoLanguage(language) {
  infoLanguage = ['ro', 'ru', 'en'].includes(language) ? language : 'ro';
  localStorage.setItem('site-language', infoLanguage);
  document.documentElement.lang = infoLanguage;
  const merged = { ...INFO_COMMON[infoLanguage], ...pageCopy() };
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = merged[node.dataset.i18n];
    if (value !== undefined) node.textContent = value;
  });
  document.title = pageCopy().pageTitle;
  infoLanguageLabel.textContent = INFO_LANGUAGE_NAMES[infoLanguage];
  document.querySelector('.site-header').setAttribute('aria-label', INFO_COMMON[infoLanguage].headerAria);
  document.querySelector('.brand-placeholder').setAttribute('aria-label', INFO_COMMON[infoLanguage].homeAria);
  infoLanguageButton.setAttribute('aria-label', INFO_COMMON[infoLanguage].chooseLanguage);
  infoMobileToggle.setAttribute('aria-label', infoMobilePanel.hidden ? INFO_COMMON[infoLanguage].openMenu : INFO_COMMON[infoLanguage].closeMenu);
  document.querySelector('#floating-whatsapp').setAttribute('aria-label', INFO_COMMON[infoLanguage].openWhatsapp);
  document.querySelector('#floating-phone').setAttribute('aria-label', INFO_COMMON[infoLanguage].callNow);
  const phoneDisplay = INFO_SITE_CONFIG.phoneDisplay || INFO_COMMON[infoLanguage].callNow;
  document.querySelectorAll('[data-phone-display]').forEach((element) => { element.textContent = phoneDisplay; });
  document.querySelectorAll('[data-call-link]').forEach((element) => {
    element.href = INFO_PHONE_NUMBER ? `tel:+${INFO_PHONE_NUMBER}` : 'index.html#contact';
    element.setAttribute('aria-label', INFO_PHONE_NUMBER ? `${INFO_COMMON[infoLanguage].callNow}: ${phoneDisplay}` : INFO_COMMON[infoLanguage].callNow);
    element.classList.toggle('is-phone-pending', !INFO_PHONE_NUMBER);
  });
  document.querySelector('#scroll-to-top').setAttribute('aria-label', INFO_COMMON[infoLanguage].backToTop);
  for (const option of infoLanguageMenu.querySelectorAll('[data-language]')) {
    option.setAttribute('aria-current', String(option.dataset.language === infoLanguage));
  }
  renderTerms();
}

infoLanguageButton.addEventListener('click', () => {
  const shouldOpen = infoLanguageMenu.hidden;
  infoLanguageMenu.hidden = !shouldOpen;
  infoLanguageButton.setAttribute('aria-expanded', String(shouldOpen));
});

infoLanguageMenu.addEventListener('click', (event) => {
  const option = event.target.closest('[data-language]');
  if (!option) return;
  applyInfoLanguage(option.dataset.language);
  infoLanguageMenu.hidden = true;
  infoLanguageButton.setAttribute('aria-expanded', 'false');
});

infoMobileToggle.addEventListener('click', () => {
  const shouldOpen = infoMobilePanel.hidden;
  infoMobilePanel.hidden = !shouldOpen;
  infoMobileToggle.setAttribute('aria-expanded', String(shouldOpen));
  infoMobileToggle.setAttribute('aria-label', shouldOpen ? INFO_COMMON[infoLanguage].closeMenu : INFO_COMMON[infoLanguage].openMenu);
});

infoMobilePanel.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  infoMobilePanel.hidden = true;
  infoMobileToggle.setAttribute('aria-expanded', 'false');
});

document.addEventListener('click', (event) => {
  if (!infoLanguageMenu.hidden && !event.target.closest('.language-switcher')) {
    infoLanguageMenu.hidden = true;
    infoLanguageButton.setAttribute('aria-expanded', 'false');
  }
  if (!infoMobilePanel.hidden && !event.target.closest('#mobile-nav-panel') && !event.target.closest('#mobile-nav-toggle')) {
    infoMobilePanel.hidden = true;
    infoMobileToggle.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!infoLanguageMenu.hidden) {
    infoLanguageMenu.hidden = true;
    infoLanguageButton.setAttribute('aria-expanded', 'false');
    infoLanguageButton.focus();
  } else if (!infoMobilePanel.hidden) {
    infoMobilePanel.hidden = true;
    infoMobileToggle.setAttribute('aria-expanded', 'false');
    infoMobileToggle.focus();
  }
});

document.querySelector('#floating-whatsapp').addEventListener('click', () => {
  const messages = {
    ro: 'Bună ziua! Doresc informații despre închirierea unei mașini în Nisporeni.',
    ru: 'Здравствуйте! Хочу узнать об аренде автомобиля в Ниспоренах.',
    en: 'Hello! I would like information about renting a car in Nisporeni.'
  };
  const base = INFO_WHATSAPP_NUMBER ? `https://wa.me/${INFO_WHATSAPP_NUMBER}` : 'https://wa.me/';
  window.open(`${base}?text=${encodeURIComponent(messages[infoLanguage])}`, '_blank', 'noopener,noreferrer');
});

const infoScrollButton = document.querySelector('#scroll-to-top');
const infoScrollProgress = infoScrollButton.querySelector('.scroll-progress');
const infoCircumference = 2 * Math.PI * 26;
function updateInfoScroll() {
  const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const ratio = Math.min(1, Math.max(0, window.scrollY / scrollable));
  infoScrollProgress.style.strokeDashoffset = String(infoCircumference * (1 - ratio));
  infoScrollButton.classList.toggle('is-visible', window.scrollY > 320);
}
window.addEventListener('scroll', updateInfoScroll, { passive: true });
infoScrollButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

applyInfoLanguage(infoLanguage);
updateInfoScroll();

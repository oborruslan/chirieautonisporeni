const LOCALES = { ro: 'ro-MD', ru: 'ru-MD', en: 'en-GB' };
const LANGUAGE_NAMES = { ro: 'Română', ru: 'Русский', en: 'English' };
let currentLanguage = ['ro', 'ru', 'en'].includes(localStorage.getItem('site-language'))
  ? localStorage.getItem('site-language')
  : 'ro';

const COPY = {
  ro: {
    pageTitle: 'Elita Auto Rent | Închirieri auto Nisporeni', navRental: 'Închirieri auto', fleet: 'Flota noastră', rates: 'Tarife', contact: 'Contact', myBooking: 'Rezervarea mea',
    booking: 'Rezervare', dailyRates: 'Tarife pe zi', information: 'Informații', rentalTerms: 'Condiții de închiriere', aboutUs: 'Despre noi', termsConditions: 'Termeni și condiții', help: 'Ajutor', moldova: 'Republica Moldova',
    small: 'Mic', medium: 'Mediu', large: 'Mare', passengerTransport: 'Transport persoane', utility: 'Utilitare',
    differentLocation: 'Voi livra în altă locație', pickupWhere: 'De unde vei ridica?', dropoffWhere: 'Unde vei livra?', dropoffPlaceholder: 'Introdu locația de predare ...', pickupWhen: 'Când vei primi?', dropoffWhen: 'Când vei livra?', searchCar: 'Găsesc o mașină', findCarLink: 'Caută o mașină',
    fleetEyebrow: 'Închirieri auto în Nisporeni', ourCars: 'Mașinile noastre', fleetDescription: 'O flotă restrânsă și atent întreținută, disponibilă pentru o zi, mai multe zile sau, la cerere, pentru o lună.',
    filterCars: 'Filtrează mașinile', filters: 'Filtre', reset: 'Resetează', pricePerDay: 'Preț pe zi', carBrand: 'Marcă de mașină', transmission: 'Cutie de viteze', manual: 'Manuală', automatic: 'Automată', fuelType: 'Tip carburant', diesel: 'Diesel', petrol: 'Benzină', hybrid: 'Hibrid', category: 'Categorie', economic: 'Economic', estate: 'Break', sedan: 'Sedan', suv: 'SUV', sort: 'Sortare', recommended: 'Recomandate', priceAscending: 'Preț crescător', priceDescending: 'Preț descrescător', noCars: 'Nu există mașini pentru filtrele selectate.',
    similar: 'sau similar', passengers: '{count} pasageri', bags: '{count} bagaje', airConditioned: 'Aer condiționat', from: 'de la', perDay: '/zi', monthlyRequest: 'Tarif lunar la cerere', reserveNow: 'Rezervă acum', cars: '{count} mașini', oneCar: '1 mașină',
    descEconomic: 'Economic · potrivit pentru oraș și drumuri regionale', descEstate: 'Break · spațiu generos pentru pasageri și bagaje', descCitySuv: 'SUV compact · confortabil în oraș și la drum lung', descHybridEstate: 'Hibrid · consum redus și spațiu pentru călătorii', descSedan: 'Sedan · confort bun pentru trasee zilnice și deplasări', descFamilySuv: 'SUV · spațiu suplimentar pentru familie și bagaje',
    previousPhoto: 'Fotografia anterioară', nextPhoto: 'Fotografia următoare', photo: 'fotografia', photoCount: '{current} din {total}', openPhoto: 'Deschide fotografia la dimensiune mare', zoomOut: 'Micșorează fotografia', zoomIn: 'Mărește fotografia', actualSize: 'Dimensiune originală 1:1', fitScreen: 'Încadrează pe ecran', closeViewer: 'Închide vizualizatorul', carPhotos: 'Fotografiile mașinii',
    contacts: 'Contacte', home: 'Principală', phoneWhatsapp: 'Telefon și WhatsApp', phonePending: 'Numărul de contact va fi configurat înainte de publicare.', writeWhatsapp: 'Scrie pe WhatsApp', emailPending: 'Adresa de e-mail va fi adăugată înainte de publicare.', ourAddress: 'Adresa noastră', workHours: 'Program de lucru', workHoursText: 'Rezervări online 24/7', pickupByAgreement: 'Ridicarea se stabilește în prealabil.', contactUs: 'Contactează-ne', questions: 'Ai întrebări? Scrie-ne acum.', contactIntro: 'Mesajul este pregătit și deschis direct în WhatsApp.', fullName: 'Nume și prenume', phoneEmail: 'Telefon sau e-mail', message: 'Mesaj', sendWhatsapp: 'Trimite prin WhatsApp',
    footerIntro: 'Rezervări flexibile pentru o zi, un weekend, mai multe zile sau perioade lunare, în funcție de disponibilitatea mașinilor.', privacy: 'Politica de confidențialitate', faq: 'Întrebări frecvente', location: 'Locație', deliveryConfirm: 'Predarea și ridicarea se confirmă la rezervare.', bookingWhatsapp: 'Rezervările sunt pregătite direct în WhatsApp.', sendBooking: 'Trimite o rezervare', copyright: '© 2026 Închirieri auto Nisporeni', availabilityConfirm: 'Prețurile și disponibilitatea se confirmă înainte de rezervare.',
    pickupTimeQuestion: 'La ce oră vei ridica?', dropoffTimeQuestion: 'La ce oră vei livra?', cancel: 'Anulare', noteTitle: 'Vă rugăm să rețineți',
    authentication: 'Autentificare', password: 'Parola', forgotPassword: 'Ați uitat parola?', login: 'LOGARE', registerHere: 'Înscrieți-vă aici', firstName: 'Nume', lastName: 'Nume de familie', agreePrivacy: 'Sunt de acord cu', becomeMember: 'DEVENIȚI MEMBRU', alreadyMember: 'Sunteți deja un membru?',
    searchReady: 'Căutarea este pregătită', selectedCar: 'Mașină selectată', completeBooking: '{car}. Completează datele și trimite rezervarea prin WhatsApp.', bookingReady: 'Rezervare pregătită în WhatsApp', formReady: 'Formular pregătit',
    pickupRequired: 'Este necesară locația preluării autovehiculului', pickupDateRequired: 'Data preluării autovehiculului este necesară', returnDateRequired: 'Data de retur este obligatorie', dropoffRequired: 'Este necesară locația de predare a autovehiculului',
    whatsappTitle: 'Rezervare auto nouă', anyCar: 'Orice mașină disponibilă', carLabel: 'Mașină', pickupLabel: 'Ridicare', dropoffLabel: 'Predare', pickupDateLabel: 'Data ridicării', returnDateLabel: 'Data returului', at: 'la',
    helloInfo: 'Bună ziua! Doresc informații despre închirierea unei mașini în Nisporeni.', helloDiscuss: 'Bună ziua! Doresc să discut cu dvs. despre o închiriere auto în Nisporeni.', helloQuestion: 'Bună ziua! Am o întrebare despre închirierea auto în Nisporeni.', nameLabel: 'Nume', contactLabel: 'Contact', messageLabel: 'Mesaj',
    resultsLocal: 'Datele au fost validate local. Conectarea la serviciu va fi adăugată ulterior.', requiredField: 'Completați câmpul {field}.', emailRequired: 'Introduceți adresa de e-mail.', emailInvalid: 'Introduceți o adresă de e-mail validă.', passwordShort: 'Parola trebuie să conțină minimum 8 caractere.', resetLater: 'Fluxul de resetare a parolei va fi conectat ulterior.',
    navCars: 'Mașini', navSteps: 'Cum funcționează', heroPrefix: 'Închiriază o mașină în', heroCity: 'Nisporeni', callNow: 'Sună-ne acum', viewFleet: 'Vezi flota', chooseCar: 'Alege o mașină', contactDirect: 'Contact direct', emailTitle: 'E-mail',
    stepsEyebrow: 'Simplu și rapid', stepsTitle: 'Cum închiriezi o mașină?', stepOneTitle: 'Alege mașina', stepOneText: 'Vezi fotografiile și găsește modelul potrivit pentru drumul tău.', stepTwoTitle: 'Selectează perioada', stepTwoText: 'Spune-ne perioada dorită atunci când trimiți solicitarea.', stepThreeTitle: 'Confirmă pe WhatsApp', stepThreeText: 'Trimite cererea, iar noi confirmăm rapid disponibilitatea și prețul.', viewCarDetails: 'Vezi detaliile mașinii',
    headerAria: 'Antet principal', homeAria: 'Elita Auto Rent — Acasă', openMenu: 'Deschide meniul', closeMenu: 'Închide meniul', chooseLanguage: 'Selectează limba', openWhatsapp: 'Deschide WhatsApp', backToTop: 'Înapoi la începutul paginii'
  },
  ru: {
    pageTitle: 'Elita Auto Rent | Аренда авто в Ниспоренах', navRental: 'Аренда авто', fleet: 'Наш автопарк', rates: 'Тарифы', contact: 'Контакты', myBooking: 'Моя бронь',
    booking: 'Бронирование', dailyRates: 'Цены за день', information: 'Информация', rentalTerms: 'Условия аренды', aboutUs: 'О нас', termsConditions: 'Условия аренды', help: 'Помощь', moldova: 'Республика Молдова',
    small: 'Малый', medium: 'Средний', large: 'Большой', passengerTransport: 'Пассажирский транспорт', utility: 'Коммерческие',
    differentLocation: 'Вернуть в другом месте', pickupWhere: 'Где вы заберёте?', dropoffWhere: 'Где вы вернёте?', dropoffPlaceholder: 'Укажите место возврата ...', pickupWhen: 'Когда заберёте?', dropoffWhen: 'Когда вернёте?', searchCar: 'Найти автомобиль', findCarLink: 'Найти автомобиль',
    fleetEyebrow: 'Аренда авто в Ниспоренах', ourCars: 'Наши автомобили', fleetDescription: 'Небольшой и ухоженный автопарк для аренды на день, несколько дней или, по запросу, на месяц.',
    filterCars: 'Фильтровать автомобили', filters: 'Фильтры', reset: 'Сбросить', pricePerDay: 'Цена за день', carBrand: 'Марка автомобиля', transmission: 'Коробка передач', manual: 'Механика', automatic: 'Автомат', fuelType: 'Тип топлива', diesel: 'Дизель', petrol: 'Бензин', hybrid: 'Гибрид', category: 'Категория', economic: 'Эконом', estate: 'Универсал', sedan: 'Седан', suv: 'Внедорожник', sort: 'Сортировка', recommended: 'Рекомендуемые', priceAscending: 'Цена по возрастанию', priceDescending: 'Цена по убыванию', noCars: 'Нет автомобилей по выбранным фильтрам.',
    similar: 'или аналогичный', passengers: '{count} пассажиров', bags: '{count} места багажа', airConditioned: 'Кондиционер', from: 'от', perDay: '/день', monthlyRequest: 'Месячный тариф по запросу', reserveNow: 'Забронировать', cars: '{count} автомобилей', oneCar: '1 автомобиль',
    descEconomic: 'Эконом · удобен для города и региональных дорог', descEstate: 'Универсал · много места для пассажиров и багажа', descCitySuv: 'Компактный SUV · комфортен в городе и в поездках', descHybridEstate: 'Гибрид · экономичный и просторный для путешествий', descSedan: 'Седан · комфорт для ежедневных и дальних поездок', descFamilySuv: 'SUV · дополнительное место для семьи и багажа',
    previousPhoto: 'Предыдущее фото', nextPhoto: 'Следующее фото', photo: 'фото', photoCount: '{current} из {total}', openPhoto: 'Открыть фотографию в большом размере', zoomOut: 'Уменьшить фотографию', zoomIn: 'Увеличить фотографию', actualSize: 'Оригинальный размер 1:1', fitScreen: 'Вписать в экран', closeViewer: 'Закрыть просмотр', carPhotos: 'Фотографии автомобиля',
    contacts: 'Контакты', home: 'Главная', phoneWhatsapp: 'Телефон и WhatsApp', phonePending: 'Контактный номер будет добавлен перед публикацией.', writeWhatsapp: 'Написать в WhatsApp', emailPending: 'Адрес электронной почты будет добавлен перед публикацией.', ourAddress: 'Наш адрес', workHours: 'График работы', workHoursText: 'Онлайн-бронирование 24/7', pickupByAgreement: 'Выдача автомобиля — по предварительной договорённости.', contactUs: 'Свяжитесь с нами', questions: 'Есть вопросы? Напишите нам.', contactIntro: 'Сообщение будет подготовлено и открыто в WhatsApp.', fullName: 'Имя и фамилия', phoneEmail: 'Телефон или e-mail', message: 'Сообщение', sendWhatsapp: 'Отправить через WhatsApp',
    footerIntro: 'Гибкая аренда на день, выходные, несколько дней или месяц — в зависимости от наличия автомобилей.', privacy: 'Политика конфиденциальности', faq: 'Частые вопросы', location: 'Местоположение', deliveryConfirm: 'Место выдачи и возврата подтверждается при бронировании.', bookingWhatsapp: 'Заявка на бронирование отправляется через WhatsApp.', sendBooking: 'Отправить заявку', copyright: '© 2026 Аренда авто Ниспорены', availabilityConfirm: 'Цена и наличие подтверждаются до бронирования.',
    pickupTimeQuestion: 'Во сколько вы заберёте?', dropoffTimeQuestion: 'Во сколько вы вернёте?', cancel: 'Отмена', noteTitle: 'Обратите внимание',
    authentication: 'Вход', password: 'Пароль', forgotPassword: 'Забыли пароль?', login: 'ВОЙТИ', registerHere: 'Зарегистрироваться', firstName: 'Имя', lastName: 'Фамилия', agreePrivacy: 'Я согласен с', becomeMember: 'ЗАРЕГИСТРИРОВАТЬСЯ', alreadyMember: 'Уже зарегистрированы?',
    searchReady: 'Поиск подготовлен', selectedCar: 'Автомобиль выбран', completeBooking: '{car}. Укажите даты и отправьте заявку через WhatsApp.', bookingReady: 'Заявка подготовлена в WhatsApp', formReady: 'Форма подготовлена',
    pickupRequired: 'Укажите место получения автомобиля', pickupDateRequired: 'Укажите дату получения автомобиля', returnDateRequired: 'Укажите дату возврата', dropoffRequired: 'Укажите место возврата автомобиля',
    whatsappTitle: 'Новая заявка на аренду авто', anyCar: 'Любой доступный автомобиль', carLabel: 'Автомобиль', pickupLabel: 'Получение', dropoffLabel: 'Возврат', pickupDateLabel: 'Дата получения', returnDateLabel: 'Дата возврата', at: 'в',
    helloInfo: 'Здравствуйте! Хочу узнать об аренде автомобиля в Ниспоренах.', helloDiscuss: 'Здравствуйте! Хочу обсудить аренду автомобиля в Ниспоренах.', helloQuestion: 'Здравствуйте! У меня есть вопрос об аренде автомобиля в Ниспоренах.', nameLabel: 'Имя', contactLabel: 'Контакт', messageLabel: 'Сообщение',
    resultsLocal: 'Данные проверены локально. Подключение к сервису будет добавлено позже.', requiredField: 'Заполните поле «{field}».', emailRequired: 'Введите адрес электронной почты.', emailInvalid: 'Введите корректный адрес электронной почты.', passwordShort: 'Пароль должен содержать не менее 8 символов.', resetLater: 'Восстановление пароля будет подключено позже.',
    navCars: 'Автомобили', navSteps: 'Как это работает', heroPrefix: 'Арендуйте автомобиль в', heroCity: 'Ниспоренах', callNow: 'Позвонить сейчас', viewFleet: 'Посмотреть автопарк', chooseCar: 'Выбрать автомобиль', contactDirect: 'Прямая связь', emailTitle: 'Электронная почта',
    stepsEyebrow: 'Просто и быстро', stepsTitle: 'Как арендовать автомобиль?', stepOneTitle: 'Выберите автомобиль', stepOneText: 'Посмотрите фотографии и выберите подходящую модель для своей поездки.', stepTwoTitle: 'Укажите период', stepTwoText: 'Сообщите желаемый период при отправке заявки.', stepThreeTitle: 'Подтвердите в WhatsApp', stepThreeText: 'Отправьте заявку, и мы быстро подтвердим наличие и цену.', viewCarDetails: 'Открыть страницу автомобиля',
    headerAria: 'Основной заголовок', homeAria: 'Elita Auto Rent — Главная', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню', chooseLanguage: 'Выбрать язык', openWhatsapp: 'Открыть WhatsApp', backToTop: 'Наверх'
  },
  en: {
    pageTitle: 'Elita Auto Rent | Car rental in Nisporeni', navRental: 'Car rental', fleet: 'Our fleet', rates: 'Rates', contact: 'Contact', myBooking: 'My booking',
    booking: 'Booking', dailyRates: 'Daily rates', information: 'Information', rentalTerms: 'Rental terms', aboutUs: 'About us', termsConditions: 'Terms and conditions', help: 'Help', moldova: 'Republic of Moldova',
    small: 'Small', medium: 'Medium', large: 'Large', passengerTransport: 'Passenger vehicles', utility: 'Commercial vehicles',
    differentLocation: 'Return to another location', pickupWhere: 'Where will you pick up?', dropoffWhere: 'Where will you return?', dropoffPlaceholder: 'Enter the return location ...', pickupWhen: 'When will you pick up?', dropoffWhen: 'When will you return?', searchCar: 'Find a car', findCarLink: 'Find a car',
    fleetEyebrow: 'Car rental in Nisporeni', ourCars: 'Our cars', fleetDescription: 'A small, carefully maintained fleet available for one day, several days or, on request, one month.',
    filterCars: 'Filter cars', filters: 'Filters', reset: 'Reset', pricePerDay: 'Price per day', carBrand: 'Car brand', transmission: 'Transmission', manual: 'Manual', automatic: 'Automatic', fuelType: 'Fuel type', diesel: 'Diesel', petrol: 'Petrol', hybrid: 'Hybrid', category: 'Category', economic: 'Economy', estate: 'Estate', sedan: 'Sedan', suv: 'SUV', sort: 'Sort', recommended: 'Recommended', priceAscending: 'Price: low to high', priceDescending: 'Price: high to low', noCars: 'No cars match the selected filters.',
    similar: 'or similar', passengers: '{count} passengers', bags: '{count} bags', airConditioned: 'Air conditioning', from: 'from', perDay: '/day', monthlyRequest: 'Monthly rate on request', reserveNow: 'Book now', cars: '{count} cars', oneCar: '1 car',
    descEconomic: 'Economy · ideal for town and regional roads', descEstate: 'Estate · generous room for passengers and luggage', descCitySuv: 'Compact SUV · comfortable in town and on longer trips', descHybridEstate: 'Hybrid · efficient and spacious for travel', descSedan: 'Sedan · comfortable for daily and longer journeys', descFamilySuv: 'SUV · extra space for family and luggage',
    previousPhoto: 'Previous photo', nextPhoto: 'Next photo', photo: 'photo', photoCount: '{current} of {total}', openPhoto: 'Open the photo at a large size', zoomOut: 'Zoom out', zoomIn: 'Zoom in', actualSize: 'Original size 1:1', fitScreen: 'Fit to screen', closeViewer: 'Close viewer', carPhotos: 'Car photos',
    contacts: 'Contacts', home: 'Home', phoneWhatsapp: 'Phone and WhatsApp', phonePending: 'The contact number will be added before publication.', writeWhatsapp: 'Message on WhatsApp', emailPending: 'The e-mail address will be added before publication.', ourAddress: 'Our address', workHours: 'Opening hours', workHoursText: 'Online booking 24/7', pickupByAgreement: 'Vehicle pickup is arranged in advance.', contactUs: 'Contact us', questions: 'Questions? Message us now.', contactIntro: 'Your message is prepared and opened directly in WhatsApp.', fullName: 'Full name', phoneEmail: 'Phone or e-mail', message: 'Message', sendWhatsapp: 'Send via WhatsApp',
    footerIntro: 'Flexible rentals for a day, a weekend, several days or a month, subject to vehicle availability.', privacy: 'Privacy policy', faq: 'Frequently asked questions', location: 'Location', deliveryConfirm: 'Pickup and return are confirmed with the booking.', bookingWhatsapp: 'Booking requests are prepared directly in WhatsApp.', sendBooking: 'Send a booking', copyright: '© 2026 Nisporeni car rental', availabilityConfirm: 'Prices and availability are confirmed before booking.',
    pickupTimeQuestion: 'What time will you pick up?', dropoffTimeQuestion: 'What time will you return?', cancel: 'Cancel', noteTitle: 'Please note',
    authentication: 'Sign in', password: 'Password', forgotPassword: 'Forgot your password?', login: 'SIGN IN', registerHere: 'Register here', firstName: 'First name', lastName: 'Last name', agreePrivacy: 'I agree to the', becomeMember: 'CREATE ACCOUNT', alreadyMember: 'Already a member?',
    searchReady: 'Search ready', selectedCar: 'Car selected', completeBooking: '{car}. Select the dates and send the booking through WhatsApp.', bookingReady: 'Booking prepared in WhatsApp', formReady: 'Form ready',
    pickupRequired: 'The vehicle pickup location is required', pickupDateRequired: 'The vehicle pickup date is required', returnDateRequired: 'The return date is required', dropoffRequired: 'The vehicle return location is required',
    whatsappTitle: 'New car rental booking', anyCar: 'Any available car', carLabel: 'Car', pickupLabel: 'Pickup', dropoffLabel: 'Return', pickupDateLabel: 'Pickup date', returnDateLabel: 'Return date', at: 'at',
    helloInfo: 'Hello! I would like information about renting a car in Nisporeni.', helloDiscuss: 'Hello! I would like to discuss a car rental in Nisporeni.', helloQuestion: 'Hello! I have a question about car rental in Nisporeni.', nameLabel: 'Name', contactLabel: 'Contact', messageLabel: 'Message',
    resultsLocal: 'The details were validated locally. The service connection will be added later.', requiredField: 'Complete the {field} field.', emailRequired: 'Enter your e-mail address.', emailInvalid: 'Enter a valid e-mail address.', passwordShort: 'The password must contain at least 8 characters.', resetLater: 'The password reset flow will be connected later.',
    navCars: 'Cars', navSteps: 'How it works', heroPrefix: 'Rent a car in', heroCity: 'Nisporeni', callNow: 'Call us now', viewFleet: 'View the fleet', chooseCar: 'Choose a car', contactDirect: 'Direct contact', emailTitle: 'E-mail',
    stepsEyebrow: 'Simple and quick', stepsTitle: 'How do you rent a car?', stepOneTitle: 'Choose a car', stepOneText: 'Browse the photos and choose the right model for your trip.', stepTwoTitle: 'Choose the period', stepTwoText: 'Tell us your preferred rental period when you send the request.', stepThreeTitle: 'Confirm on WhatsApp', stepThreeText: 'Send your request and we will quickly confirm availability and price.', viewCarDetails: 'View car details',
    headerAria: 'Main header', homeAria: 'Elita Auto Rent — Home', openMenu: 'Open menu', closeMenu: 'Close menu', chooseLanguage: 'Select language', openWhatsapp: 'Open WhatsApp', backToTop: 'Back to top'
  }
};

const FAQ_CONTENT = {
  ro: {
    nav: 'Întrebări',
    title: 'Întrebări frecvente',
    intro: 'Răspunsuri simple la cele mai importante întrebări despre închirierea unei mașini.',
    items: [
      ['Ce documente sunt necesare pentru a închiria un autoturism?', 'Ai nevoie de un permis de conducere valabil și de un act de identitate. Vârsta minimă, experiența necesară și șoferii suplimentari se confirmă înainte de rezervare.'],
      ['Cu cât timp în avans trebuie să rezerv un autoturism?', 'Recomandăm rezervarea cu cel puțin 24 de ore înainte. Cererile pentru aceeași zi sunt posibile în funcție de disponibilitatea mașinii.'],
      ['Ce este inclus în prețul de închiriere?', 'Tariful final și serviciile incluse sunt confirmate înainte de rezervare și apar în contract. Garanția, kilometrajul, combustibilul și opțiunile suplimentare sunt comunicate clar în avans.'],
      ['Pot extinde perioada de închiriere?', 'Da, dacă mașina rămâne disponibilă. Contactează-ne cât mai devreme, preferabil cu minimum 24 de ore înainte de data returnării.'],
      ['Este disponibil serviciul de livrare la adresă?', 'Predarea și ridicarea în Nisporeni se stabilesc la confirmarea rezervării. Pentru alte localități, disponibilitatea și eventualul cost se confirmă separat.']
    ]
  },
  ru: {
    nav: 'Вопросы',
    title: 'Частые вопросы',
    intro: 'Простые ответы на основные вопросы об аренде автомобиля.',
    items: [
      ['Какие документы нужны для аренды автомобиля?', 'Нужны действующее водительское удостоверение и документ, удостоверяющий личность. Минимальный возраст, необходимый стаж и дополнительные водители подтверждаются до бронирования.'],
      ['Насколько заранее нужно бронировать автомобиль?', 'Рекомендуем бронировать минимум за 24 часа. Запросы на тот же день возможны при наличии свободного автомобиля.'],
      ['Что входит в стоимость аренды?', 'Итоговый тариф и включённые услуги подтверждаются до бронирования и указываются в договоре. Депозит, пробег, топливо и дополнительные опции сообщаются заранее.'],
      ['Можно ли продлить срок аренды?', 'Да, если автомобиль остаётся доступным. Свяжитесь с нами как можно раньше, желательно минимум за 24 часа до возврата.'],
      ['Доступна ли доставка автомобиля по адресу?', 'Выдача и возврат в Ниспоренах согласовываются при подтверждении бронирования. Для других населённых пунктов условия и возможная стоимость уточняются отдельно.']
    ]
  },
  en: {
    nav: 'Questions',
    title: 'Frequently asked questions',
    intro: 'Straightforward answers to the main questions about renting a car.',
    items: [
      ['What documents are required to rent a car?', 'You need a valid driving licence and an identity document. Minimum age, required driving experience and additional drivers are confirmed before booking.'],
      ['How far in advance should I book a car?', 'We recommend booking at least 24 hours in advance. Same-day requests are possible depending on vehicle availability.'],
      ['What is included in the rental price?', 'The final rate and included services are confirmed before booking and listed in the agreement. Deposit, mileage, fuel and optional extras are communicated clearly in advance.'],
      ['Can I extend the rental period?', 'Yes, if the car remains available. Contact us as early as possible, preferably at least 24 hours before the return date.'],
      ['Is delivery to an address available?', 'Pickup and return in Nisporeni are agreed when the booking is confirmed. Availability and any cost for other locations are confirmed separately.']
    ]
  }
};

function t(key, replacements = {}) {
  let value = COPY[currentLanguage]?.[key] ?? COPY.ro[key] ?? key;
  for (const [name, replacement] of Object.entries(replacements)) {
    value = value.replaceAll(`{${name}}`, String(replacement));
  }
  return value;
}

const CAR_FLEET = window.ELITA_FLEET;

const locations = [
  'Nisporeni, Republica Moldova'
];

const SITE_CONFIG = window.ELITA_CONFIG || {};
const PHONE_NUMBER = String(SITE_CONFIG.phoneNumber || '').replace(/\D/g, '');
const WHATSAPP_NUMBER = String(SITE_CONFIG.whatsappNumber || PHONE_NUMBER).replace(/\D/g, '');

const form = document.querySelector('#booking-form');
const pickupInput = document.querySelector('#pickup-location');
const suggestions = document.querySelector('#location-suggestions');
const differentLocation = document.querySelector('#different-location');
const dropoffWrap = document.querySelector('#dropoff-wrap');
const dropoffInput = document.querySelector('#dropoff-location');
const promoEnabled = document.querySelector('#promo-enabled');
const promoField = document.querySelector('#promo-field');
const pickupDateInput = document.querySelector('#pickup-date');
const dropoffDateInput = document.querySelector('#dropoff-date');
const pickupTime = document.querySelector('#pickup-time');
const dropoffTime = document.querySelector('#dropoff-time');
const toast = document.querySelector('#result-toast');

const megaMenuButton = document.querySelector('#rental-menu-button');
const megaMenu = document.querySelector('#rental-mega-menu');
const mobileNavToggle = document.querySelector('#mobile-nav-toggle');
const mobileNavPanel = document.querySelector('#mobile-nav-panel');

const calendar = document.querySelector('#calendar-popover');
const calendarFirst = document.querySelector('#calendar-first');
const calendarSecond = document.querySelector('#calendar-second');
const calendarConfirm = document.querySelector('#calendar-confirm');
const calendarHour = document.querySelector('#calendar-hour');
const calendarMinute = document.querySelector('#calendar-minute');
const calendarTimeLabel = document.querySelector('#calendar-time-label');

const validationLayer = document.querySelector('#validation-dialog');
const validationErrors = document.querySelector('#validation-errors');
const validationClose = document.querySelector('#validation-close');

const authLayer = document.querySelector('#auth-layer');
const loginDialog = document.querySelector('#login-dialog');
const registerDialog = document.querySelector('#register-dialog');
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const registerPassword = document.querySelector('#register-password');
const passwordToggle = document.querySelector('#toggle-register-password');
const imageLightbox = document.querySelector('#image-lightbox');
const lightboxTitle = document.querySelector('#lightbox-title');
const lightboxCounter = document.querySelector('#lightbox-counter');
const lightboxScroll = document.querySelector('#lightbox-scroll');
const lightboxFrame = document.querySelector('#lightbox-image-frame');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxThumbnails = document.querySelector('#lightbox-thumbnails');
const lightboxZoomLabel = document.querySelector('#lightbox-zoom-label');
const lightboxZoomOut = document.querySelector('#lightbox-zoom-out');
const lightboxZoomIn = document.querySelector('#lightbox-zoom-in');
const lightboxActual = document.querySelector('#lightbox-actual');
const lightboxFit = document.querySelector('#lightbox-fit');
const lightboxClose = document.querySelector('#lightbox-close');
const lightboxPrev = document.querySelector('#lightbox-prev');
const lightboxNext = document.querySelector('#lightbox-next');
const languageButton = document.querySelector('#language-button');
const languageMenu = document.querySelector('#language-menu');
const languageLabel = document.querySelector('#current-language-label');
const staticTextOrigins = new WeakMap();
const roTextKeys = new Map();
for (const [key, value] of Object.entries(COPY.ro)) {
  if (typeof value === 'string' && !value.includes('{') && !roTextKeys.has(value)) roTextKeys.set(value, key);
}

function applyStaticTranslations() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (!staticTextOrigins.has(node)) staticTextOrigins.set(node, node.nodeValue);
    const original = staticTextOrigins.get(node);
    const normalized = original.trim();
    const key = roTextKeys.get(normalized);
    if (key) node.nodeValue = original.replace(normalized, t(key));
    node = walker.nextNode();
  }
}

function applyContactConfiguration() {
  const phoneDisplay = SITE_CONFIG.phoneDisplay || t('callNow');
  const callHref = PHONE_NUMBER ? `tel:+${PHONE_NUMBER}` : '#contact';
  document.querySelectorAll('[data-phone-display]').forEach((element) => { element.textContent = phoneDisplay; });
  document.querySelectorAll('[data-call-label]').forEach((element) => { element.textContent = t('callNow'); });
  document.querySelectorAll('[data-fleet-label]').forEach((element) => { element.textContent = t('viewFleet'); });
  document.querySelectorAll('[data-hero-prefix]').forEach((element) => { element.textContent = t('heroPrefix'); });
  document.querySelectorAll('[data-hero-city]').forEach((element) => { element.textContent = t('heroCity'); });
  document.querySelectorAll('[data-call-link]').forEach((element) => {
    element.href = callHref;
    element.setAttribute('aria-label', PHONE_NUMBER ? `${t('callNow')}: ${phoneDisplay}` : t('callNow'));
    element.classList.toggle('is-phone-pending', !PHONE_NUMBER);
  });
}

function applyLanguage(language) {
  currentLanguage = ['ro', 'ru', 'en'].includes(language) ? language : 'ro';
  localStorage.setItem('site-language', currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = t('pageTitle');
  locations[0] = `Nisporeni, ${t('moldova')}`;
  pickupInput.value = locations[0];
  pickupInput.placeholder = locations[0];
  dropoffInput.placeholder = t('dropoffPlaceholder');
  languageLabel.textContent = LANGUAGE_NAMES[currentLanguage];
  languageButton.setAttribute('aria-label', t('chooseLanguage'));
  document.querySelector('.site-header').setAttribute('aria-label', t('headerAria'));
  document.querySelector('.brand-placeholder').setAttribute('aria-label', t('homeAria'));
  mobileNavToggle.setAttribute('aria-label', mobileNavPanel.hidden ? t('openMenu') : t('closeMenu'));
  document.querySelector('#floating-whatsapp').setAttribute('aria-label', t('openWhatsapp'));
  document.querySelector('#scroll-to-top').setAttribute('aria-label', t('backToTop'));
  for (const option of languageMenu.querySelectorAll('[data-language]')) {
    option.setAttribute('aria-current', String(option.dataset.language === currentLanguage));
  }
  applyStaticTranslations();
  applyContactConfiguration();
  renderFaq();
  localizeFleetCards();
  if (typeof applyFleetFilters === 'function') applyFleetFilters();
  if (!imageLightbox.hidden) localizeLightbox();
  if (!calendar.hidden) {
    calendarTimeLabel.textContent = activeDateType === 'dropoff' ? t('dropoffTimeQuestion') : t('pickupTimeQuestion');
    renderCalendars();
  }
}

function renderFaq() {
  const content = FAQ_CONTENT[currentLanguage];
  document.querySelector('#faq-title').textContent = content.title;
  document.querySelector('.faq-heading > p').textContent = content.intro;
  document.querySelectorAll('.site-header a[href$="#faq"]').forEach((link) => { link.textContent = content.nav; });
  document.querySelector('#faq-list').innerHTML = content.items.map(([question, answer], index) => `
    <article class="faq-item">
      <h3>
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}">
          <span>${question}</span><span class="faq-chevron" aria-hidden="true"></span>
        </button>
      </h3>
      <div id="faq-answer-${index}" class="faq-answer" role="region" aria-hidden="true">
        <div><p>${answer}</p></div>
      </div>
    </article>
  `).join('');
}

languageButton.addEventListener('click', () => {
  const shouldOpen = languageMenu.hidden;
  languageMenu.hidden = !shouldOpen;
  languageButton.setAttribute('aria-expanded', String(shouldOpen));
});

languageMenu.addEventListener('click', (event) => {
  const option = event.target.closest('[data-language]');
  if (!option) return;
  applyLanguage(option.dataset.language);
  languageMenu.hidden = true;
  languageButton.setAttribute('aria-expanded', 'false');
  languageButton.focus();
});

const today = startOfDay(new Date());
const dateValues = { pickup: null, dropoff: null };
let activeDateType = null;
let pendingDate = null;
let viewMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let dialogReturnFocus = null;
let calendarOriginal = null;
let selectedVehicle = '';
let lightboxCar = null;
let lightboxSourceVisual = null;
let lightboxIndex = 0;
let lightboxFitScale = 1;
let lightboxScale = 1;
let lightboxMode = 'fit';
let lightboxReturnFocus = null;

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function sameDate(a, b) {
  return Boolean(a && b && isoDate(a) === isoDate(b));
}

function formatInputDate(date) {
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
}

function formatSummaryDate(date) {
  return new Intl.DateTimeFormat(LOCALES[currentLanguage], {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
}

function parseTypedDate(value, type) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  const parts = [];
  if (digits.length) parts.push(digits.slice(0, 2));
  if (digits.length > 2) parts.push(digits.slice(2, 4));
  if (digits.length > 4) parts.push(digits.slice(4, 8));
  const formatted = parts.join('/');
  if (digits.length !== 8) return { formatted, date: null, complete: false, valid: true };

  const day = Number(digits.slice(0, 2));
  const month = Number(digits.slice(2, 4));
  const year = Number(digits.slice(4, 8));
  const date = new Date(year, month - 1, day);
  const exists =
    year >= 1000 &&
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;
  const allowed = exists && date >= today && !(type === 'dropoff' && dateValues.pickup && date < dateValues.pickup);
  return { formatted, date: allowed ? date : null, complete: true, valid: allowed };
}

function handleTypedDate(input) {
  const type = input.dataset.dateInput;
  const result = parseTypedDate(input.value, type);
  input.value = result.formatted;
  dateValues[type] = result.date;
  delete input.dataset.iso;

  if (result.date) {
    input.dataset.iso = isoDate(result.date);
    clearError(input);
    if (type === 'pickup' && dateValues.dropoff && dateValues.dropoff < result.date) {
      dateValues.dropoff = null;
      dropoffDateInput.value = '';
      delete dropoffDateInput.dataset.iso;
    }
    if (!calendar.hidden && activeDateType === type) {
      pendingDate = new Date(result.date);
      viewMonth = new Date(result.date.getFullYear(), result.date.getMonth(), 1);
      calendarConfirm.disabled = false;
      renderCalendars();
    }
  } else if (result.complete && !result.valid) {
    setError(input, 'invalid');
    calendarConfirm.disabled = true;
  } else {
    clearError(input);
    calendarConfirm.disabled = true;
  }
}

function whatsappReservationUrl() {
  const dropoffLocation = dropoffInput.required && dropoffInput.value.trim()
    ? dropoffInput.value.trim()
    : pickupInput.value.trim();
  const promoCode = document.querySelector('#promo-code').value.trim();
  const lines = [
    `🚗 ${t('whatsappTitle')}`,
    `🇲🇩 Nisporeni, ${t('moldova')}`,
    '',
    `🚘 ${t('carLabel')}: ${selectedVehicle || t('anyCar')}`,
    `📍 ${t('pickupLabel')}: ${pickupInput.value.trim()}`,
    `📍 ${t('dropoffLabel')}: ${dropoffLocation}`,
    `📅 ${t('pickupDateLabel')}: ${formatInputDate(dateValues.pickup)} ${t('at')} ${pickupTime.value}`,
    `📅 ${t('returnDateLabel')}: ${formatInputDate(dateValues.dropoff)} ${t('at')} ${dropoffTime.value}`
  ];
  if (promoCode) lines.push(`🎟️ Cod promoțional: ${promoCode}`);
  const recipient = WHATSAPP_NUMBER.replace(/\D/g, '');
  const base = recipient ? `https://wa.me/${recipient}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function fillTimeOptions(select, selected = '10:00') {
  for (let hour = 0; hour < 24; hour += 1) {
    for (const minute of ['00', '30']) {
      const value = `${String(hour).padStart(2, '0')}:${minute}`;
      select.add(new Option(value, value, false, value === selected));
    }
  }
}

function fillCalendarTimeOptions() {
  for (let hour = 0; hour < 24; hour += 1) {
    const value = String(hour).padStart(2, '0');
    calendarHour.add(new Option(value, value, false, value === '10'));
  }
  for (const minute of ['00', '30']) {
    calendarMinute.add(new Option(minute, minute, false, minute === '00'));
  }
}

function showSuggestions(query = '') {
  const normalized = query.trim().toLocaleLowerCase('ro');
  const matches = locations.filter((location) => location.toLocaleLowerCase('ro').includes(normalized));
  suggestions.replaceChildren();

  for (const location of matches.slice(0, 5)) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.role = 'option';
    button.textContent = location;
    button.addEventListener('click', () => {
      pickupInput.value = location;
      suggestions.hidden = true;
      clearError(pickupInput);
    });
    item.append(button);
    suggestions.append(item);
  }

  suggestions.hidden = matches.length === 0;
}

function setError(input, message) {
  const card = input.closest('.field-card');
  card?.classList.toggle('has-error', Boolean(message));
  input.setAttribute('aria-invalid', String(Boolean(message)));
  const error = card?.querySelector('.field-error');
  if (error) error.textContent = '';
}

function clearError(input) {
  setError(input, '');
}

function toggleMegaMenu(force) {
  if (!megaMenu || !megaMenuButton) return;
  const shouldOpen = typeof force === 'boolean' ? force : megaMenu.hidden;
  megaMenu.hidden = !shouldOpen;
  megaMenuButton.setAttribute('aria-expanded', String(shouldOpen));
  if (shouldOpen) closeCalendar();
}

function monthAfter(date, offset) {
  return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}

function buildMonth(container, monthDate) {
  const title = document.createElement('h3');
  title.textContent = new Intl.DateTimeFormat(LOCALES[currentLanguage], { month: 'long', year: 'numeric' }).format(monthDate);

  const weekdays = document.createElement('div');
  weekdays.className = 'calendar-weekdays';
  const weekdayLabels = {
    ro: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    en: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  };
  for (const day of weekdayLabels[currentLanguage]) {
    const label = document.createElement('span');
    label.textContent = day;
    weekdays.append(label);
  }

  const grid = document.createElement('div');
  grid.className = 'calendar-days';
  const firstWeekday = (monthDate.getDay() + 6) % 7;
  const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();

  for (let blank = 0; blank < firstWeekday; blank += 1) {
    const spacer = document.createElement('span');
    spacer.className = 'calendar-empty';
    grid.append(spacer);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const value = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'calendar-day';
    button.textContent = String(day);
    button.setAttribute('aria-label', formatInputDate(value));

    const beforeToday = value < today;
    const beforePickup = activeDateType === 'dropoff' && dateValues.pickup && value < dateValues.pickup;
    button.disabled = beforeToday || beforePickup;

    if (sameDate(value, pendingDate)) button.classList.add('is-selected');
    if (
      activeDateType === 'dropoff' &&
      dateValues.pickup &&
      pendingDate &&
      value > dateValues.pickup &&
      value < pendingDate
    ) button.classList.add('is-in-range');

    button.addEventListener('click', () => {
      pendingDate = value;
      const input = activeDateType === 'pickup' ? pickupDateInput : dropoffDateInput;
      dateValues[activeDateType] = new Date(value);
      input.value = formatInputDate(value);
      input.dataset.iso = isoDate(value);
      clearError(input);
      calendarConfirm.disabled = false;
      renderCalendars();
    });
    grid.append(button);
  }

  container.replaceChildren(title, weekdays, grid);
}

function renderCalendars() {
  buildMonth(calendarFirst, viewMonth);
  buildMonth(calendarSecond, monthAfter(viewMonth, 1));
  const earliestMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  document.querySelector('#calendar-prev').disabled = viewMonth <= earliestMonth;
}

function positionCalendar(input) {
  if (window.innerWidth <= 650) return;
  const card = input.closest('.field-card');
  const rect = card.getBoundingClientRect();
  const width = Math.min(740, window.innerWidth - 32);
  const left = Math.max(16, Math.min(rect.left, window.innerWidth - width - 16));
  const calendarHeight = calendar.offsetHeight;
  const desiredTop = rect.bottom + 3;
  const top = Math.max(16, Math.min(desiredTop, window.innerHeight - calendarHeight - 16));
  calendar.style.left = `${left}px`;
  calendar.style.top = `${top}px`;
}

function openCalendar(type) {
  activeDateType = type;
  pendingDate = dateValues[type] ? new Date(dateValues[type]) : null;
  const input = type === 'pickup' ? pickupDateInput : dropoffDateInput;
  const time = type === 'pickup' ? pickupTime.value : dropoffTime.value;
  calendarOriginal = {
    type,
    date: dateValues[type] ? new Date(dateValues[type]) : null,
    value: input.value,
    time
  };
  const [hour, minute] = time.split(':');
  calendarHour.value = hour;
  calendarMinute.value = ['00', '30'].includes(minute) ? minute : '00';
  calendarTimeLabel.textContent = type === 'pickup' ? t('pickupTimeQuestion') : t('dropoffTimeQuestion');
  viewMonth = new Date(
    (pendingDate || (type === 'dropoff' && dateValues.pickup) || today).getFullYear(),
    (pendingDate || (type === 'dropoff' && dateValues.pickup) || today).getMonth(),
    1
  );
  calendarConfirm.disabled = !pendingDate;
  if (megaMenu) megaMenu.hidden = true;
  if (megaMenuButton) megaMenuButton.setAttribute('aria-expanded', 'false');
  renderCalendars();
  calendar.hidden = false;
  positionCalendar(input);
}

function closeCalendar() {
  calendar.hidden = true;
  activeDateType = null;
  pendingDate = null;
  calendarOriginal = null;
}

function cancelCalendar() {
  if (calendarOriginal) {
    const { type, date, value, time } = calendarOriginal;
    const input = type === 'pickup' ? pickupDateInput : dropoffDateInput;
    const timeSelect = type === 'pickup' ? pickupTime : dropoffTime;
    dateValues[type] = date ? new Date(date) : null;
    input.value = value;
    timeSelect.value = time;
    if (date) input.dataset.iso = isoDate(date);
    else delete input.dataset.iso;
    clearError(input);
  }
  closeCalendar();
}

function commitCalendarSelection() {
  if (!activeDateType || !pendingDate) return;
  const input = activeDateType === 'pickup' ? pickupDateInput : dropoffDateInput;
  const timeSelect = activeDateType === 'pickup' ? pickupTime : dropoffTime;
  dateValues[activeDateType] = new Date(pendingDate);
  input.value = formatInputDate(pendingDate);
  input.dataset.iso = isoDate(pendingDate);
  timeSelect.value = `${calendarHour.value}:${calendarMinute.value}`;
  clearError(input);

  if (activeDateType === 'pickup' && dateValues.dropoff && dateValues.dropoff < dateValues.pickup) {
    dateValues.dropoff = null;
    dropoffDateInput.value = '';
    delete dropoffDateInput.dataset.iso;
  }
  closeCalendar();
}

function showValidationDialog(errors) {
  closeCalendar();
  validationErrors.replaceChildren();
  for (const error of errors) {
    const item = document.createElement('li');
    item.textContent = error;
    validationErrors.append(item);
  }
  dialogReturnFocus = document.activeElement;
  validationLayer.hidden = false;
  document.body.style.overflow = 'hidden';
  validationClose.focus();
}

function closeValidationDialog() {
  validationLayer.hidden = true;
  document.body.style.overflow = '';
  dialogReturnFocus?.focus();
}

function openAuthDialog(type = 'login') {
  closeCalendar();
  toggleMegaMenu(false);
  loginDialog.hidden = type !== 'login';
  registerDialog.hidden = type !== 'register';
  authLayer.hidden = false;
  dialogReturnFocus = document.activeElement;
  document.body.style.overflow = 'hidden';
  const firstInput = type === 'login'
    ? document.querySelector('#login-email')
    : document.querySelector('#register-first-name');
  firstInput.focus();
}

function closeAuthDialog() {
  authLayer.hidden = true;
  document.body.style.overflow = '';
  dialogReturnFocus?.focus();
}

function setAuthFieldError(input, message) {
  const field = input.closest('.auth-field');
  field.classList.toggle('has-error', Boolean(message));
  input.setAttribute('aria-invalid', String(Boolean(message)));
  field.querySelector('.auth-error').textContent = message;
}

function validateEmail(input) {
  if (!input.value.trim()) return t('emailRequired');
  if (!input.validity.valid) return t('emailInvalid');
  return '';
}

function validateRequired(input, label) {
  if (!input.value.trim()) return t('requiredField', { field: label });
  return '';
}

function showAuthSuccess(message) {
  closeAuthDialog();
  document.querySelector('#result-toast strong').textContent = t('formReady');
  document.querySelector('#result-summary').textContent = message;
  toast.hidden = false;
}

if (megaMenuButton) megaMenuButton.addEventListener('click', () => toggleMegaMenu());
if (mobileNavToggle && mobileNavPanel) {
  mobileNavToggle.addEventListener('click', () => {
    const shouldOpen = mobileNavPanel.hidden;
    mobileNavPanel.hidden = !shouldOpen;
    mobileNavToggle.setAttribute('aria-expanded', String(shouldOpen));
    mobileNavToggle.setAttribute('aria-label', shouldOpen ? t('closeMenu') : t('openMenu'));
  });
  mobileNavPanel.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    mobileNavPanel.hidden = true;
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileNavToggle.setAttribute('aria-label', t('openMenu'));
  });
}
document.querySelector('#open-login').addEventListener('click', () => openAuthDialog('login'));
document.querySelector('#show-register').addEventListener('click', () => openAuthDialog('register'));
document.querySelector('#show-login').addEventListener('click', () => openAuthDialog('login'));
for (const closeButton of document.querySelectorAll('.auth-close')) {
  closeButton.addEventListener('click', closeAuthDialog);
}
authLayer.addEventListener('click', (event) => {
  if (event.target === authLayer) closeAuthDialog();
});

passwordToggle.addEventListener('click', () => {
  const shouldShow = registerPassword.type === 'password';
  registerPassword.type = shouldShow ? 'text' : 'password';
  passwordToggle.setAttribute('aria-pressed', String(shouldShow));
  const labels = {
    ro: shouldShow ? 'Ascunde parola' : 'Arată parola',
    ru: shouldShow ? 'Скрыть пароль' : 'Показать пароль',
    en: shouldShow ? 'Hide password' : 'Show password'
  };
  passwordToggle.setAttribute('aria-label', labels[currentLanguage]);
});

document.querySelector('.forgot-link').addEventListener('click', (event) => {
  event.preventDefault();
  showAuthSuccess(t('resetLater'));
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#login-email');
  const password = document.querySelector('#login-password');
  const emailError = validateEmail(email);
  const passwordError = password.value.length < 8 ? t('passwordShort') : '';
  setAuthFieldError(email, emailError);
  setAuthFieldError(password, passwordError);
  if (emailError || passwordError) {
    loginForm.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  showAuthSuccess(t('resultsLocal'));
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = document.querySelector('#register-first-name');
  const lastName = document.querySelector('#register-last-name');
  const email = document.querySelector('#register-email');
  const consent = document.querySelector('#privacy-consent');
  const errors = [
    [firstName, validateRequired(firstName, t('firstName'))],
    [lastName, validateRequired(lastName, t('lastName'))],
    [email, validateEmail(email)],
    [registerPassword, registerPassword.value.length < 8 ? t('passwordShort') : '']
  ];
  for (const [input, message] of errors) setAuthFieldError(input, message);
  consent.closest('.privacy-consent').classList.toggle('has-error', !consent.checked);
  consent.setAttribute('aria-invalid', String(!consent.checked));
  const invalidInput = registerForm.querySelector('[aria-invalid="true"]');
  if (invalidInput) {
    invalidInput.focus();
    return;
  }
  showAuthSuccess(t('resultsLocal'));
});

differentLocation.addEventListener('click', () => {
  const enabled = differentLocation.getAttribute('aria-checked') !== 'true';
  differentLocation.setAttribute('aria-checked', String(enabled));
  dropoffWrap.hidden = !enabled;
  dropoffInput.required = enabled;
  if (enabled) dropoffInput.focus();
});

promoEnabled.addEventListener('change', () => {
  promoField.hidden = !promoEnabled.checked;
  if (promoEnabled.checked) document.querySelector('#promo-code').focus();
});

pickupInput.addEventListener('focus', () => showSuggestions(pickupInput.value));
pickupInput.addEventListener('input', () => {
  showSuggestions(pickupInput.value);
  clearError(pickupInput);
});
document.querySelector('[data-open-locations]').addEventListener('click', () => {
  showSuggestions(pickupInput.value);
  pickupInput.focus();
});

for (const input of [pickupDateInput, dropoffDateInput]) {
  input.addEventListener('click', () => openCalendar(input.dataset.dateInput));
  input.addEventListener('input', () => handleTypedDate(input));
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCalendar(input.dataset.dateInput);
    }
  });
}

document.querySelector('#calendar-prev').addEventListener('click', () => {
  viewMonth = monthAfter(viewMonth, -1);
  renderCalendars();
});
document.querySelector('#calendar-next').addEventListener('click', () => {
  viewMonth = monthAfter(viewMonth, 1);
  renderCalendars();
});
document.querySelector('#calendar-cancel').addEventListener('click', cancelCalendar);
calendarConfirm.addEventListener('click', commitCalendarSelection);

validationClose.addEventListener('click', closeValidationDialog);
validationLayer.addEventListener('click', (event) => {
  if (event.target === validationLayer) closeValidationDialog();
});

document.addEventListener('click', (event) => {
  const eventPath = event.composedPath();
  if (!event.target.closest('.language-switcher')) {
    languageMenu.hidden = true;
    languageButton.setAttribute('aria-expanded', 'false');
  }
  if (!event.target.closest('.location-card')) suggestions.hidden = true;
  if (megaMenu && !megaMenu.hidden && !event.target.closest('#rental-mega-menu') && !event.target.closest('#rental-menu-button')) {
    toggleMegaMenu(false);
  }
  if (mobileNavPanel && mobileNavToggle && !mobileNavPanel.hidden && !event.target.closest('#mobile-nav-panel') && !event.target.closest('#mobile-nav-toggle')) {
    mobileNavPanel.hidden = true;
    mobileNavToggle.setAttribute('aria-expanded', 'false');
  }
  if (!calendar.hidden && !eventPath.includes(calendar) && !event.target.closest('[data-date-input]')) {
    closeCalendar();
  }
});

document.addEventListener('keydown', (event) => {
  if (!imageLightbox.hidden) {
    if (event.key === 'Escape') closeImageLightbox();
    else if (event.key === 'ArrowLeft') showLightboxImage(lightboxIndex - 1);
    else if (event.key === 'ArrowRight') showLightboxImage(lightboxIndex + 1);
    else if (event.key === '+' || event.key === '=') applyLightboxScale(lightboxScale * 1.25);
    else if (event.key === '-') applyLightboxScale(lightboxScale / 1.25);
    else if (event.key === '0') fitLightboxImage();
    else return;
    event.preventDefault();
    return;
  }
  if (event.key !== 'Escape') return;
  if (!languageMenu.hidden) {
    languageMenu.hidden = true;
    languageButton.setAttribute('aria-expanded', 'false');
    languageButton.focus();
    return;
  }
  if (!authLayer.hidden) closeAuthDialog();
  else if (!validationLayer.hidden) closeValidationDialog();
  else if (!calendar.hidden) cancelCalendar();
  else if (mobileNavPanel && !mobileNavPanel.hidden) {
    mobileNavPanel.hidden = true;
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileNavToggle.focus();
  }
  else if (megaMenu && !megaMenu.hidden) toggleMegaMenu(false);
});

window.addEventListener('resize', () => {
  if (!imageLightbox.hidden && lightboxMode === 'fit') fitLightboxImage();
  if (!calendar.hidden && activeDateType) {
    const input = activeDateType === 'pickup' ? pickupDateInput : dropoffDateInput;
    positionCalendar(input);
  }
});
window.addEventListener('scroll', () => {
  if (!calendar.hidden) closeCalendar();
}, { passive: true });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const errors = [];

  if (!pickupInput.value.trim()) {
    errors.push(t('pickupRequired'));
    setError(pickupInput, 'required');
  }
  if (!dateValues.pickup) {
    errors.push(t('pickupDateRequired'));
    setError(pickupDateInput, 'required');
  }
  if (!dateValues.dropoff) {
    errors.push(t('returnDateRequired'));
    setError(dropoffDateInput, 'required');
  }
  if (dropoffInput.required && !dropoffInput.value.trim()) {
    errors.push(t('dropoffRequired'));
    setError(dropoffInput, 'required');
  }

  if (errors.length) {
    showValidationDialog(errors);
    return;
  }

  const destination = dropoffInput.required ? ` → ${dropoffInput.value.trim()}` : '';
  const vehicleSummary = selectedVehicle ? `${selectedVehicle} · ` : '';
  document.querySelector('#result-summary').textContent =
    `${vehicleSummary}${pickupInput.value.trim()}${destination} · ${formatSummaryDate(dateValues.pickup)}, ${pickupTime.value} — ${formatSummaryDate(dateValues.dropoff)}, ${dropoffTime.value}`;
  document.querySelector('#result-toast strong').textContent = t('bookingReady');
  toast.hidden = false;
  window.open(whatsappReservationUrl(), '_blank', 'noopener,noreferrer');
});

document.querySelector('#close-toast').addEventListener('click', () => {
  toast.hidden = true;
});

function openWhatsAppMessage(message) {
  const recipient = WHATSAPP_NUMBER.replace(/\D/g, '');
  const base = recipient ? `https://wa.me/${recipient}` : 'https://wa.me/';
  window.open(`${base}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

document.querySelector('#floating-whatsapp').addEventListener('click', () => {
  openWhatsAppMessage(t('helloInfo'));
});

document.querySelector('.contact-whatsapp-button').addEventListener('click', () => {
  openWhatsAppMessage(t('helloDiscuss'));
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#contact-name');
  const reply = document.querySelector('#contact-reply');
  const message = document.querySelector('#contact-message');
  const fields = [name, reply, message];
  for (const field of fields) {
    field.setAttribute('aria-invalid', String(!field.value.trim()));
  }
  const invalid = fields.find((field) => !field.value.trim());
  if (invalid) {
    invalid.focus();
    return;
  }
  openWhatsAppMessage([
    t('helloQuestion'),
    '',
    `${t('nameLabel')}: ${name.value.trim()}`,
    `${t('contactLabel')}: ${reply.value.trim()}`,
    `${t('messageLabel')}: ${message.value.trim()}`
  ].join('\n'));
});

const scrollTopButton = document.querySelector('#scroll-to-top');
const scrollProgress = scrollTopButton.querySelector('.scroll-progress');
const scrollCircumference = 2 * Math.PI * 26;
let scrollUpdateQueued = false;

function updateScrollTopButton() {
  const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const ratio = Math.min(1, Math.max(0, window.scrollY / scrollable));
  scrollProgress.style.strokeDashoffset = String(scrollCircumference * (1 - ratio));
  scrollTopButton.classList.toggle('is-visible', window.scrollY > 320);
  scrollUpdateQueued = false;
}

window.addEventListener('scroll', () => {
  if (scrollUpdateQueued) return;
  scrollUpdateQueued = true;
  window.requestAnimationFrame(updateScrollTopButton);
}, { passive: true });

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

updateScrollTopButton();

const heroCarVisual = document.querySelector('.hero-car-visual');
const mobileHeroMotion = window.matchMedia('(max-width: 650px)');
const reducedHeroMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let heroMotionQueued = false;
let previousHeroScrollY = window.scrollY;
let heroSpeedFadeTimer = 0;

function resetHeroCarMotion() {
  if (!heroCarVisual) return;
  heroCarVisual.classList.remove('is-reversing');
  heroCarVisual.style.removeProperty('--hero-car-x');
  heroCarVisual.style.removeProperty('--hero-car-lift');
  heroCarVisual.style.removeProperty('--hero-wheel-angle');
  heroCarVisual.style.removeProperty('--hero-wheel-opacity');
  heroCarVisual.style.removeProperty('--hero-speed-opacity');
}

function updateHeroCarMotion() {
  heroMotionQueued = false;
  if (!heroCarVisual) return;

  const currentScrollY = Math.max(0, window.scrollY);
  if (!mobileHeroMotion.matches || reducedHeroMotion.matches) {
    resetHeroCarMotion();
    previousHeroScrollY = currentScrollY;
    return;
  }

  const motionDistance = Math.min(300, Math.max(220, window.innerHeight * .34));
  const progress = Math.min(1, currentScrollY / motionDistance);
  const delta = currentScrollY - previousHeroScrollY;
  const travelX = 50 - progress * 162;
  const wheelAngle = -progress * 1440;
  const wheelOpacity = Math.min(.96, Math.max(0, (progress - .035) * 4.5));

  heroCarVisual.style.setProperty('--hero-car-x', `${travelX.toFixed(2)}%`);
  heroCarVisual.style.setProperty('--hero-car-lift', `${(-Math.sin(progress * Math.PI) * 2).toFixed(2)}px`);
  heroCarVisual.style.setProperty('--hero-wheel-angle', `${wheelAngle.toFixed(1)}deg`);
  heroCarVisual.style.setProperty('--hero-wheel-opacity', wheelOpacity.toFixed(2));

  if (Math.abs(delta) > .5) {
    heroCarVisual.classList.toggle('is-reversing', delta < 0 && progress > 0);
    heroCarVisual.style.setProperty('--hero-speed-opacity', String(Math.min(.72, .26 + Math.abs(delta) / 34)));
    window.clearTimeout(heroSpeedFadeTimer);
    heroSpeedFadeTimer = window.setTimeout(() => {
      heroCarVisual.style.setProperty('--hero-speed-opacity', '0');
    }, 115);
  }

  if (progress === 0) {
    window.clearTimeout(heroSpeedFadeTimer);
    heroCarVisual.style.setProperty('--hero-speed-opacity', '0');
    heroCarVisual.classList.remove('is-reversing');
  }
  previousHeroScrollY = currentScrollY;
}

function queueHeroCarMotion() {
  if (heroMotionQueued) return;
  heroMotionQueued = true;
  window.requestAnimationFrame(updateHeroCarMotion);
}

window.addEventListener('scroll', queueHeroCarMotion, { passive: true });
window.addEventListener('resize', queueHeroCarMotion);
mobileHeroMotion.addEventListener('change', queueHeroCarMotion);
reducedHeroMotion.addEventListener('change', queueHeroCarMotion);
updateHeroCarMotion();

function renderFleetCards() {
  const grid = document.querySelector('#tarife');
  grid.innerHTML = CAR_FLEET.map((car, index) => `
    <article class="rental-car-card" data-car-id="${car.id}" data-brand="${car.brand}" data-price="${car.price}" data-transmission="${car.transmission}" data-fuel="${car.fuel}" data-category="${car.category}" data-fleet-index="${index}">
      <div class="rental-card-copy">
        <h3><a class="car-detail-link" href="car.html?id=${encodeURIComponent(car.id)}">${car.model}</a></h3>
        <p class="car-description"></p>
        <ul>
          <li data-spec="passengers"></li>
          <li data-spec="bags"></li>
          <li data-spec="air"></li>
          <li data-spec="transmission"></li>
          <li data-spec="fuel"></li>
        </ul>
      </div>
      <div class="rental-car-visual" data-car-id="${car.id}" data-gallery-index="0">
        <img class="rental-car-photo" src="assets/cars/${car.images[0]}" alt="" loading="eager" ${index < 3 ? 'fetchpriority="high"' : ''} decoding="async">
        <button class="gallery-button gallery-prev" type="button"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg></button>
        <button class="gallery-button gallery-next" type="button"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></button>
        <div class="gallery-dots">${car.images.map((_, dotIndex) => `<button class="gallery-dot${dotIndex === 0 ? ' is-active' : ''}" type="button" data-gallery-index="${dotIndex}"></button>`).join('')}</div>
        <span class="gallery-counter"></span>
      </div>
      <div class="rental-card-footer">
        <div><small class="price-from"></small><strong>${car.price.toLocaleString('ro-MD')} MDL</strong><span class="price-per-day"></span><em class="monthly-request"></em></div>
        <button class="select-rental-car" type="button" data-vehicle="${car.model}"></button>
      </div>
    </article>
  `).join('');
}

function galleryCar(visual) {
  return CAR_FLEET.find((car) => car.id === visual.dataset.carId);
}

function updateGalleryLanguage(visual, car) {
  const index = Number(visual.dataset.galleryIndex || 0);
  const image = visual.querySelector('.rental-car-photo');
  image.alt = `${car.model}, ${t('photo')} ${index + 1}`;
  visual.querySelector('.gallery-prev').setAttribute('aria-label', t('previousPhoto'));
  visual.querySelector('.gallery-next').setAttribute('aria-label', t('nextPhoto'));
  visual.querySelector('.gallery-counter').textContent = t('photoCount', { current: index + 1, total: car.images.length });
  visual.querySelectorAll('.gallery-dot').forEach((dot, dotIndex) => {
    dot.setAttribute('aria-label', `${t('photo')} ${dotIndex + 1}`);
    dot.setAttribute('aria-current', String(dotIndex === index));
  });
}

function showGalleryImage(visual, requestedIndex) {
  const car = galleryCar(visual);
  if (!car) return;
  const index = (requestedIndex + car.images.length) % car.images.length;
  const image = visual.querySelector('.rental-car-photo');
  image.classList.add('is-changing');
  image.src = `assets/cars/${car.images[index]}`;
  image.addEventListener('load', () => image.classList.remove('is-changing'), { once: true });
  window.setTimeout(() => image.classList.remove('is-changing'), 250);
  visual.dataset.galleryIndex = String(index);
  visual.querySelectorAll('.gallery-dot').forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
  updateGalleryLanguage(visual, car);
  const preload = new Image();
  preload.src = `assets/cars/${car.images[(index + 1) % car.images.length]}`;
}

function initializeCarGalleries() {
  for (const visual of document.querySelectorAll('.rental-car-visual')) {
    let touchStartX = 0;
    let touchMoved = false;
    const mainImage = visual.querySelector('.rental-car-photo');
    visual.querySelector('.gallery-prev').addEventListener('click', () => showGalleryImage(visual, Number(visual.dataset.galleryIndex) - 1));
    visual.querySelector('.gallery-next').addEventListener('click', () => showGalleryImage(visual, Number(visual.dataset.galleryIndex) + 1));
    visual.querySelectorAll('.gallery-dot').forEach((dot) => dot.addEventListener('click', () => showGalleryImage(visual, Number(dot.dataset.galleryIndex))));
    mainImage.setAttribute('role', 'button');
    mainImage.tabIndex = 0;
    mainImage.addEventListener('click', () => {
      if (touchMoved) {
        touchMoved = false;
        return;
      }
      const car = galleryCar(visual);
      if (car) window.location.href = `car.html?id=${encodeURIComponent(car.id)}`;
    });
    mainImage.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      const car = galleryCar(visual);
      if (car) window.location.href = `car.html?id=${encodeURIComponent(car.id)}`;
    });
    visual.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0].clientX;
      touchMoved = false;
    }, { passive: true });
    visual.addEventListener('touchend', (event) => {
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) < 45) return;
      touchMoved = true;
      showGalleryImage(visual, Number(visual.dataset.galleryIndex) + (distance < 0 ? 1 : -1));
    }, { passive: true });
  }
}

function localizeFleetCards() {
  for (const card of document.querySelectorAll('.rental-car-card')) {
    const car = CAR_FLEET.find((item) => item.id === card.dataset.carId);
    if (!car) continue;
    card.querySelector('.car-description').textContent = t(car.description);
    card.querySelector('[data-spec="passengers"]').textContent = t('passengers', { count: car.passengers });
    card.querySelector('[data-spec="bags"]').textContent = t('bags', { count: car.bags });
    card.querySelector('[data-spec="air"]').textContent = t('airConditioned');
    card.querySelector('[data-spec="transmission"]').textContent = t(car.transmission);
    card.querySelector('[data-spec="fuel"]').textContent = t(car.fuel);
    card.querySelector('.price-from').textContent = t('from');
    card.querySelector('.price-per-day').textContent = t('perDay');
    card.querySelector('.monthly-request').textContent = t('monthlyRequest');
    card.querySelector('.select-rental-car').textContent = t('reserveNow');
    card.querySelector('.rental-car-photo').setAttribute('aria-label', `${t('viewCarDetails')}: ${car.model}`);
    card.querySelector('.rental-car-photo').title = t('viewCarDetails');
    updateGalleryLanguage(card.querySelector('.rental-car-visual'), car);
  }
}

function localizeLightbox() {
  if (!lightboxCar) return;
  lightboxTitle.textContent = lightboxCar.model;
  lightboxCounter.textContent = t('photoCount', { current: lightboxIndex + 1, total: lightboxCar.images.length });
  lightboxImage.alt = `${lightboxCar.model}, ${t('photo')} ${lightboxIndex + 1}`;
  lightboxPrev.setAttribute('aria-label', t('previousPhoto'));
  lightboxNext.setAttribute('aria-label', t('nextPhoto'));
  lightboxZoomOut.setAttribute('aria-label', t('zoomOut'));
  lightboxZoomIn.setAttribute('aria-label', t('zoomIn'));
  lightboxActual.setAttribute('aria-label', t('actualSize'));
  lightboxFit.setAttribute('aria-label', t('fitScreen'));
  lightboxClose.setAttribute('aria-label', t('closeViewer'));
  lightboxThumbnails.setAttribute('aria-label', t('carPhotos'));
  lightboxThumbnails.querySelectorAll('.lightbox-thumbnail').forEach((thumbnail, index) => {
    thumbnail.setAttribute('aria-label', `${t('photo')} ${index + 1}`);
  });
  lightboxImage.title = lightboxMode === 'fit' ? t('actualSize') : t('fitScreen');
}

function applyLightboxScale(scale, mode = 'custom') {
  if (!lightboxImage.naturalWidth || !lightboxImage.naturalHeight) return;
  lightboxMode = mode;
  lightboxScale = Math.max(lightboxFitScale, Math.min(4, scale));
  const imageWidth = Math.round(lightboxImage.naturalWidth * lightboxScale);
  const imageHeight = Math.round(lightboxImage.naturalHeight * lightboxScale);
  const horizontalPadding = window.innerWidth <= 650 ? 20 : 164;
  const verticalPadding = window.innerWidth <= 650 ? 24 : 44;
  lightboxImage.style.width = `${imageWidth}px`;
  lightboxImage.style.height = `${imageHeight}px`;
  lightboxFrame.style.width = `${Math.max(lightboxScroll.clientWidth, imageWidth + horizontalPadding)}px`;
  lightboxFrame.style.height = `${Math.max(lightboxScroll.clientHeight, imageHeight + verticalPadding)}px`;
  lightboxZoomLabel.value = `${Math.round(lightboxScale * 100)}%`;
  lightboxZoomLabel.textContent = lightboxZoomLabel.value;
  lightboxImage.classList.toggle('is-actual', Math.abs(lightboxScale - 1) < 0.015);
  lightboxActual.setAttribute('aria-pressed', String(Math.abs(lightboxScale - 1) < 0.015));
  lightboxFit.setAttribute('aria-pressed', String(lightboxMode === 'fit'));
  lightboxZoomOut.disabled = lightboxScale <= lightboxFitScale + 0.001;
  localizeLightbox();
  window.requestAnimationFrame(() => {
    lightboxScroll.scrollLeft = Math.max(0, (lightboxFrame.scrollWidth - lightboxScroll.clientWidth) / 2);
    lightboxScroll.scrollTop = Math.max(0, (lightboxFrame.scrollHeight - lightboxScroll.clientHeight) / 2);
  });
}

function fitLightboxImage() {
  if (!lightboxImage.naturalWidth || !lightboxImage.naturalHeight) return;
  const horizontalPadding = window.innerWidth <= 650 ? 20 : 164;
  const verticalPadding = window.innerWidth <= 650 ? 24 : 44;
  const availableWidth = Math.max(160, lightboxScroll.clientWidth - horizontalPadding);
  const availableHeight = Math.max(160, lightboxScroll.clientHeight - verticalPadding);
  lightboxFitScale = Math.min(1, availableWidth / lightboxImage.naturalWidth, availableHeight / lightboxImage.naturalHeight);
  applyLightboxScale(lightboxFitScale, 'fit');
}

function renderLightboxThumbnails() {
  lightboxThumbnails.innerHTML = lightboxCar.images.map((image, index) => `
    <button class="lightbox-thumbnail${index === lightboxIndex ? ' is-active' : ''}" type="button" data-lightbox-index="${index}">
      <img src="assets/cars/${image}" alt="" loading="eager" decoding="async">
    </button>
  `).join('');
  lightboxThumbnails.querySelectorAll('.lightbox-thumbnail').forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => showLightboxImage(Number(thumbnail.dataset.lightboxIndex)));
  });
  localizeLightbox();
}

function showLightboxImage(requestedIndex) {
  if (!lightboxCar) return;
  lightboxIndex = (requestedIndex + lightboxCar.images.length) % lightboxCar.images.length;
  const source = `assets/cars/${lightboxCar.images[lightboxIndex]}`;
  const finishLoading = () => {
    fitLightboxImage();
    lightboxImage.style.opacity = '1';
  };
  lightboxImage.style.opacity = '0';
  lightboxImage.onload = finishLoading;
  lightboxImage.src = source;
  if (lightboxImage.complete && lightboxImage.naturalWidth) window.requestAnimationFrame(finishLoading);
  lightboxThumbnails.querySelectorAll('.lightbox-thumbnail').forEach((thumbnail, index) => {
    const isActive = index === lightboxIndex;
    thumbnail.classList.toggle('is-active', isActive);
    thumbnail.setAttribute('aria-current', String(isActive));
    if (isActive) thumbnail.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });
  if (lightboxSourceVisual) showGalleryImage(lightboxSourceVisual, lightboxIndex);
  localizeLightbox();
}

function openImageLightbox(visual, index = Number(visual.dataset.galleryIndex || 0)) {
  lightboxCar = galleryCar(visual);
  if (!lightboxCar) return;
  closeCalendar();
  toggleMegaMenu(false);
  lightboxSourceVisual = visual;
  lightboxReturnFocus = document.activeElement;
  lightboxIndex = index;
  lightboxFitScale = 1;
  lightboxScale = 1;
  lightboxMode = 'fit';
  lightboxFit.setAttribute('aria-pressed', 'false');
  imageLightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  renderLightboxThumbnails();
  showLightboxImage(index);
  lightboxClose.focus();
}

function closeImageLightbox() {
  if (imageLightbox.hidden) return;
  imageLightbox.hidden = true;
  lightboxImage.onload = null;
  lightboxImage.removeAttribute('src');
  lightboxImage.style.width = '';
  lightboxImage.style.height = '';
  lightboxImage.style.opacity = '1';
  lightboxFrame.style.width = '';
  lightboxFrame.style.height = '';
  lightboxCar = null;
  lightboxSourceVisual = null;
  document.body.style.overflow = '';
  lightboxReturnFocus?.focus();
}

lightboxPrev.addEventListener('click', () => showLightboxImage(lightboxIndex - 1));
lightboxNext.addEventListener('click', () => showLightboxImage(lightboxIndex + 1));
lightboxClose.addEventListener('click', closeImageLightbox);
lightboxFit.addEventListener('click', fitLightboxImage);
lightboxActual.addEventListener('click', () => applyLightboxScale(1, 'actual'));
lightboxZoomIn.addEventListener('click', () => applyLightboxScale(lightboxScale * 1.25));
lightboxZoomOut.addEventListener('click', () => {
  const nextScale = lightboxScale / 1.25;
  if (nextScale <= lightboxFitScale * 1.06) fitLightboxImage();
  else applyLightboxScale(nextScale);
});
lightboxImage.addEventListener('click', () => {
  if (lightboxMode === 'fit' && lightboxFitScale < 1) applyLightboxScale(1, 'actual');
  else fitLightboxImage();
});
lightboxScroll.addEventListener('wheel', (event) => {
  if (!event.ctrlKey && !event.metaKey) return;
  event.preventDefault();
  applyLightboxScale(lightboxScale * (event.deltaY < 0 ? 1.18 : 1 / 1.18));
}, { passive: false });

let lightboxTouchStart = null;
lightboxFrame.addEventListener('touchstart', (event) => {
  if (event.changedTouches.length !== 1 || lightboxScale > lightboxFitScale * 1.08) return;
  lightboxTouchStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
}, { passive: true });
lightboxFrame.addEventListener('touchend', (event) => {
  if (!lightboxTouchStart || event.changedTouches.length !== 1) return;
  const deltaX = event.changedTouches[0].clientX - lightboxTouchStart.x;
  const deltaY = event.changedTouches[0].clientY - lightboxTouchStart.y;
  lightboxTouchStart = null;
  if (Math.abs(deltaX) < 55 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  showLightboxImage(lightboxIndex + (deltaX < 0 ? 1 : -1));
});

renderFleetCards();
initializeCarGalleries();
localizeFleetCards();

fillTimeOptions(pickupTime);
fillTimeOptions(dropoffTime);
fillCalendarTimeOptions();

for (const button of document.querySelectorAll('.select-rental-car')) {
  button.addEventListener('click', () => {
    const card = button.closest('.rental-car-card');
    if (!card?.dataset.carId) return;
    window.location.href = `car.html?id=${encodeURIComponent(card.dataset.carId)}`;
  });
}

const fleetGrid = document.querySelector('#tarife');
const fleetCards = Array.from(document.querySelectorAll('.rental-car-card'));
const fleetFilterInputs = Array.from(document.querySelectorAll('[data-fleet-filter]'));
const fleetPriceMin = document.querySelector('#fleet-price-min');
const fleetPriceMax = document.querySelector('#fleet-price-max');
const fleetMinLabel = document.querySelector('#fleet-min-label');
const fleetMaxLabel = document.querySelector('#fleet-max-label');
const fleetResultsCount = document.querySelector('#fleet-results-count');
const fleetEmpty = document.querySelector('#fleet-empty');
const fleetSort = document.querySelector('#fleet-sort');
const resetFiltersButton = document.querySelector('#reset-filters');
const mobileFilterToggle = document.querySelector('#mobile-filter-toggle');
const mobileFilterCount = document.querySelector('#mobile-filter-count');
const fleetFilters = document.querySelector('#fleet-filters');

fleetCards.forEach((card, index) => {
  card.dataset.fleetIndex = String(index);
});

function selectedFleetValues(type) {
  return new Set(
    fleetFilterInputs
      .filter((input) => input.dataset.fleetFilter === type && input.checked)
      .map((input) => input.value)
  );
}

function formatFleetPrice(value) {
  return `${Number(value).toLocaleString(LOCALES[currentLanguage])} MDL`;
}

function updateFleetFilterCount() {
  const checkedCount = fleetFilterInputs.filter((input) => input.checked).length;
  const priceChanged = fleetPriceMin.value !== fleetPriceMin.min || fleetPriceMax.value !== fleetPriceMax.max;
  mobileFilterCount.textContent = String(checkedCount + (priceChanged ? 1 : 0));
}

function applyFleetFilters() {
  let minPrice = Number(fleetPriceMin.value);
  let maxPrice = Number(fleetPriceMax.value);
  if (minPrice > maxPrice) {
    if (document.activeElement === fleetPriceMin) maxPrice = minPrice;
    else minPrice = maxPrice;
    fleetPriceMin.value = String(minPrice);
    fleetPriceMax.value = String(maxPrice);
  }

  fleetMinLabel.textContent = formatFleetPrice(minPrice);
  fleetMaxLabel.textContent = formatFleetPrice(maxPrice);

  const selected = {
    brand: selectedFleetValues('brand'),
    transmission: selectedFleetValues('transmission'),
    fuel: selectedFleetValues('fuel'),
    category: selectedFleetValues('category')
  };

  for (const card of fleetCards) {
    const price = Number(card.dataset.price);
    const matchesPrice = price >= minPrice && price <= maxPrice;
    const matchesOptions = Object.entries(selected).every(([type, values]) =>
      values.size === 0 || values.has(card.dataset[type])
    );
    card.hidden = !(matchesPrice && matchesOptions);
  }

  const orderedCards = [...fleetCards].sort((a, b) => {
    if (fleetSort.value === 'price-asc') return Number(a.dataset.price) - Number(b.dataset.price);
    if (fleetSort.value === 'price-desc') return Number(b.dataset.price) - Number(a.dataset.price);
    return Number(a.dataset.fleetIndex) - Number(b.dataset.fleetIndex);
  });
  orderedCards.forEach((card) => fleetGrid.append(card));

  const visibleCount = fleetCards.filter((card) => !card.hidden).length;
  fleetResultsCount.textContent = visibleCount === 1 ? t('oneCar') : t('cars', { count: visibleCount });
  fleetEmpty.hidden = visibleCount !== 0;
  updateFleetFilterCount();
}

fleetFilterInputs.forEach((input) => input.addEventListener('change', applyFleetFilters));
fleetPriceMin.addEventListener('input', applyFleetFilters);
fleetPriceMax.addEventListener('input', applyFleetFilters);
fleetSort.addEventListener('change', applyFleetFilters);

resetFiltersButton.addEventListener('click', () => {
  fleetFilterInputs.forEach((input) => { input.checked = false; });
  fleetPriceMin.value = fleetPriceMin.min;
  fleetPriceMax.value = fleetPriceMax.max;
  fleetSort.value = 'recommended';
  applyFleetFilters();
});

mobileFilterToggle.addEventListener('click', () => {
  const isOpen = fleetFilters.classList.toggle('is-open');
  mobileFilterToggle.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) fleetFilters.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const faqList = document.querySelector('#faq-list');
faqList.addEventListener('click', (event) => {
  const button = event.target.closest('.faq-question');
  if (!button) return;
  const selectedItem = button.closest('.faq-item');
  const shouldOpen = !selectedItem.classList.contains('is-open');
  faqList.querySelectorAll('.faq-item').forEach((item) => {
    item.classList.remove('is-open');
    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    item.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
  });
  if (shouldOpen) {
    selectedItem.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    selectedItem.querySelector('.faq-answer').setAttribute('aria-hidden', 'false');
  }
});

const faqSection = document.querySelector('#faq');
if ('IntersectionObserver' in window) {
  const faqObserver = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    faqSection.classList.add('is-visible');
    faqObserver.disconnect();
  }, { threshold: .16 });
  faqObserver.observe(faqSection);
} else {
  faqSection.classList.add('is-visible');
}

applyFleetFilters();
applyLanguage(currentLanguage);

if (window.location.hash === '#login') {
  openAuthDialog('login');
}

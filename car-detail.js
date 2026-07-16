const DETAIL_COPY = {
  ro: {
    cars: 'Mașini', steps: 'Cum funcționează', about: 'Despre noi', contact: 'Contact', requestShort: 'Solicită', back: 'Înapoi la flotă',
    priceFrom: 'Preț de la', perDay: '/zi', requestCar: 'Solicită această mașină', requestNow: 'Solicită acum', call: 'Sună direct', included: 'Ce este inclus',
    insurance: 'Asigurare civilă inclusă', fuelPickup: 'Nivelul combustibilului notat la preluare', delivery: 'Predare în Nisporeni', support: 'Suport pentru rezervări 24/7', mileage: 'Condițiile kilometrilor se confirmă', inspection: 'Mașini verificate și întreținute',
    otherCars: 'Vezi și celelalte mașini', viewFleet: 'Vezi toată flota', footerText: 'Închirieri auto simple și rapide în Nisporeni.', company: 'Companie', clients: 'Clienți', terms: 'Termeni și condiții', contactPending: 'Telefonul și e-mailul se configurează înainte de publicare.',
    manual: 'Manuală', automatic: 'Automată', diesel: 'Diesel', petrol: 'Benzină', hybrid: 'Hibrid', economic: 'Economică', estate: 'Break', sedan: 'Sedan', suv: 'SUV', passengers: '{count} locuri', bags: '{count} bagaje', photo: 'Fotografia {current} din {total}', previous: 'Fotografia anterioară', next: 'Fotografia următoare', close: 'Închide galeria',
    whatsapp: 'Bună ziua! Doresc să rezerv {car}, de la {price} MDL/zi. Vă rog să-mi confirmați disponibilitatea.'
  },
  ru: {
    cars: 'Автомобили', steps: 'Как это работает', about: 'О нас', contact: 'Контакты', requestShort: 'Запросить', back: 'Назад к автопарку',
    priceFrom: 'Цена от', perDay: '/день', requestCar: 'Запросить этот автомобиль', requestNow: 'Запросить сейчас', call: 'Позвонить', included: 'Что включено',
    insurance: 'Страхование гражданской ответственности', fuelPickup: 'Уровень топлива фиксируется при выдаче', delivery: 'Выдача в Ниспоренах', support: 'Поддержка бронирования 24/7', mileage: 'Условия пробега подтверждаются', inspection: 'Проверенные и обслуженные автомобили',
    otherCars: 'Посмотрите другие автомобили', viewFleet: 'Весь автопарк', footerText: 'Простая и быстрая аренда авто в Ниспоренах.', company: 'Компания', clients: 'Клиентам', terms: 'Условия аренды', contactPending: 'Телефон и e-mail будут добавлены до публикации.',
    manual: 'Механика', automatic: 'Автомат', diesel: 'Дизель', petrol: 'Бензин', hybrid: 'Гибрид', economic: 'Эконом', estate: 'Универсал', sedan: 'Седан', suv: 'SUV', passengers: '{count} мест', bags: '{count} багажа', photo: 'Фото {current} из {total}', previous: 'Предыдущее фото', next: 'Следующее фото', close: 'Закрыть галерею',
    whatsapp: 'Здравствуйте! Хочу забронировать {car} по цене от {price} MDL/день. Подтвердите, пожалуйста, наличие.'
  },
  en: {
    cars: 'Cars', steps: 'How it works', about: 'About us', contact: 'Contact', requestShort: 'Request', back: 'Back to fleet',
    priceFrom: 'Price from', perDay: '/day', requestCar: 'Request this car', requestNow: 'Request now', call: 'Call directly', included: 'What is included',
    insurance: 'Civil liability insurance included', fuelPickup: 'Fuel level recorded at pickup', delivery: 'Pickup in Nisporeni', support: 'Booking support 24/7', mileage: 'Mileage terms confirmed at booking', inspection: 'Inspected and maintained cars',
    otherCars: 'See our other cars', viewFleet: 'View the full fleet', footerText: 'Simple and quick car rental in Nisporeni.', company: 'Company', clients: 'Clients', terms: 'Terms and conditions', contactPending: 'Phone and e-mail will be configured before publication.',
    manual: 'Manual', automatic: 'Automatic', diesel: 'Diesel', petrol: 'Petrol', hybrid: 'Hybrid', economic: 'Economy', estate: 'Estate', sedan: 'Sedan', suv: 'SUV', passengers: '{count} seats', bags: '{count} bags', photo: 'Photo {current} of {total}', previous: 'Previous photo', next: 'Next photo', close: 'Close gallery',
    whatsapp: 'Hello! I would like to book {car}, from {price} MDL/day. Please confirm availability.'
  }
};

const DETAIL_LANGUAGE_NAMES = { ro: 'Română', ru: 'Русский', en: 'English' };
const fleet = Array.isArray(window.ELITA_FLEET) ? window.ELITA_FLEET : [];
const requestedId = new URLSearchParams(window.location.search).get('id');
const car = fleet.find((item) => item.id === requestedId) || fleet[0];
const [carDisplayName, carRegistration = ''] = car ? car.model.split(' · ') : ['', ''];
let detailLanguage = ['ro', 'ru', 'en'].includes(localStorage.getItem('site-language')) ? localStorage.getItem('site-language') : 'ro';
let galleryIndex = 0;
let lightboxOpen = false;
let lightboxReturnFocus = null;

const detailTitle = document.querySelector('#detail-title');
const mainImage = document.querySelector('#detail-main-image');
const galleryCounter = document.querySelector('#detail-gallery-counter');
const thumbnails = document.querySelector('#detail-thumbnails');
const galleryPrev = document.querySelector('#detail-gallery-prev');
const galleryNext = document.querySelector('#detail-gallery-next');
const lightbox = document.querySelector('#detail-lightbox');
const lightboxImage = document.querySelector('#detail-lightbox-image');
const lightboxCounter = document.querySelector('#detail-lightbox-counter');
const lightboxClose = document.querySelector('#detail-lightbox-close');
const lightboxPrev = document.querySelector('#detail-lightbox-prev');
const lightboxNext = document.querySelector('#detail-lightbox-next');
const languageButton = document.querySelector('#detail-language-button');
const languageMenu = document.querySelector('#detail-language-menu');
const languageLabel = document.querySelector('#detail-language-label');
const mobileToggle = document.querySelector('#detail-mobile-toggle');
const mobileNav = document.querySelector('#detail-mobile-nav');

function copy(key, values = {}) {
  let value = DETAIL_COPY[detailLanguage][key] || DETAIL_COPY.ro[key] || key;
  for (const [name, replacement] of Object.entries(values)) value = value.replace(`{${name}}`, replacement);
  return value;
}

function carImage(index) {
  return `assets/cars/${car.images[index]}`;
}

function specificationItems() {
  const items = [
    ['⚙', copy(car.transmission)],
    ['♙', copy('passengers', { count: car.passengers })],
    ['◉', copy(car.fuel)],
    ['▣', copy(car.category)],
    ['▦', copy('bags', { count: car.bags })]
  ];
  if (carRegistration) items.push(['#', carRegistration]);
  return items;
}

function renderThumbnails() {
  thumbnails.innerHTML = car.images.map((image, index) => `
    <button class="detail-thumbnail${index === galleryIndex ? ' is-active' : ''}" type="button" data-image-index="${index}" aria-label="${copy('photo', { current: index + 1, total: car.images.length })}" aria-current="${index === galleryIndex}">
      <img src="assets/cars/${image}" alt="" loading="eager" decoding="async">
    </button>
  `).join('');
  thumbnails.querySelectorAll('[data-image-index]').forEach((button) => {
    button.addEventListener('click', () => showImage(Number(button.dataset.imageIndex)));
  });
}

function updateGalleryText() {
  const description = copy('photo', { current: galleryIndex + 1, total: car.images.length });
  mainImage.alt = `${car.model} — ${description.toLowerCase()}`;
  lightboxImage.alt = `${car.model} — ${description.toLowerCase()}`;
  galleryCounter.textContent = `${galleryIndex + 1} / ${car.images.length}`;
  lightboxCounter.textContent = `${galleryIndex + 1} / ${car.images.length}`;
  galleryPrev.setAttribute('aria-label', copy('previous'));
  galleryNext.setAttribute('aria-label', copy('next'));
  lightboxPrev.setAttribute('aria-label', copy('previous'));
  lightboxNext.setAttribute('aria-label', copy('next'));
  lightboxClose.setAttribute('aria-label', copy('close'));
  thumbnails.querySelectorAll('[data-image-index]').forEach((button, index) => {
    button.setAttribute('aria-label', copy('photo', { current: index + 1, total: car.images.length }));
  });
}

function showImage(requestedIndex) {
  galleryIndex = (requestedIndex + car.images.length) % car.images.length;
  mainImage.classList.add('is-changing');
  lightboxImage.classList.add('is-changing');
  const nextSource = carImage(galleryIndex);
  const preload = new Image();
  preload.addEventListener('load', () => {
    mainImage.src = nextSource;
    lightboxImage.src = nextSource;
    window.requestAnimationFrame(() => {
      mainImage.classList.remove('is-changing');
      lightboxImage.classList.remove('is-changing');
    });
  }, { once: true });
  preload.addEventListener('error', () => {
    mainImage.classList.remove('is-changing');
    lightboxImage.classList.remove('is-changing');
  }, { once: true });
  preload.src = nextSource;
  window.setTimeout(() => {
    mainImage.classList.remove('is-changing');
    lightboxImage.classList.remove('is-changing');
  }, 500);
  thumbnails.querySelectorAll('[data-image-index]').forEach((button, index) => {
    const active = index === galleryIndex;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-current', String(active));
  });
  updateGalleryText();
}

function openLightbox() {
  lightboxReturnFocus = document.activeElement;
  lightboxOpen = true;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightboxImage.src = carImage(galleryIndex);
  updateGalleryText();
  lightboxClose.focus();
}

function closeLightbox() {
  lightboxOpen = false;
  lightbox.hidden = true;
  document.body.style.overflow = '';
  if (lightboxReturnFocus && typeof lightboxReturnFocus.focus === 'function') lightboxReturnFocus.focus();
}

function applyLanguage(language) {
  detailLanguage = ['ro', 'ru', 'en'].includes(language) ? language : 'ro';
  localStorage.setItem('site-language', detailLanguage);
  document.documentElement.lang = detailLanguage;
  document.title = `${car.model} | Elita Auto Rent`;
  languageLabel.textContent = DETAIL_LANGUAGE_NAMES[detailLanguage];
  document.querySelectorAll('[data-copy]').forEach((element) => {
    element.textContent = copy(element.dataset.copy);
  });
  languageMenu.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-current', String(button.dataset.language === detailLanguage));
  });
  document.querySelector('#detail-specs').innerHTML = specificationItems().map(([icon, label]) => `<li><span aria-hidden="true">${icon}</span>${label}</li>`).join('');
  document.querySelector('#included-car-summary').textContent = `${copy(car.category)} · ${copy(car.transmission)} · ${copy(car.fuel)}`;
  updateGalleryText();
}

function openWhatsApp() {
  const message = copy('whatsapp', { car: car.model, price: car.price.toLocaleString('ro-MD') });
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function addSwipe(element, onPrevious, onNext) {
  let start = null;
  element.addEventListener('touchstart', (event) => {
    if (event.changedTouches.length !== 1) return;
    start = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
  }, { passive: true });
  element.addEventListener('touchend', (event) => {
    if (!start || event.changedTouches.length !== 1) return;
    const deltaX = event.changedTouches[0].clientX - start.x;
    const deltaY = event.changedTouches[0].clientY - start.y;
    start = null;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    if (deltaX < 0) onNext();
    else onPrevious();
  }, { passive: true });
}

function initializeRevealAnimations() {
  const targets = document.querySelectorAll('.included-main, .included-booking-card, .detail-fleet-cta > *, .detail-footer-shell > *');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .14, rootMargin: '0px 0px -40px' });
  targets.forEach((target) => observer.observe(target));
}

if (!car) {
  window.location.replace('index.html#fleet');
} else {
  detailTitle.textContent = carDisplayName;
  document.querySelector('#detail-price').textContent = car.price.toLocaleString('ro-MD');
  document.querySelector('#included-price').textContent = car.price.toLocaleString('ro-MD');
  document.querySelector('#included-car-name').textContent = carDisplayName;
  mainImage.src = carImage(0);
  lightboxImage.src = carImage(0);
  renderThumbnails();
  applyLanguage(detailLanguage);
  initializeRevealAnimations();
}

galleryPrev.addEventListener('click', () => showImage(galleryIndex - 1));
galleryNext.addEventListener('click', () => showImage(galleryIndex + 1));
lightboxPrev.addEventListener('click', () => showImage(galleryIndex - 1));
lightboxNext.addEventListener('click', () => showImage(galleryIndex + 1));
mainImage.addEventListener('click', openLightbox);
mainImage.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openLightbox();
  }
});
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (!lightboxOpen) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showImage(galleryIndex - 1);
  if (event.key === 'ArrowRight') showImage(galleryIndex + 1);
});
addSwipe(document.querySelector('.detail-gallery-stage'), () => showImage(galleryIndex - 1), () => showImage(galleryIndex + 1));
addSwipe(document.querySelector('.detail-lightbox-frame'), () => showImage(galleryIndex - 1), () => showImage(galleryIndex + 1));

document.querySelectorAll('[data-request]').forEach((button) => button.addEventListener('click', openWhatsApp));

languageButton.addEventListener('click', () => {
  const open = languageMenu.hidden;
  languageMenu.hidden = !open;
  languageButton.setAttribute('aria-expanded', String(open));
});
languageMenu.addEventListener('click', (event) => {
  const option = event.target.closest('[data-language]');
  if (!option) return;
  applyLanguage(option.dataset.language);
  languageMenu.hidden = true;
  languageButton.setAttribute('aria-expanded', 'false');
  languageButton.focus();
});

mobileToggle.addEventListener('click', () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  mobileToggle.setAttribute('aria-expanded', String(open));
});
mobileNav.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  mobileNav.hidden = true;
  mobileToggle.setAttribute('aria-expanded', 'false');
});

document.addEventListener('click', (event) => {
  if (!languageMenu.hidden && !event.target.closest('.language-switcher')) {
    languageMenu.hidden = true;
    languageButton.setAttribute('aria-expanded', 'false');
  }
  if (!mobileNav.hidden && !event.target.closest('#detail-mobile-nav') && !event.target.closest('#detail-mobile-toggle')) {
    mobileNav.hidden = true;
    mobileToggle.setAttribute('aria-expanded', 'false');
  }
});

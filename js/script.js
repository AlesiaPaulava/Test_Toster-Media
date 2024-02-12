document.addEventListener('DOMContentLoaded', () => {
  // Инициализация Swiper
  const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true // Возможность перетаскивать скролл
    }
  });

  // Функция переключения класса
  const toggleClass = (element, className) => element.classList.toggle(className);

  // Модальное окно
  const toggleModal = () => document.body.classList.toggle('open');
  const btn = document.querySelector('.product__btn');
  const modal = document.querySelector('.modal');

  btn.addEventListener('click', () => {
    modal.classList.add('modal__open'); // Открывает модальное окно
    toggleModal();
  });

  modal.addEventListener('click', (event) => {
    // Закрывает модальное окно при клике на крестик или мимо модального окна
    if (event.target === modal || event.target.closest('.modal__close')) {
      modal.classList.remove('modal__open');
      toggleModal();
    }
  });

  // Раскрывающееся меню (бургер)
  const toggleMenu = () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
  };

  const menu = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const burgerClose = document.querySelector('.nav__close');
  const overlay = document.querySelector('.overlay');

  burger.addEventListener('click', () => {
    toggleMenu();
    toggleModal();
  });

  overlay.addEventListener('click', () => {
    toggleMenu();
    toggleModal();
  });

  burgerClose.addEventListener('click', () => {
    toggleMenu();
    toggleModal();
  });

  // Раскрывающийся блок с информацией
  const header = document.querySelector('.shipping-header');
  const content = document.querySelector('.shipping-content');
  const arrowIcon = document.querySelector('.arrow-icon');

  header.addEventListener('click', () => {
    // Переключает видимость блока и поворачивает стрелку
    toggleClass(content, 'show');
    toggleClass(arrowIcon, 'rotated');
  });
});
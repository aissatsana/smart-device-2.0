import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initPhoneMask} from './utils/phone-mask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const aboutUsButton = document.querySelector('.about-us__button');
  const aboutUsDescr = document.querySelector('.about-us__description--hidden');
  aboutUsButton.addEventListener('click', () => {
    if (aboutUsButton.textContent !== 'Свернуть') {
      aboutUsDescr.classList.remove('about-us__description--hidden');
      aboutUsButton.textContent = 'Свернуть';
    } else {
      aboutUsDescr.classList.add('about-us__description--hidden');
      aboutUsButton.textContent = 'Подробнее';
    }
  });

  const accordeonButtons = document.querySelectorAll('.footer__accordeon');

  window.addEventListener('resize', () => {
    resizeWindow();
  });

  const resizeWindow = () => {
    if (window.innerWidth < 767) {
      accordeonButtons.forEach((n) => {
        n.classList.remove('footer__accordeon--active');
        n.nextElementSibling.style.maxHeight = null;
      });
    } else {
      accordeonButtons.forEach((n) => {
        n.classList.add('footer__accordeon--active');
        n.nextElementSibling.style.maxHeight = 'auto';
      });
    }
  };


  for (let i = 0; i < accordeonButtons.length; i++) {
    accordeonButtons[i].addEventListener('click', function (evt) {
      accordeonButtons.forEach((n) => {
        if (n !== evt.target) {
          n.classList.remove('footer__accordeon--active');
          n.nextElementSibling.style.maxHeight = null;
        }
      });

      accordeonButtons[i].classList.toggle('footer__accordeon--active');

      let panel = accordeonButtons[i].nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    resizeWindow();
    initModals();
    initPhoneMask();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

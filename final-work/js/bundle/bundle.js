(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(e) {
  var sliderTop = require('../parts/slider-top');
  var modals = require('../parts/modals');
  // var popupDesign = require('../parts/popup-design');
  // var popupConsultation = require('../parts/popup-consultation');
  // var popupGift = require('../parts/popup-gift');

  sliderTop();
  modals();

  // popupDesign();
  // popupConsultation();
  // popupGift();
});
},{"../parts/modals":2,"../parts/slider-top":3}],2:[function(require,module,exports){
function modals() {
  let buttonsDesign = document.getElementsByClassName('button-design'),
      overlayDesign = document.querySelector('.popup-design'),
      closeDesign = document.querySelector('.popup-design .popup-close'),
      buttonsConsult = document.getElementsByClassName('button-consultation'),
      overlayConsult = document.querySelector('.popup-consultation'),
      closeConsult = document.querySelector('.popup-consultation .popup-close'),
      buttonGift = document.querySelector('.fixed-gift'),
      overlayGift = document.querySelector('.popup-gift'),
      closeGift = document.querySelector('.popup-gift .popup-close'),
      allButtons = document.getElementsByTagName('button'),
      clickCount = 0,
      userTime = 60000,   // пользователь находится на странице 60 секунд
      popupOpened = false,
      userTimeoutId;

  // Отсчет 60 секунд
  setTimeout(function () {
    console.log('Прошло 60 секунд');
    if (!popupOpened) {
      showModal(overlayConsult);
    }
  }, userTime);

  // Проверяем сколько раз нажимали кнопки кроме кнопки закрыть
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function (e) {
      if (!allButtons[i].classList.contains('popup-close')) {
        clickCount++;
        console.log('clickCount: ', clickCount);
      }
    })
  }

  window.addEventListener('scroll', function (e) {
    let buttonGift = document.querySelector('.fixed-gift');
    if ( buttonGift !== null && clickCount == 0 &&
         (document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight) ) {
      showModal(overlayGift);
      buttonGift.remove();
    }
  });

  // Проходимся циклом по всем кнопкам "Заказать..."
  for (let i = 0; i < buttonsDesign.length; i++) {
    showModalByButton(buttonsDesign[i],overlayDesign);
  }

  closeModalbyButton(closeDesign, overlayDesign);
  closeModalByOverlay(overlayDesign);

  //-----------------------------------------------------------------------
  // Проходимся циклом по всем кнопкам "Подробнее..."
  for (let i = 0; i < buttonsConsult.length; i++) {
    showModalByButton(buttonsConsult[i],overlayConsult);
  }

  closeModalbyButton(closeConsult, overlayConsult);
  closeModalByOverlay(overlayConsult);

  //----------------------------------------------------------------------
  //Нажатие на "Подарок"
  buttonGift.addEventListener('click', function () {
    showModal(overlayGift);
    buttonGift.remove();
  });

  closeModalbyButton(closeGift, overlayGift);
  closeModalByOverlay(overlayGift);

  //-----------------------------------------------------------------------
  function showModal(popup) {
    popupOpened = true;
    popup.style.display = 'block';
    popup.classList.add('animated', 'fadeIn');
    document.body.style.overflow = 'hidden';
  }

  function showModalByButton(button,popup) {
    button.addEventListener('click', function () {
      showModal(popup);
    });
  }

  function closeModalbyButton(button, popup) {
    button.addEventListener('click', function () {
      popupOpened = false;
      popup.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  function closeModalByOverlay(overlay) {
    overlay.addEventListener('click', function(event) {
      if (event.target.closest('.popup-content') === null) {
        popupOpened = false;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
}

module.exports = modals;
},{}],3:[function(require,module,exports){
function sliderTop () {
  let slideIndex = 1,
      delay = 5000,
      lock = false,
      run,
      slides = document.getElementsByClassName('main-slider-item');

  showSlides(slideIndex);

  function showSlides (n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides (n) {
    showSlides(slideIndex += n);
  }

  // автоматическое пролистывание изображений
  function autoSlide() {
    if (lock === true) {
      lock = false;
      window.clearInterval(run);
    }
    else if (lock === false) {
      lock = true;
      run = setInterval(function () {
        plusSlides (1);
      }, delay);
    }
  }
  autoSlide();

  // по нажатию на изображение можем остановить слайдшоу
  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function () {
      autoSlide();
    });
  }
}

module.exports = sliderTop;
},{}]},{},[1]);

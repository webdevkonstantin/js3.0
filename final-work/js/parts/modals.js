"use strict";

function modals() {
  var buttonsDesign = document.getElementsByClassName('button-design'),
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
      userTime = 60000,
      // пользователь находится на странице 60 секунд
  popupOpened = false; // Отсчет 60 секунд

  setTimeout(function () {
    console.log('Прошло 60 секунд');

    if (!popupOpened) {
      showModal(overlayConsult);
    }
  }, userTime); // Проверяем сколько раз нажимали кнопки (кроме кнопок закрыть)

  var _loop = function _loop(i) {
    allButtons[i].addEventListener('click', function () {
      if (!allButtons[i].classList.contains('popup-close') && !allButtons[i].classList.contains('main-next-btn') && !allButtons[i].classList.contains('main-prev-btn')) {
        clickCount++;
        console.log('clickCount: ', clickCount);
      }
    });
  };

  for (var i = 0; i < allButtons.length; i++) {
    _loop(i);
  } // Проверяем, что находимся внизу страницы, сколько раз нажимали кнопки и есть ли еще подарок


  window.addEventListener('scroll', function () {
    var buttonGift = document.querySelector('.fixed-gift');

    if (buttonGift !== null && clickCount === 0 && document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
      showModal(overlayGift); // buttonGift.remove();

      buttonGift.parentElement.removeChild(buttonGift);
    }
  }); // Проходимся циклом по всем кнопкам "Заказать..."

  for (var i = 0; i < buttonsDesign.length; i++) {
    showModalByButton(buttonsDesign[i], overlayDesign);
  }

  closeModalByButton(closeDesign, overlayDesign);
  closeModalByOverlay(overlayDesign); //-----------------------------------------------------------------------
  // Проходимся циклом по всем кнопкам "Подробнее..."

  for (var _i = 0; _i < buttonsConsult.length; _i++) {
    showModalByButton(buttonsConsult[_i], overlayConsult);
  }

  closeModalByButton(closeConsult, overlayConsult);
  closeModalByOverlay(overlayConsult); //----------------------------------------------------------------------
  //Нажатие на "Подарок"

  buttonGift.addEventListener('click', function () {
    showModal(overlayGift); // buttonGift.remove();

    buttonGift.parentElement.removeChild(buttonGift);
  });
  closeModalByButton(closeGift, overlayGift);
  closeModalByOverlay(overlayGift); //-----------------------------------------------------------------------

  function showModal(popup) {
    popupOpened = true;
    popup.style.display = 'block';
    popup.classList.add('animated', 'fadeIn');
    document.body.style.overflow = 'hidden';
  }

  function showModalByButton(button, popup) {
    button.addEventListener('click', function () {
      showModal(popup);
    });
  }

  function closeModalByButton(button, popup) {
    button.addEventListener('click', function () {
      popupOpened = false;
      popup.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  function closeModalByOverlay(overlay) {
    overlay.addEventListener('click', function (event) {
      if (event.target.closest('.popup-content') === null) {
        popupOpened = false;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
}

module.exports = modals;
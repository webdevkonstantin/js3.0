"use strict";

function modal() {
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      readMore = document.getElementsByClassName('description-btn'); // Проходимся циклом по всем кнопкам "Узнать подробнее" в табах

  for (var i = 0; i < readMore.length; i++) {
    readMore[i].addEventListener('click', function () {
      showModal.call(this);
    });
  } // указываем контекст для функции через call


  more.addEventListener('click', function () {
    showModal.call(this);
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    if (more.classList.contains('more-splash')) more.classList.remove('more-splash');

    for (var _i = 0; _i < readMore.length; _i++) {
      if (readMore[_i].classList.contains('more-splash')) readMore[_i].classList.remove('more-splash');
    }

    document.body.style.overflow = '';
  });

  function showModal() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

module.exports = modal;
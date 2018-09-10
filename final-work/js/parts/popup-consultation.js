function popupConsultation() {
  let consult = document.getElementsByClassName('button button-order button-consultation'),
      overlay = document.querySelector('.popup-consultation'),
      close = document.querySelector('.popup-consultation .popup-close'),
      userTime = 60000,   // пользователь находится на странице 60 секунд
      popupOpened = false,
      userTimeoutId;

  userTimeoutId = setTimeout(function () {
    if (!popupOpened) {
      showPopupConsultation();
    }
  }, userTime);

  // Проходимся циклом по всем кнопкам "Подробнее..."
  for (let i = 0; i < consult.length; i++) {
    consult[i].addEventListener('click', function () {
      showPopupConsultation.call(this);
    });
  }

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    popupOpened = false;
  });

  overlay.addEventListener('click', function(event) {
    if (event.target.closest('.popup-content') === null) {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  function showPopupConsultation() {
    popupOpened = true;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

module.exports = popupConsultation;
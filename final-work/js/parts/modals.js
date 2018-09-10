function modals() {
  let buttonsDesign = document.getElementsByClassName('button-design'),
      overlayDesign = document.querySelector('.popup-design'),
      closeDesign = document.querySelector('.popup-design .popup-close'),
      buttonsConsult = document.getElementsByClassName('button-consultation'),
      overlayConsult = document.querySelector('.popup-consultation'),
      closeConsult = document.querySelector('.popup-consultation .popup-close'),
      buttonsGift = document.querySelector('.fixed-gift'),
      overlayGift = document.querySelector('.popup-gift'),
      closeGift = document.querySelector('.popup-gift .popup-close'),
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

  // Проходимся циклом по всем кнопкам "Заказать..."
  for (let i = 0; i < buttonsDesign.length; i++) {
    showModalByButton(buttonsDesign[i],overlayDesign);
  }

  closeModalbyButton(closeDesign, overlayDesign);
  closeModalByOverlay(overlayDesign);

  //-----------------------------------------------------------------
  // Проходимся циклом по всем кнопкам "Подробнее..."
  for (let i = 0; i < buttonsConsult.length; i++) {
    showModalByButton(buttonsConsult[i],overlayConsult);
  }

  closeModalbyButton(closeConsult, overlayConsult);
  closeModalByOverlay(overlayConsult);

  //--------------------------------------------------------------------
  //Нажатие на "Подарок"
  buttonsGift.addEventListener('click', function () {
    showModal(overlayGift);
    buttonsGift.remove();
  });

  closeModalbyButton(closeGift, overlayGift);
  closeModalByOverlay(overlayGift);

  //-----------------------------------------------------------------------
  function showModal(popup) {
    popupOpened = true;
    popup.style.display = 'block';
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
function modals() {
  let buttonsDesign  = document.getElementsByClassName('button-design'),
      overlayDesign  = document.querySelector('.popup-design'),
      closeDesign    = document.querySelector('.popup-design .popup-close'),
      buttonsConsult = document.getElementsByClassName('button-consultation'),
      overlayConsult = document.querySelector('.popup-consultation'),
      closeConsult   = document.querySelector('.popup-consultation .popup-close'),
      buttonGift     = document.querySelector('.fixed-gift'),
      overlayGift    = document.querySelector('.popup-gift'),
      closeGift      = document.querySelector('.popup-gift .popup-close'),
      allButtons     = document.getElementsByTagName('button'),
      clickCount     = 0,
      userTime       = 60000,   // пользователь находится на странице 60 секунд
      popupOpened    = false;

  // Отсчет 60 секунд
  setTimeout(()=>  {
    console.log('Прошло 60 секунд');
    if (!popupOpened) {
      showModal(overlayConsult);
    }
  }, userTime);

  // Проверяем сколько раз нажимали кнопки (кроме кнопок закрыть)
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', ()=>  {
      if (!allButtons[i].classList.contains('popup-close')) {
        clickCount++;
        console.log('clickCount: ', clickCount);
      }
    })
  }

  // Проверяем, что находимся внизу страницы, сколько раз нажимали кнопки и есть ли еще подарок
  window.addEventListener('scroll', ()=>  {
    let buttonGift = document.querySelector('.fixed-gift');
    if ( buttonGift !== null && clickCount === 0 &&
         (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) ) {
      showModal(overlayGift);
      buttonGift.remove();
    }
  });

  // Проходимся циклом по всем кнопкам "Заказать..."
  for (let i = 0; i < buttonsDesign.length; i++) {
    showModalByButton(buttonsDesign[i],overlayDesign);
  }

  closeModalByButton(closeDesign, overlayDesign);
  closeModalByOverlay(overlayDesign);

  //-----------------------------------------------------------------------
  // Проходимся циклом по всем кнопкам "Подробнее..."
  for (let i = 0; i < buttonsConsult.length; i++) {
    showModalByButton(buttonsConsult[i],overlayConsult);
  }

  closeModalByButton(closeConsult, overlayConsult);
  closeModalByOverlay(overlayConsult);

  //----------------------------------------------------------------------
  //Нажатие на "Подарок"
  buttonGift.addEventListener('click', ()=>  {
    showModal(overlayGift);
    buttonGift.remove();
  });

  closeModalByButton(closeGift, overlayGift);
  closeModalByOverlay(overlayGift);

  //-----------------------------------------------------------------------
  function showModal(popup) {
    popupOpened = true;
    popup.style.display = 'block';
    popup.classList.add('animated', 'fadeIn');
    document.body.style.overflow = 'hidden';
  }

  function showModalByButton(button,popup) {
    button.addEventListener('click', ()=>  {
      showModal(popup);
    });
  }

  function closeModalByButton(button, popup) {
    button.addEventListener('click', ()=>  {
      popupOpened = false;
      popup.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  function closeModalByOverlay(overlay) {
    overlay.addEventListener('click', (event)=> {
      if (event.target.closest('.popup-content') === null) {
        popupOpened = false;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
}

module.exports = modals;
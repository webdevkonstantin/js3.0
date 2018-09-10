function popupConsultation() {
  let consult = document.getElementsByClassName('button button-order button-consultation'),
      overlay = document.querySelector('.popup-consultation'),
      close = document.querySelector('.popup-consultation .popup-close');

  // Проходимся циклом по всем кнопкам "Подробнее..."
  for (let i = 0; i < consult.length; i++) {
    consult[i].addEventListener('click', function () {
      showPopupConsultation.call(this);
    });
  }

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', function(event) {
    if (event.target.closest('.popup-content') === null) {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  function showPopupConsultation() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

module.exports = popupConsultation;
function popupDesign() {
  let order = document.getElementsByClassName('button button-order button-design'),
      overlay = document.querySelector('.popup-design'),
      close = document.querySelector('.popup-design .popup-close');

  // Проходимся циклом по всем кнопкам "Заказать..."
  for (let i = 0; i < order.length; i++) {
    order[i].addEventListener('click', function () {
      showModal.call(this);
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

  function showModal() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

module.exports = popupDesign;
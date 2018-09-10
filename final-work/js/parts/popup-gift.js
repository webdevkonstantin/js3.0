function popupGift() {
  let gift = document.querySelector('.fixed-gift'),
      overlay = document.querySelector('.popup-gift'),
      close = document.querySelector('.popup-gift .popup-close');

  gift.addEventListener('click', function () {
    showPopupGift.call(this);
    gift.remove();
  });

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

  function showPopupGift() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

module.exports = popupGift;
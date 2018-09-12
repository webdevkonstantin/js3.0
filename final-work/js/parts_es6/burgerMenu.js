function burgerMenu() {
  let burgerButton = document.getElementsByClassName('burger')[0],
      burgerMenu = document.getElementsByClassName('burger-menu')[0],
      headerMenu = document.getElementsByClassName('header-menu')[0],
      burgerButtonImg = burgerButton.getElementsByTagName('img')[0],
      burgerButtonSpan = burgerButton.getElementsByTagName('span')[0];

  window.addEventListener('resize', function () {
    if (this.innerWidth <= 768) {
      headerMenu.style.display = 'none';
    } else {
      headerMenu.style.display = 'block';
    }
  });

  burgerMenu.style.display = 'none';
  burgerButton.style.display = 'block';
  headerMenu.style.display = 'block';

  document.body.addEventListener('click', function (event) {
    showMenuBurger(event);
  });

  document.body.addEventListener('tap', function (event) {
    showMenuBurger(event);
  });

  function showMenuBurger(event) {
    if (event.target === burgerButton || event.target === burgerButtonImg || event.target === burgerButtonSpan) {
      if (burgerMenu.style.display === 'none') {
        burgerMenu.style.display = 'block';
      } else if (burgerMenu.style.display === 'block') {
        burgerMenu.style.display = 'none';
      }
    } else {
      burgerMenu.style.display = 'none';
    }
  }

}

module.exports = burgerMenu;
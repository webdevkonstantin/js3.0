"use strict";

require("core-js/modules/es6.regexp.replace");

function scroll() {
  var linkNav = document.querySelectorAll('[href^="#"]'),
      //выбираем все ссылки к якорю на странице
  speed = 0.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      //по клику на ссылку
      e.preventDefault();
      var w = window.pageYOffset,
          // производим прокрутку
      hash = this.href.replace(/[^#]*(.*)/, '$1'),
          // к id элемента, к которому нужно перейти
      top = document.querySelector(hash).getBoundingClientRect().top,
          // отступ от окна браузера до id
      start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = top < 0 ? Math.max(w - progress / speed, w + top) : Math.min(w + progress / speed, w + top);
        window.scrollTo(0, r);

        if (r !== w + top) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    }, false);
  }
}

module.exports = scroll;
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(e) {
  var sliderTop = require('../parts/slider_top.js');

  sliderTop();
});
},{"../parts/slider_top.js":2}],2:[function(require,module,exports){
function sliderTop () {
  let slideIndex = 1,
      delay = 3500,
      lock = false,
      run,
      slides = document.getElementsByClassName('main-slider-item');

  showSlides(slideIndex);

  function showSlides (n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides (n) {
    showSlides(slideIndex += n);
  }

  function autoSlide() {
    if (lock === true) {
      lock = false;
      window.clearInterval(run);
    }
    else if (lock === false) {
      lock = true;
      run = setInterval(function () {
        plusSlides (1);
      }, delay);
    }
  }
  autoSlide();

  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function () {
      autoSlide();
    });
  }
}

module.exports = sliderTop;
},{}]},{},[1]);

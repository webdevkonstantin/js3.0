"use strict";

function sliderTop() {
  var slideIndex = 1,
      delay = 5000,
      lock = false,
      run,
      slides = document.getElementsByClassName('main-slider-item');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // автоматическое пролистывание изображений


  function autoSlide() {
    if (lock === true) {
      lock = false;
      window.clearInterval(run);
    } else if (lock === false) {
      lock = true;
      run = setInterval(function () {
        plusSlides(1);
      }, delay);
    }
  }

  autoSlide(); // по нажатию на изображение можем остановить слайдшоу

  for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function () {
      autoSlide();
    });
  }
}

module.exports = sliderTop;
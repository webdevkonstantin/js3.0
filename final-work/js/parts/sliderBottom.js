function sliderBottom() {
  let slideIndex = 1,
      slides = document.getElementsByClassName('feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');

  showSlides(slideIndex);

  function showSlides (n) {
    if (n > slides.length) slideIndex = 1;

    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlide (n) {
    clearInterval(timerID);
    showSlides(slideIndex += n);

    timerID = setInterval(() => {
      showSlides(slideIndex += 1);
    }, 7000);
  }


  prev.addEventListener('click', () => {
    plusSlide(-1);
  });

  next.addEventListener('click', () => {
    plusSlide(1);
  });

  let timerID = setInterval(() => {
    plusSlide(1);
  }, 7000);
}

module.exports = sliderBottom;

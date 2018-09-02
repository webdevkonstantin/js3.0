// Дожидаемся загрузки всей страницы
// window.addEventListener('load', function(e) {
// Выполняется тогда, когда структура HTML, т.е. DOM уже построена
window.addEventListener('DOMContentLoaded', function(e) {
  let tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0];

  function hideTabContent (a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent (1);

  function showTabContent (b) {
    if ( tabContent[b].classList.contains('hide') ) {
      hideTabContent (0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(e) {
    let target = e.target;

    if ( target.className == 'info-header-tab' ) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  });

  //Timer
  let deadline = '2018-09-03';

  function getTimeRemaining(endtime) {
      let time = Date.parse(endtime) - Date.parse(new Date()),
          s = Math.floor( (time/1000) % 60 ),
          m = Math.floor( (time/1000/60) % 60 ),
          h = Math.floor( (time/(1000*60*60)) );

      return {
          'total' : time,
          'hours' : h,
          'minutes' : m,
          'seconds' : s
      };
  }

  function setClock(id, endtime) {
      let timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds');

      function updateClock() {
          let t = getTimeRemaining(endtime);

          (t.hours < 10) ? (hours.innerHTML = `0${t.hours}`) : (hours.innerHTML = t.hours);
          (t.minutes < 10) ? (minutes.innerHTML = `0${t.minutes}`) : (minutes.innerHTML = t.minutes);
          (t.seconds < 10) ? (seconds.innerHTML = `0${t.seconds}`) : (seconds.innerHTML = t.seconds);

          if (t.total <= 0) {
              hours.innerHTML = '00';
              minutes.innerHTML = '00';
              seconds.innerHTML = '00';

              clearInterval(timeInterval);
          }
      }

      let timeInterval = setInterval(updateClock, 1000);
      updateClock();
  }

  setClock('timer', deadline);

  // Scroll to #
  let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
      speed = 0.5;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
  for (let i = 0; i < linkNav.length; i++) {
      linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
          e.preventDefault();
          let w = window.pageYOffset,  // производим прокрутку
              hash = this.href.replace(/[^#]*(.*)/, '$1'),  // к id элемента, к которому нужно перейти
              top = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
              start = null;

          requestAnimationFrame(step);

          function step(time) {
              if (start === null) start = time;
              let progress = time - start,
                  r = (top < 0 ? Math.max(w - progress/speed, w + top) : Math.min(w + progress/speed, w + top));
              window.scrollTo(0, r);
              if (r !== w + top) {
                  requestAnimationFrame(step)
              } else {
                  location.hash = hash  // URL с хэшем
              }
          }
      }, false);
  }

  // Modal
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      readMore = document.getElementsByClassName('description-btn');

  // Проходимся циклом по всем кнопкам "Узнать подробнее" в табах
  for (let i = 0; i < readMore.length; i++) {
      readMore[i].addEventListener('click', function () {
          showModal.call(this);
      });
  }

  // указываем контекст для функции через call
  more.addEventListener('click', function () {
      showModal.call(this);
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    if (more.classList.contains('more-splash')) more.classList.remove('more-splash');

    for (let i = 0; i < readMore.length; i++) {
      if (readMore[i].classList.contains('more-splash')) readMore[i].classList.remove('more-splash');
    }

    document.body.style.overflow = '';
  });

  function showModal() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  // Form
  let message = new Object();

  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";

  let mainForm = document.getElementsByClassName('main-form')[0],
      contactForm = document.getElementById('form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');

  function sendForm(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.appendChild(statusMessage);

      // AJAX
      let request = new XMLHttpRequest();
      let formData = new FormData(form);
      let input = form.getElementsByTagName('input');

      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.readyStatus === 200 && request.status < 300) {
            // Добавляем контент на страницу
            statusMessage.innerHTML = message.success;
          } else {
            statusMessage.innerHTML = message.failure;
          }
        }
      };

      for (let i = 0; i < input.length; i++) {
        // Очищаем поля ввода
        input[i].value = '';
      }
    });
  }

  sendForm(mainForm); // Modal form
  sendForm(contactForm); // Contact form

  // Slider
  let slideIndex = 1;
      slides = document.getElementsByClassName('slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.getElementsByClassName('dot');

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

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('dot-active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active')
  }

  function plusSlides (n) {
    showSlides(slideIndex += n)
  }

  function currentSlide (n) {
    showSlides(slideIndex = n)
  }

  prev.addEventListener('click', function(e) {
    plusSlides(-1);
  });
  next.addEventListener('click', function(e) {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function(e) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i-1]) {
        currentSlide(i)
      }
    }
  });

  //  Calc
  let persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function(e) {
    personsSum = +this.value;
    total = (daysSum + personsSum)*4000;
    if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function(e) {
    daysSum = +this.value;
    total = (daysSum + personsSum)*4000;
    if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function(e) {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
    }
  });

  // Вводим только цифры
  function enterOnlyNumbers (input) {
    input.addEventListener('input', function(e) {
      input.value = input.value.replace(/[^\d]/g, '');
      if (input.value.length > 2) input.value = input.value.slice(0, 2);
    });
  }

  enterOnlyNumbers(persons);
  enterOnlyNumbers(restDays);

});

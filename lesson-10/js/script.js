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

  let deadline = '2018-08-30';

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

          (t.hours < 10) ? (hours.innerHTML = `0 + ${t.hours}`) : (hours.innerHTML = t.hours);
          (t.minutes < 10) ? (minutes.innerHTML = `0 + ${t.minutes}`) : (minutes.innerHTML = t.minutes);
          (t.seconds < 10) ? (seconds.innerHTML = `0 + ${t.seconds}`) : (seconds.innerHTML = t.seconds);

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
});

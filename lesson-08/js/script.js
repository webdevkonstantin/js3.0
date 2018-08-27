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

          (t.hours < 10) ? (hours.innerHTML = '0' + t.hours) : (hours.innerHTML = t.hours);
          (t.minutes < 10) ? (minutes.innerHTML = '0' + t.minutes) : (minutes.innerHTML = t.minutes);
          (t.seconds < 10) ? (seconds.innerHTML = '0' + t.seconds) : (seconds.innerHTML = t.seconds);

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
});

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
            s = Math.floor( (t/1000) % 60 ),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) );

        if (h.length < 2) h = '0' + h;
        if (m.length < 2) m = '0' + m;
        if (s.length < 2) s = '0' + s;

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

            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock(), 1000);
    }

    setClock('timer', deadline);
});

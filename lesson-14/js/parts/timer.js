"use strict";

function timer() {
  var deadline = '2018-09-03';

  function getTimeRemaining(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date()),
        s = Math.floor(time / 1000 % 60),
        m = Math.floor(time / 1000 / 60 % 60),
        h = Math.floor(time / (1000 * 60 * 60));
    return {
      'total': time,
      'hours': h,
      'minutes': m,
      'seconds': s
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);
      t.hours < 10 ? hours.innerHTML = "0".concat(t.hours) : hours.innerHTML = t.hours;
      t.minutes < 10 ? minutes.innerHTML = "0".concat(t.minutes) : minutes.innerHTML = t.minutes;
      t.seconds < 10 ? seconds.innerHTML = "0".concat(t.seconds) : seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        clearInterval(timeInterval);
      }
    }

    var timeInterval = setInterval(updateClock, 1000);
    updateClock();
  }

  setClock('timer', deadline);
}

module.exports = timer;
window.addEventListener('DOMContentLoaded', function(e) {
  var tab = require('../parts/tab.js');
  var timer = require('../parts/timer.js');
  var scroll = require('../parts/scroll.js');
  var modal = require('../parts/modal.js');
  var ajax = require('../parts/ajax.js');
  var slider = require('../parts/slider.js');
  var calc = require('../parts/calc.js');

  tab();
  timer();
  scroll();
  modal();
  ajax();
  slider();
  calc();
});

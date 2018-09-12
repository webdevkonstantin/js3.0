window.addEventListener('DOMContentLoaded', function(e) {
  var sliderTop = require('../parts/sliderTop');
  var sliderBottom = require('../parts/sliderBottom');
  var modals    = require('../parts/modals');
  var sizesHover = require('../parts/sizesHover');
  var blocksLoad = require('../parts/blocksLoad');
  var portfolioFilter = require('../parts/portfolioFilter');
  var calculator = require('../parts/calculator');
  var accordion = require('../parts/accordion');
  var burgerMenu = require('../parts/burgerMenu');
  var forms = require('../parts/forms');

  sliderTop();
  sliderBottom();
  modals();
  sizesHover();
  blocksLoad();
  portfolioFilter();
  calculator();
  accordion();
  burgerMenu();
  forms();
});
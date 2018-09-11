window.addEventListener('DOMContentLoaded', function(e) {
  var sliderTop = require('../parts/sliderTop');
  var modals    = require('../parts/modals');
  var sizesHover = require('../parts/sizesHover');
  var blocksLoad = require('../parts/blocksLoad');
  var portfolioFilter = require('../parts/portfolioFilter');
  var calculator = require('../parts/calculator');

  sliderTop();
  modals();
  sizesHover();
  blocksLoad();
  portfolioFilter();
  calculator();
});
"use strict";

function sizesHover() {
  var sizes = document.getElementsByClassName('sizes-block');

  var _loop = function _loop(i) {
    sizes[i].addEventListener('mouseenter', function () {
      var img = sizes[i].children[0];
      sizes[i].children[1].style.display = 'none';
      sizes[i].children[2].style.display = 'none';
      sizes[i].children[3].style.display = 'none';
      img.src = "img/sizes-" + (i + 1) + "-1.png";
    });
    sizes[i].addEventListener('mouseleave', function () {
      var img = sizes[i].children[0];
      sizes[i].children[1].style.display = 'block';
      sizes[i].children[2].style.display = 'block';
      sizes[i].children[3].style.display = 'block';
      img.src = "img/sizes-" + (i + 1) + ".png";
    }); // Тап в мобильной версии

    sizes[i].addEventListener('tap', function () {
      if (sizes[i].children[1].style.display == 'block') {
        var img = sizes[i].children[0];
        sizes[i].children[1].style.display = 'none';
        sizes[i].children[2].style.display = 'none';
        sizes[i].children[3].style.display = 'none';
        img.src = "img/sizes-" + (i + 1) + "-1.png";
      } else {
        var _img = sizes[i].children[0];
        sizes[i].children[1].style.display = 'block';
        sizes[i].children[2].style.display = 'block';
        sizes[i].children[3].style.display = 'block';
        _img.src = "img/sizes-" + (i + 1) + ".png";
      }
    });
  };

  for (var i = 0; i < sizes.length; i++) {
    _loop(i);
  }
}

module.exports = sizesHover;
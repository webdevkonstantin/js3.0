function sizesHover() {
  let sizes = document.getElementsByClassName('sizes-block');

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('mouseenter', function () {
      let img = sizes[i].children[0];

      sizes[i].children[1].style.display = 'none';
      sizes[i].children[2].style.display = 'none';
      sizes[i].children[3].style.display = 'none';
      img.src = "img/sizes-" + (i + 1) + "-1.png";
    });

    sizes[i].addEventListener('mouseleave', function () {
      let img = sizes[i].children[0];

      sizes[i].children[1].style.display = 'block';
      sizes[i].children[2].style.display = 'block';
      sizes[i].children[3].style.display = 'block';
      img.src = "img/sizes-" + (i + 1) + ".png";
    });
  }
}

module.exports = sizesHover;
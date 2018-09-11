function sizesHover() {
  let sizes = document.getElementsByClassName('sizes-block');

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('mouseenter', ()=> {
      let img = sizes[i].children[0];

      sizes[i].children[1].style.display = 'none';
      sizes[i].children[2].style.display = 'none';
      sizes[i].children[3].style.display = 'none';
      img.src = "img/sizes-" + (i + 1) + "-1.png";
    });

    sizes[i].addEventListener('mouseleave', ()=> {
      let img = sizes[i].children[0];

      sizes[i].children[1].style.display = 'block';
      sizes[i].children[2].style.display = 'block';
      sizes[i].children[3].style.display = 'block';
      img.src = "img/sizes-" + (i + 1) + ".png";
    });

    // Тап в мобильной версии
    sizes[i].addEventListener('tap', ()=> {
      if (sizes[i].children[1].style.display == 'block') {
        let img = sizes[i].children[0];
        sizes[i].children[1].style.display = 'none';
        sizes[i].children[2].style.display = 'none';
        sizes[i].children[3].style.display = 'none';
        img.src = "img/sizes-" + (i + 1) + "-1.png";
      } else {
        let _img = sizes[i].children[0];
        sizes[i].children[1].style.display = 'block';
        sizes[i].children[2].style.display = 'block';
        sizes[i].children[3].style.display = 'block';
        _img.src = "img/sizes-" + (i + 1) + ".png";
      }
    });
  }
}

module.exports = sizesHover;
function accordion() {
  let accordion = document.getElementById('accordion'),
      underline = accordion.getElementsByTagName('span'),
      heading = accordion.getElementsByClassName('accordion-heading'),
      block = accordion.getElementsByClassName('accordion-block'),
      otherBlock = 0;

  for (let i = 0; i < block.length; i++) {
    block[i].classList.add('animated');
    block[i].classList.add('ui-accordion-content-active');
    if (i !== 0) {
      block[i].style.display = 'none';
    } else {
      heading[i].classList.add('ui-accordion-header-active');
    }
  }

  accordion.addEventListener('click', (e)=> {
    block[otherBlock].classList.add('fade-out');
    setTimeout(function () {
      for (let k = 0; k < underline.length; k++) {
        if (e.target === underline[k]) {
          if (heading[k].classList.contains('ui-accordion-header-active')) {
            clearBlock();
            break;
          }
          clearBlock();
          heading[k].classList.add('ui-accordion-header-active');
          block[k].classList.remove('fade-out');
          block[k].classList.add('fade-in');
          block[k].style.display = 'block';
        }
      }
    }, 200);
  });

  function clearBlock() {
    for (let j = 0; j < block.length; j++) {
      heading[j].classList.remove('ui-accordion-header-active');
      block[j].style.display = 'none';
    }
  }
}

module.exports = accordion;
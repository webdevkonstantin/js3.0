(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/blocksLoad":2,"../parts/calculator":3,"../parts/modals":4,"../parts/portfolioFilter":5,"../parts/sizesHover":6,"../parts/sliderTop":7}],2:[function(require,module,exports){
function blocksLoad() {
  let btn = document.querySelector('.button-styles'),
      blocks = document.getElementsByClassName('styles-block');

  btn.addEventListener('click', function (e) {
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].parentElement.classList.contains('hidden-lg')) {
        blocks[i].parentElement.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
        blocks[i].parentElement.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
      }

      btn.classList.add('animated', 'fadeOut');

      // Удаляем кнопку через 0.5 сек
      setTimeout(function methodName() {
        btn.remove();
      }, 500);
    }
  });
}

module.exports = blocksLoad;
},{}],3:[function(require,module,exports){
function calculator() {
  let selectSize = document.getElementById('size'),
      selectMaterial = document.getElementById('material'),
      selectOptions = document.getElementById('options'),
      inputPromocode = document.querySelector('.promocode'),
      totalValue = document.querySelector('.calc-price'),
      promocode = 'IWANTPOPART',
      discount = false,
      sizeSum = 0,
      materialSum = 0,
      optionsSum = 0,
      total = 0;

  selectSize.addEventListener('change', function () {
    sizeSum = +this.value;
    getTotalPrice();
  });

  selectMaterial.addEventListener('change', function () {
    materialSum = +this.value;
    getTotalPrice();
  });

  selectOptions.addEventListener('change', function () {
    optionsSum = +this.value;
    getTotalPrice();
  });

  inputPromocode.addEventListener('input', function () {
    discount = this.value.trim().toUpperCase() === promocode;
    getTotalPrice();
  });

  function getTotalPrice() {
    if (sizeSum !== 0 && materialSum !== 0) {
      total = sizeSum * materialSum + optionsSum;

      if (discount) total = total * 0.7;

      total = Math.round(total);
      totalValue.innerHTML = "<h3>" + total + "р.</h3>";
    } else if (sizeSum === 0 && materialSum !== 0) {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины';
    } else if (sizeSum !== 0 && materialSum === 0) {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать материал картины';
    } else {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    }
  }
}

module.exports = calculator;
},{}],4:[function(require,module,exports){
function modals() {
  let buttonsDesign  = document.getElementsByClassName('button-design'),
      overlayDesign  = document.querySelector('.popup-design'),
      closeDesign    = document.querySelector('.popup-design .popup-close'),
      buttonsConsult = document.getElementsByClassName('button-consultation'),
      overlayConsult = document.querySelector('.popup-consultation'),
      closeConsult   = document.querySelector('.popup-consultation .popup-close'),
      buttonGift     = document.querySelector('.fixed-gift'),
      overlayGift    = document.querySelector('.popup-gift'),
      closeGift      = document.querySelector('.popup-gift .popup-close'),
      allButtons     = document.getElementsByTagName('button'),
      clickCount     = 0,
      userTime       = 60000,   // пользователь находится на странице 60 секунд
      popupOpened    = false;

  // Отсчет 60 секунд
  setTimeout(()=>  {
    console.log('Прошло 60 секунд');
    if (!popupOpened) {
      showModal(overlayConsult);
    }
  }, userTime);

  // Проверяем сколько раз нажимали кнопки (кроме кнопок закрыть)
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', ()=>  {
      if (!allButtons[i].classList.contains('popup-close')) {
        clickCount++;
        console.log('clickCount: ', clickCount);
      }
    })
  }

  // Проверяем, что находимся внизу страницы, сколько раз нажимали кнопки и есть ли еще подарок
  window.addEventListener('scroll', ()=>  {
    let buttonGift = document.querySelector('.fixed-gift');
    if ( buttonGift !== null && clickCount === 0 &&
         (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) ) {
      showModal(overlayGift);
      buttonGift.remove();
    }
  });

  // Проходимся циклом по всем кнопкам "Заказать..."
  for (let i = 0; i < buttonsDesign.length; i++) {
    showModalByButton(buttonsDesign[i],overlayDesign);
  }

  closeModalByButton(closeDesign, overlayDesign);
  closeModalByOverlay(overlayDesign);

  //-----------------------------------------------------------------------
  // Проходимся циклом по всем кнопкам "Подробнее..."
  for (let i = 0; i < buttonsConsult.length; i++) {
    showModalByButton(buttonsConsult[i],overlayConsult);
  }

  closeModalByButton(closeConsult, overlayConsult);
  closeModalByOverlay(overlayConsult);

  //----------------------------------------------------------------------
  //Нажатие на "Подарок"
  buttonGift.addEventListener('click', ()=>  {
    showModal(overlayGift);
    buttonGift.remove();
  });

  closeModalByButton(closeGift, overlayGift);
  closeModalByOverlay(overlayGift);

  //-----------------------------------------------------------------------
  function showModal(popup) {
    popupOpened = true;
    popup.style.display = 'block';
    popup.classList.add('animated', 'fadeIn');
    document.body.style.overflow = 'hidden';
  }

  function showModalByButton(button,popup) {
    button.addEventListener('click', ()=>  {
      showModal(popup);
    });
  }

  function closeModalByButton(button, popup) {
    button.addEventListener('click', ()=>  {
      popupOpened = false;
      popup.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  function closeModalByOverlay(overlay) {
    overlay.addEventListener('click', (event)=> {
      if (event.target.closest('.popup-content') === null) {
        popupOpened = false;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
}

module.exports = modals;
},{}],5:[function(require,module,exports){
function portfolioFilter() {

  let portfolioMenu  = document.querySelector('ul.portfolio-menu'),
      worksAll       = document.getElementsByClassName('portfolio-block all'),
      worksNo        = document.querySelector('.portfolio-no');

  // Пробегаемся циклом по всем пунктам меню
  for (let i = 0; i < portfolioMenu.children.length; i++) {
    portfolioMenu.children[i].addEventListener('click', ()=> {
      let btnClassName = portfolioMenu.children[i].className.split(" "),
          worksCount = 0;

      // Проходимся циклом по всем работам портфолио
      for (let j = 0; j < worksAll.length; j++) {
        if (worksAll[j].classList.contains(btnClassName[0])) {
          worksAll[j].style.display = 'block';
          worksCount++;
        } else {
          worksAll[j].style.display = 'none';
        }
      }

      // Если выбрана вкладка с работами, то отображаются работы,
      // если их нет, тогда отображаем надпись
      worksCount ? worksNo.style.display = 'none': worksNo.style.display = 'block';

      // Удаляем у всех пунктов меню класс active
      for (let k = 0; k < portfolioMenu.children.length; k++) {
        portfolioMenu.children[k].classList.remove('active');
      }

      // Добавляем нажатому класс active
      portfolioMenu.children[i].classList.add('active');
    });
  }
}

module.exports = portfolioFilter;

},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
function sliderTop () {
  let slideIndex = 1,
      delay = 5000,
      lock = false,
      run,
      slides = document.getElementsByClassName('main-slider-item');

  showSlides(slideIndex);

  function showSlides (n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides (n) {
    showSlides(slideIndex += n);
  }

  // автоматическое пролистывание изображений
  function autoSlide() {
    if (lock === true) {
      lock = false;
      window.clearInterval(run);
    }
    else if (lock === false) {
      lock = true;
      run = setInterval(()=>  {
        plusSlides (1);
      }, delay);
    }
  }
  autoSlide();

  // по нажатию на изображение можем остановить слайдшоу
  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', ()=> {
      autoSlide();
    });
  }
}

module.exports = sliderTop;
},{}]},{},[1]);

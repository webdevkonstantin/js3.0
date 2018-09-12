(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/accordion":2,"../parts/blocksLoad":3,"../parts/burgerMenu":4,"../parts/calculator":5,"../parts/forms":6,"../parts/modals":7,"../parts/portfolioFilter":8,"../parts/sizesHover":9,"../parts/sliderBottom":10,"../parts/sliderTop":11}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function blocksLoad() {
  let btn = document.querySelector('.button-styles'),
      blocks = document.getElementsByClassName('styles-block');

  btn.addEventListener('click', function (e) {
    btn.remove();
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].parentElement.classList.contains('hidden-lg')) {
        blocks[i].parentElement.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
        blocks[i].parentElement.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
      }
    }
  });
}

module.exports = blocksLoad;
},{}],4:[function(require,module,exports){
function burgerMenu() {
  let burgerButton = document.getElementsByClassName('burger')[0],
      burgerMenu = document.getElementsByClassName('burger-menu')[0],
      headerMenu = document.getElementsByClassName('header-menu')[0],
      burgerButtonImg = burgerButton.getElementsByTagName('img')[0],
      burgerButtonSpan = burgerButton.getElementsByTagName('span')[0];

  window.addEventListener('resize', function () {
    if (this.innerWidth <= 768) {
      headerMenu.style.display = 'none';
    } else {
      headerMenu.style.display = 'block';
    }
  });

  burgerMenu.style.display = 'none';
  burgerButton.style.display = 'block';
  headerMenu.style.display = 'block';

  document.body.addEventListener('click', function (event) {
    showMenuBurger(event);
  });

  document.body.addEventListener('tap', function (event) {
    showMenuBurger(event);
  });

  function showMenuBurger(event) {
    if (event.target === burgerButton || event.target === burgerButtonImg || event.target === burgerButtonSpan) {
      if (burgerMenu.style.display === 'none') {
        burgerMenu.style.display = 'block';
      } else if (burgerMenu.style.display === 'block') {
        burgerMenu.style.display = 'none';
      }
    } else {
      burgerMenu.style.display = 'none';
    }
  }

}

module.exports = burgerMenu;
},{}],5:[function(require,module,exports){
function calculator() {
  let selectSize = document.getElementById('size'),
      selectMaterial = document.getElementById('material'),
      selectOptions = document.getElementById('options'),
      inputPromocode = document.querySelector('.promocode'),
      totalValue = document.querySelector('.calc-price'),
      promocode = document.getElementById('promocode').innerText,
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
},{}],6:[function(require,module,exports){
function forms () {

	function formsEnable(index, styleText) {
		let message = {
		  		loading: 'Идет отправка сообщения...',
		  		success: 'Спасибо! Мы с Вами свяжемся!',
		  		failure: 'Ошибка! Что-то пошло не так...'
				},
				form = document.getElementsByTagName('form')[index],
				input = form.getElementsByTagName('input'),
				textarea = form.getElementsByTagName('textarea'),
				statusMsg = document.createElement('div');

		statusMsg.classList.add('status');
		statusMsg.style.cssText = styleText;

		for (let i = 0; i < input.length; i++) {
			input[i].addEventListener('input', function () {
				if (this.name == 'name' || this.name == 'message') {
					return this.value = this.value.replace(/[A-Za-z]/g, '');
				} else if (this.name == 'phone') {
					this.value = this.value.replace(/[A-Za-z]/g, '');
					this.value = this.value.replace(/[а-яА-ЯёЁ]/g, '');
				}
			});

		  input[i].addEventListener('focus', function () {
		    if (this.name === 'phone' && this.value.includes('+') === false) {
		        this.value = '+7 ';
		    }
		  });

		  input[i].addEventListener('keypress', function () {
		    if (this.name === 'phone') {
					this;
					let old = 0;
					let curLen = this.value.length;

					if (curLen < old) {
					    old--;
					    return;
					}

					if (curLen == 3) this.value += "(";
					if (curLen == 7) this.value += ")-";
					if (curLen == 12) this.value += "-";
					if (curLen == 15) this.value += "-";
					if (curLen > 17) this.value = this.value.substring(0, this.value.length - 1);

					old++;
		    }
		  });
		}

		form.addEventListener('submit', function (event) {
		  event.preventDefault();

		  // AJAX
		  let request = new XMLHttpRequest(),
		  		formData = new FormData(form);

		  request.open('POST', 'server.php');
		  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		  request.send(formData);

		  request.onreadystatechange = function () {
		    if (request.readyState < 4) {
		      form.appendChild(statusMsg);
		      statusMsg.innerHTML = message.loading;
		      statusMsg.style.display = 'block';
		    } else if (request.readyState === 4) {
		      if (request.status == 200 && request.status < 300) {
		        for (let j = 0; j < form.children.length; j++) {
		            form.children[j].style.display = 'none';
		        }
		        statusMsg.innerHTML = message.success;
		        form.appendChild(statusMsg);
		        statusMsg.style.display = 'block';
		        // Добавляем контент на страницу
		      } else {
		        for (let k = 0; k < form.children.length; k++) {
		            form.children[k].style.display = 'none';
		        }
		        statusMsg.innerHTML = message.failure;
		        form.appendChild(statusMsg);
		        statusMsg.style.display = 'block';                             
		      }
		    }
		  };

			for (let l = 0; l < input.length; l++) {
				input[l].value = '';
				//Очищаем поля ввода
			}

			for (let t = 0; t < textarea.length; t++) {
				textarea[t].value = '';
				//Очищаем поля ввода
			}

		});
	}

  formsEnable(1, "text-align: center; \ font-weight: bold; \ font-size: 60px;");
 	formsEnable(2, "text-align: center; \ font-weight: bold; \ font-size: 30px;");
  formsEnable(3, "text-align: center; \ font-weight: bold; \ font-size: 30px;");
}

module.exports = forms;
},{}],7:[function(require,module,exports){
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
      if (!allButtons[i].classList.contains('popup-close') &&
          !allButtons[i].classList.contains('main-next-btn') &&
          !allButtons[i].classList.contains('main-prev-btn')) {
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
},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
function sliderBottom() {
  let slideIndex = 1,
      slides = document.getElementsByClassName('feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');

  showSlides(slideIndex);

  function showSlides (n) {
    if (n > slides.length) slideIndex = 1;

    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlide (n) {
    clearInterval(timerID);
    showSlides(slideIndex += n);

    timerID = setInterval(() => {
      showSlides(slideIndex += 1);
    }, 7000);
  }


  prev.addEventListener('click', () => {
    plusSlide(-1);
  });

  next.addEventListener('click', () => {
    plusSlide(1);
  });

  let timerID = setInterval(() => {
    plusSlide(1);
  }, 7000);
}

module.exports = sliderBottom;

},{}],11:[function(require,module,exports){
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

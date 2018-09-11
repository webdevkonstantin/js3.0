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

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
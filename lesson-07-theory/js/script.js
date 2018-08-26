let btns = document.getElementsByTagName('button'),
    btnBlock = document.querySelector('.btn-block');

// Делигируем события с родителя на его потомков
btnBlock.addEventListener('click', function(e) {
  // if (e.target && e.target.tagName == 'BUTTON') {
  // if (e.target && e.target.nodeName == 'BUTTON') {
  // if (e.target && e.target.className == 'first') {
  if (e.target && e.target.matches('button.first')) {
    console.log('Hello!');
  }
});

// Ошибка: т.к. btns - это псевдомассив
// btns.addEventListener('click', function(e) {
//   console.log('Hello!');
// });

let btn = document.querySelector('.btn');

function myAnimation() {
  console.log('click');
  let elem = document.querySelector('.box'),
      pos = 0,
      id = setInterval(frame, 10);

  function frame() {
    console.log('frame');
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);

// let timerId = setTimeout(log, 2000);
//
// function log() {
//   console.log('Hello');
//   temerId = setTimeout(log, 2000);
// }

// let timerId = setTimeout(func, delay);
//
// clearTimeout(timerId);

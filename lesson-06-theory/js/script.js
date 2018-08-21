let btn = document.getElementsByTagName('button');
let overlay = document.querySelector('.overlay');
let link = document.getElementsByTagName('a');

link[0].addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn[0].addEventListener('click', function () {
    alert('Мы нажали первую кнопку!)');
});

overlay.addEventListener('click', function () {
    // alert('Мы опять нажали первую кнопку!)');
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn[1].addEventListener('mouseenter', function () {
    console.log('Мы навели мышку на вторую кнопку)');
    console.log('Произошло событие: ' + event.type);
});

btn[1].addEventListener('mouseleave', function () {
    console.log('Мы убрали мышку со второй кнопки)');
    console.log('Произошло событие: ' + event.type);
});

btn[2].addEventListener('click', function (event) {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

// btn[0].onclick = function () {
//   alert('Мы нажали первую кнопку!)');
// };
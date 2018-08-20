let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart');
    oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);
console.log(oneHeart); // удобно использовать когда на странице 1 элемент с таким классом

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'orange';
circle[2].style.backgroundColor = 'green';

let div = document.createElement('div');
let text = document.createTextNode('Тутаньки...');

div.classList.add('black');
document.body.appendChild(div);
document.body.insertBefore(div, circle[0]); // если не указан 2-ой аргумент, то сработает как appendChild
document.body.removeChild(circle[1]);
document.body.replaceChild(heart[0], circle[0]); // заменяет элемент, указанный во втором параметре элементом, указанным в первом

div.innerHTML = 'text';
div.textContent = 'Hello People!'; // Безопасный метод
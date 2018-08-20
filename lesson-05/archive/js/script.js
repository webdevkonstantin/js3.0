let menuItems = document.querySelectorAll('.menu-item'),
    li3 = menuItems[1],
    li4 = menuItems[3],
    li5 = document.createElement('li'), // Создаем 5-тый пункт меню
    ul = document.querySelector('.menu'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'), // блок с рекламой
    promptBox = document.getElementById('prompt');

li5.textContent = 'Пятый пункт'; // Добавляем в 5-тый пункт текст
li5.setAttribute('class','menu-item'); // Добавляем класс

ul.removeChild(li3); // Удаляем третий пункт
ul.insertBefore(li3, li4); // Вставляем его перед 4-тым
ul.appendChild(li5); // Добавляем 5-тый пункт

document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat'; // Меняем картинку заднего фона

let titleArr = title.innerHTML.trim().split(' '); // Обрезаем заголовок по краям от пробелов и создаем массив слов
titleArr.splice(3,0,'подлинную'); // 4 словом вставляем "подлинную"

let newTitle = titleArr.join(' '); //Объединяем массив в строку
title.innerHTML = newTitle;

adv.remove(); // Удаляем рекламу
let answer = prompt("Как вы относитесь к технике Apple?","");
promptBox.innerHTML = answer; // ответ добавляем в блок prompt

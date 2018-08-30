var input = document.createElement('input');
input.setAttribute('checked', 'checked');

console.log(input.checked);

// let f1 = document.forms.myform;
// let f2 = document.getElementById("myform");
// let f3 = document.body.children[0];
// let f4 = document.body.firstChild;
// let f5 = document.forms[0];

// console.log(f1);
// console.log(f2);
// console.log(f3);
// console.log(f4);
// console.log(f5);

// let elem = document.getElementById('div');
// let w1 = parseInt(elem.style.width);
// let w2 = parseInt(getComputedStyle(elem).width);
// let w3 = elem.offsetWidth;
// let w4 = elem.clientWidth;
//
// console.log(w1);
// console.log(w2);
// console.log(w3);
// console.log(w4);

// let i1 = document.querySelector("#outer #inner");
// // let i2 = document.getElementById("#outer").getElementById("#inner");
// let i3 = document.querySelector("#outer").children[0];
// // let i4 = document.getElementById("#outer").firstChild;
//
// console.log(i1);
// // console.log(i2);
// console.log(i3);
// // console.log(i4);

// div.insertAdjacentHTML('afterBegin', '<p>Привет</p>');
// div.insertAdjacentHTML('beforeEnd', '<p>Пока</p>');
//
// let i = document.getElementById('div');
//
// console.log(i.children);

// let i = document.getElementById('hi').parentNode.parentNode.tagName;
//
// console.log(i);

// // 1. Создаем объект запроса
// let request = new XMLHttpRequest();
//
// // 2. Настройка запроса
// // request.open(method);
// request.open("GET", 'server.php', true, login, password);
// // 3. Отправка запроса
// request.send();
//
// request.status; // 200, 404
// request.statusText;
// request.responseText;
// request.readyState;

// let options = {
//   width: 1366,
//   height: 768,
//   background: 'red',
//   font: {
//     size: '16px',
//     color: '#fff'
//   }
// };
//
// let jsonStr = JSON.stringify(options); // stringify превращает объект в JSON формат
// console.log(JSON.parse(jsonStr)); // parse превращает JSON формат в объект

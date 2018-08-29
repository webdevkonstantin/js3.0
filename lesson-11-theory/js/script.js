// 1. Создаем объект запроса
let request = new XMLHttpRequest();

// 2. Настройка запроса
// request.open(method);
request.open("GET", 'server.php', true, login, password);
// 3. Отправка запроса
request.send();

request.status // 200, 404
request.statusText
request.responseText
request.readyState

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

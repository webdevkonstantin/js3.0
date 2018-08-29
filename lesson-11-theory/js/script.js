// 1. Создаем объект запроса
let request = new XMLHttpRequest();

// request.open(method);
request.open("GET", 'server.php');

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
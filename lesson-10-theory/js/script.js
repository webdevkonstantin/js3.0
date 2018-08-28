class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 15);

console.log(square.calcArea());

// установка переменных по умолчанию
// function calcOrDouble (number, basis = 2) {
//   // незадукоментирование использование переменной по умолчанию
//   // basis = basis || 2;
//   console.log(number * basis);
// }
//
// calcOrDouble(3,5);
// calcOrDouble(6);

// let btn = document.getElementsByTagName('button')[0];
//
// btn.addEventListener('click', function(e) {
//   let show = () => {
//     console.log(this);
//   }
//   show();
// });

// let obj = {
//   number: 5,
//   sayNumber: function () {
//     // стрелочная функция берет контекст того,
//     // что ее окружвет, т.е. sayNumber
//     let say = () => {
//       console.log(this);
//     }
//     console.log(this);
//     say();
//   }
// }
// obj.sayNumber();

// Стрелочная функция. Всегда анонимна. Мы не можем задать ей никакого имени.
// мы можем ее присвоить переменной
// Мы не сможем управлять обработчиками событий, если это необходимо
// И не сможем запускать ее внутри себя, т.е. делать рекурсию
// Она не имеет своего контекста вызова
// Внутри стрелочных функций тот же this, что и снаружи
// let func = () => {
//   console.log(this);
// }
// func();

// При использовании let или const в цикле, для каждой итерации создается своя переменная
// function createArray () {
//   let items = [];
//
//   for (let i = 0; i < 10; i++) {
//     let item = function () {
//       console.log(i);
//     }
//
//     items.push(item);
//   }
//
//   return items;
// }
//
// let arr = createArray();
//
// arr[1]();
// arr[3]();
// arr[7]();

// function createArray () {
//   var items = [];
//
//   for (var i = 0; i < 10; i++) {
//     var item = function () {
//       console.log(i);
//     }
//
//     items.push(item);
//   }
//
//   return items;
// }
//
// var arr = createArray();
//
// arr[1]();
// arr[3]();
// arr[7]();

// let name = "Ivan",
//     age = 30,
//     mail = 'ex@gmail.com';
//
// document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес:  ${mail}`);

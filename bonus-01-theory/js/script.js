let present = 1;

function shoot(arrow) {
  console.log('вы сделали выстрел...');
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
    }, 3000)
  });

  return promise
}

function win() {
  console.log('Вы победили!');
  (present == 1) ? buyPresent() : giveMoney();
}

function buyPresent() {
  console.log('Вам купили подарок!');
}

function giveMoney() {
  console.log('Вам дали денег!');
}

function loose() {
  console.log('Вы проиграли');
}

shoot({})
  .then(mark => console.log('Вы попали в цель!'))
  .then(win)
  .catch(loose);

// let present = 1;
//
// function shoot(arrow, headshot, fail) {
//   console.log('вы сделали выстрел...');
//
//   setTimeout(function () {
//     Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
//   }, 3000)
// }
//
// function win() {
//   console.log('Вы победили!');
//   (present == 1) ? buyPresent() : giveMoney();
// }
//
// function buyPresent() {
//   console.log('Вам купили подарок!');
// }
//
// function giveMoney() {
//   console.log('Вам дали денег!');
// }
//
// function loose() {
//   console.log('Вы проиграли');
// }
//
// shoot({},
//   function (mark) {
//     console.log('Вы попали в цель!');
//     win(mark, buyPresent, giveMoney);
//   },
//   function (miss) {
//     console.error(miss);
//     loose();
//   });

// let func1 = function (param, func2) {
//   func2(function (param, func3){
//     func3(function (param, func4){
//       func4(function (param, func5){
//         alert(param)
//       })
//     })
//   })
// };
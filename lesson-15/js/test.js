// Функция sum должна возвращать тип данных true. Проверить её на это.
function sum(a, b) {
  return a + b > 10;
}
sum(2,2);

// Переменная num должна быть равна 5. Проверить на соответствие.
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};

var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a) {
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    newArr[i]=Math.sqrt(a[i]);
  }
  return newArr;
};
var result = each(arr2, myFunc);
// console.log(each(arr2, myFunc));

let assert = require('chai').assert;

// Функция sum должна возвращать тип данных true
describe("sum", function () {
  it("Получаем результат сложения 2х чисел 2 и 9 и он больше 10 = true", function () {
    assert.equal(sum(2,9), true)
  })
});

// Переменная num должна быть равна 5
describe("num", function () {
  it("Получаем число из ассоциативного массива = 5", function () {
    assert.equal(num, 5)
  })
});

describe("typeof result", function () {
  it("Получаем тип данных результата функции each = array", function () {
    assert.typeOf(result, 'array')
  })
});

describe("result", function () {
  it("Получаем результат, полученный с помощью функции each = [8,7,6,5,4]", function () {
    assert.sameOrderedMembers(result, [8,7,6,5,4])
  })
});

describe("lengthOf result", function () {
  it("Получаем длину массива, полученного с помощью функции each = 5", function () {
    assert.lengthOf(result, 5)
  })
});
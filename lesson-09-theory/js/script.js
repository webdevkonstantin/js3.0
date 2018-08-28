let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function () {
   console.log(this);
   this.style.backgroundColor = 'red';
});

// У стрелочной функции контектом будет window/undefined, т.е. он будет потерян
// btn.addEventListener('click', () => {
//     console.log(this);
// });

// 1. Простой вызов функции - контекстом будет window или undefined, если строгий режим ("use strict")
// 2. Метод - this = объект
// 3. Конструктор (т.е. созданный через new) - this = созданный объект
// 4. Указание конкретного контекста - call, apply, bind (Ручное присвоение this любой функции)

// Указание конкретного контекста - call, apply, bind
/*
let user = {
    name: 'John',
};

function sayName(surname, age) {
    console.log(this);
    console.log(this.name + ' ' + surname + ' ' + age + ' years old');
}

// с помощью методов call и apply можно привязать функцию к какому-либо контексту
console.log(sayName.call(user, 'Smith', '23')); // в методе call параметры передаем через запятую
console.log(sayName.apply(user, ['Snow', '45'])); // параметры передаем в виде массива

// Метод bind создает новую функцию, связанную с определенным контекстом
function count(number) {
    return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));
*/

//----------------------------------------------------------------------------------------------------------------------
// Контекст методов объекта
/*
let obj = {
    a: 20,
    b: 30,
    sum: function () {
        console.log(this); // здесь контекстом будет obj, т.е. объект

        function shout() {
            console.log(this); // здесь контекст уже потерян и будет window, т.к. функция вызвана внутри функции, а не является методом объекта
        }
        shout();
    }
};

obj.sum();
*/

//----------------------------------------------------------------------------------------------------------------------
// Контекст функции
/*
"use strict"; // если включен строгий режим, то вместо window контекстом функции будет undefined
function showThis(a,b) {
    console.log(this);

    function sum() {
        console.log(this);
        //return this.a + this.b // вместо контекста нужно использовать замыкание, т.е. использовать внешние переменные
        return a + b;
    }
    console.log(sum());
}
showThis(4,5);
showThis(5,5);
*/

//----------------------------------------------------------------------------------------------------------------------
// Строгий режим.
// В строгом режиме всегда нужно указывать объявление переменной через var, let или const
/*
"use strict";
let num = 4;
var num2 = 5;
const num3 = 6;
console.log('num: ', num);
console.log('num2: ', num2);
console.log('num3: ', num3);

num4 = 7; // Будет ошибка
console.log('num4: ', num4);
*/

//----------------------------------------------------------------------------------------------------------------------
// Конструктор
/*
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        alert('Hello ' + this.name);
    }
}

User.prototype.exit = function () {
    alert(" Пользователь " + this.name + " вышел")
};

let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);

console.log('ivan: ', ivan);
console.log('alex: ', alex);

ivan.hello();
alex.hello();

alex.exit();
*/
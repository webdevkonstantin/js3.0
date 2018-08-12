console.log(4/0);

var und;
console.log(und);

var obj = {
	name: "John",
	age: 25,
	isMarried: false
};

console.log(obj);
console.log(obj.name);

var arr = ['plum', 'orange', 'apple'];

// alert("Hello!")
// confirm("message"?"Ку": "DOMString")
var answer = +prompt("Вам есть 18?", "18");

console.log(typeof(answer));
console.log(typeof(null));
console.log(typeof(arr));

var incr = 10;
var decr = 10;

// incr++;
// decr--;

console.log(incr++);
console.log(decr--);

console.log(5%3);

console.log("10" === 10); // сравнение типов
console.log("10" == 10); // сравнение значений

var isChecked = true;
var isClosed = true;

console.log(isClosed && isChecked); // логическое И
console.log(!isClosed && isChecked); // Инверсия первого значения и логическое И
console.log(isClosed || !isChecked); // логическое ИЛИ
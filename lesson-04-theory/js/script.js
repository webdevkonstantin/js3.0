let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log('john: ', john);
console.log('john.armor: ', john.armor);
console.log('soldier: ', soldier);

// let fourth = [1, 3, 7, 15, 20, 5];
//
// // сортирует числа
// function sortNumbers(a,b) {
//     return a - b;
// }
//
// let l = fourth.sort(sortNumbers);
// console.log('l: ', l);

// let third = ["14", "54", "55", "48", "97", "78"];
// let j = third.join(",");
// let k = third.sort(); // сортирует только по алфавиту
//
// console.log('j: ', j);
// console.log('k: ', k);

// let second = [];
// let i = prompt("","");
//
// second = i.split(",");
// console.log('second: ', second);

// let arr = [1,2,3,4,5,6,7];
// let first = [1, 'second', true, 4, 'last'];

// console.log('arr: ', arr);
// console.log('arr.pop(): ', arr.pop()); // pop удаляет последний элемент масссива и возвращает его
// console.log('arr: ', arr);
// console.log('arr.push(8): ', arr.push(8)); // push добавляет элемент в конец массива и возвращает длину массива
// console.log('arr: ', arr);
// console.log('arr.shift(): ', arr.shift()); // shift удаляет первый элемент масссива и возвращает его
// console.log('arr: ', arr);
// console.log('arr.unshift(0): ', arr.unshift(0)); // unshift добавляет элемент в начало масссива и возвращает длину массива
// console.log('arr: ', arr);

// for ( let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }

// arr[99] = 99;
// console.log('arr.length: ', arr.length); // вернет 100. т.е. lenght возвращает последний индекс массива + 1
//
// arr.forEach(function (item, i, arr) {
//     console.log(i + ": " + item + ", (array: " + arr + ")");
// });
//
// first.forEach(function (item, i, arr) {
//     console.log(i + ": " + item + ", (array: " + arr + ")");
// });

// Создание объекта
// let options = {
//     name: "test",
//     width: 1024,
//     height: 1024
// };
// options.bool = true;
// options.colors = {
//     border: 'black',
//     background: 'red'
// };
//
// delete options.bool;
// console.log('options: ', options);
//
// for ( let key in options ) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
//
// console.log('options: ', Object.keys(options).length); // количество свойств объекта
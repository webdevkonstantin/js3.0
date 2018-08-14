let str = 'урок-3-был слишком легким',
    arr = [20, 30, 1, "Человек", 2, 3];

// Метод charAt возвращает символ, стоящий на указанной позиции в строке
// Метод substr вырезает подстроку с 1-ой позиции и до конца строки
str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

// Чтобы функция replace заменила все совпадения, следует воспользоваться так называемым глобальным поиском,
// т.к. по умолчанию она заменит только первый найденный элемент
str = str.replace(/-/g, ' ');
console.log('str: ', str);

// Метод indexOf осуществляет поиск подстроки в строке и вернет позицию первого совпадения
// Метод slice возвращает подстроку из строки,
// вторым параметром указываем номер символа, на котором закончится вырезание,
// в нашем случае это 2-ой символ с конца строки
let subStr = str.slice(str.indexOf('легким'),-2) + 'о';
console.log('subStr: ', subStr);

// Выводим в консоль квадратный корень из суммы кубов элементов массива arr
let result = 0;
for ( let i = 0; i < arr.length; i++ ) {
    if ( typeof arr[i] === "number" ) {
        // Суммируем элементы массива, возведенные в 3 степень
        result += Math.pow(arr[i], 3);
    }
}
console.log('Квадратный корень из суммы кубов: ', Math.sqrt(result));

function sliceText(text) {
    let size = 50;

    if ((typeof text) === 'string' && (typeof text) !== null && text != '') {
        let trimText = text.trim();
        if ( trimText.length > size ) {
            console.log(trimText.slice(0, size) + ' ...');
        } else {
            console.log(trimText);
        }
    } else {
        alert("Вы ввели не строку или ничего не ввели!")
    }
}
sliceText(prompt("Введите длинный текст", "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне."));
sliceText(23423423);
sliceText('');
sliceText(null);
sliceText(undefined);

var num = 33721;
var numStr = num.toString().split(''); // преобразуем число в строку, а затем в массив
var multiplicationResult = 1;
var powResult = 0;
var powResultStr = '';
var firstTwoNum = '';

// проходим по всем элементам массива и умножаем их в цикле
for (var i = 0; i < numStr.length; i++){
    multiplicationResult *= parseInt(numStr[i]);
}
console.log("Результат умножения цифр числа " + num + " :", multiplicationResult);

// возводим получившееся число в 3 степень
powResult = Math.pow(multiplicationResult, 3);
console.log("Результат возведения числа " + multiplicationResult + " в 3 степень :", powResult);

// преобразуем полученное число в строку, а затем в массив
powResultStr = powResult.toString().split('');
// в цикле записываем первые две цифры

for (var j = 0; j < 2; j++){
    firstTwoNum += powResultStr[j];
}
console.log("Первые 2 цифры числа " + powResult + " :", firstTwoNum);
function getFriendlyNumbers(start, end) {
    let friendlyArr = [];
    if (start > 0 && end > 0 && start <= end && typeof start === 'number' && typeof end === 'number' && start !== null && end !== null && (start % 1 === 0) && (end % 1 === 0)) {
        for ( let i = start; i <= end; i++ ) {
            let num1 = getDivisorsSum(i);
            let num2 = getDivisorsSum(num1);

            if ( num1 !== num2 && num1 < num2 && num2 > start && isFriendly(num1, num2) ) {
                 let nums = [num1, num2];

                if ( !inArray(friendlyArr, nums) ) {
                    friendlyArr.push(nums);
                }
            }
        }
    } else return false;

    return friendlyArr;
}
//console.log('getFriendlyNumbers(start, end): ', getFriendlyNumbers(1, 100000));

// Ищем в arr1 массив arr2 
// перебираем все массивы из arr1 и сравниваем с arr2 путем преобразования их в строку
function inArray(arr1, arr2) {
    let inArray = false;
    for ( let i = 0; i < arr1.length; i++ ) {
        if ( JSON.stringify(arr1[i]) === JSON.stringify(arr2)  ) inArray = true;
    }

    return inArray
}

// Проверяем равна ли сумма делителей первого числа второму числу
// и наобарот равна ли сумма делителей второго числа первому числу
function isFriendly(num1, num2) {
    return getDivisorsSum(num1) === num2 && getDivisorsSum(num2) === num1
}

// Получаем сумму делителей числа
function getDivisorsSum(num) {
    return getSum(getDivisors(num))
}

// Получаем массив делителей числа num
function getDivisors(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if ( num % i === 0 ) arr.push(i);
    }

    return arr;
}

// Получаем сумму чисел из массива
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }

    return sum;
}

module.exports = {
    firstName: 'Konstantin',
    secondName: 'Stasenko',
    task: getFriendlyNumbers
};

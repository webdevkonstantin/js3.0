let budget = prompt("Ваш бюджет на месяц?", 30000);
let dailyBudget = parseInt(budget)/30;
let shopName = prompt("Название вашего магазина?", "Пряничная");
let time = 19;
let mainList = {
    budget : budget,
    shopName : shopName,
    shopGoods : [],
    employers : {},
    open : true
};

for (let i=0; i<5; i++) {
    let answer = prompt("Какой тип товаров будем продавать?");

    if ( (typeof answer) === 'string' && (typeof answer) !== null && answer != '' && answer.length < 50) {
        console.log("Товар добавлен!");
        mainList.shopGoods[i] = answer;
    } else {
        i--;
        console.log("Товар не был добавлен! Введите товар заново!");
    }
}

// let i=0;
// while ( i < 5 ) {
//     console.log("Цикл while!");
//     let answer = prompt("Какой тип товаров будем продавать?");
//
//     if ( (typeof answer) === 'string' && (typeof answer) !== null && answer != '' && answer.length < 50) {
//         console.log("Товар добавлен!");
//         mainList.shopGoods[i] = answer;
//     } else {
//         i--;
//         console.log("Товар не был добавлен! Введите товар заново!");
//     }
//     i++;
// }

// let i=0;
// do {
//     let answer = prompt("Какой тип товаров будем продавать?");
//     console.log("Цикл do while!");
//     if ( (typeof answer) === 'string' && (typeof answer) !== null && answer != '' && answer.length < 50) {
//         console.log("Товар добавлен!");
//         mainList.shopGoods[i] = answer;
//     } else {
//         i--;
//         console.log("Товар не был добавлен! Введите товар заново!");
//     }
//     i++;
// }
// while ( i < 5 );

if ( time < 0 ) {
    console.log("Такого не может быть!")
} else if ( time > 8 && time < 20 ) {
    console.log("Время работать!")
    } else if ( time < 24 ) {
        console.log("Уже слишком поздно!")
        } else {
            console.log("В сутках только 24 часа!")
        }

console.log(mainList);

alert('Ваш бюджет на 1 день составит: ' + dailyBudget.toFixed(2));

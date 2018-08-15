let budget,
    shopName,
    time,
    price;

function start() {
    while (isNaN(budget) || budget == '' || budget == null) {
        budget = prompt("Ваш бюджет на месяц?");
    }
    shopName = prompt("Название вашего магазина?", "Пряничная").toUpperCase();
    time = 19;
    price = 1900;
}
start();


let mainList = {
    budget : budget,
    shopName : shopName,
    shopGoods : [],
    employers : {},
    open : true,
    discount : true
};

function chooseGoods() {
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
}
chooseGoods();

function workTime(time) {
    if ( time < 0 ) {
        console.log("Такого не может быть!");
    } else if ( time > 8 && time < 20 ) {
        console.log("Время работать!");
    } else if ( time < 24 ) {
        console.log("Уже слишком поздно!");
    } else {
        console.log("В сутках только 24 часа!");
    }
}
workTime(18);

// Функция расчета дневного бюджета
function getDailyBudget(budget) {
    alert('Ваш бюджет на 1 день составит: ' + (budget/30).toFixed(2));
}
// getDailyBudget(budget);

// Функция дисконтной системы
function getDiscount(price) {
    if ( mainList.discount ) price = price*0.8;
    console.log('Итоговая стоимость товара со скидкой: ', price);
}
// getDiscount(price);

// Функция найма сотрудников
function recruitEmployer(){
    for (let i=0; i<4; i++) {
        let employer = prompt("Имя нового сотрудника?");

        if ( (typeof employer) === 'string' && (typeof employer) !== null && employer != '' && employer.length < 50) {
            console.log("Новый сотрудник!");
            mainList.employers[i] = employer;
        } else {
            console.log("Не указано имя сотрудника!");
        }
    }
}
// recruitEmployer();

console.log(mainList);
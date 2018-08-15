let budget,
    shopName,
    time,
    price;

function start() {
    while (isNaN(budget) || budget == '' || budget == null) {
        budget = prompt("Ваш бюджет на месяц?", "");
    }
    shopName = prompt("Название вашего магазина?", "Киберкот").toUpperCase();
    time = 19;
    price = 1900;
}
start();

let mainList = {
    budget : budget,
    shopName : shopName,
    shopGoods : [],
    employers : {},
    open : false,
    discount : true,
    shopItems: [],
    chooseGoods : function chooseGoods() {
        for (let i=0; i<5; i++) {
            let answer = prompt("Какой тип товаров будем продавать?", "");

            if ( (typeof answer) === 'string' && (typeof answer) !== null && answer != '' && answer.length < 50) {
                console.log("Добавлен тип товара: ", answer);
                mainList.shopGoods[i] = answer.trim();
            } else {
                i--;
                console.log("Тип товара не был добавлен! Введите еще раз!");
            }
        }
        return mainList.shopGoods;
    },
    workTime : function workTime(time) {
        if ( time < 0 ) {
            console.log("Такого не может быть!");
        } else if ( time > 8 && time < 20 ) {
            mainList.open = true;
            console.log("Время работать!");
        } else if ( time < 24 ) {
            mainList.open = false;
            console.log("Уже слишком поздно!");
        } else {
            mainList.open = false;
            console.log("В сутках только 24 часа!");
        }
        return mainList.open;
    },
    dayBudget : function dayBudget() {
        alert('Ваш бюджет на 1 день составит: ' + (mainList.budget/30).toFixed(2));
    },
    makeDiscount : function makeDiscount() {
        if ( mainList.discount ) price = price*0.8;
        console.log('Итоговая стоимость товара со скидкой: ', price);
    },
    hireEmployers : function hireEmployers() {
        for (let i=0; i<4; i++) {
            let employer = prompt("Имя нового сотрудника?","");
            if ( (typeof employer) === 'string' && (typeof employer) !== null && employer != '' && employer.length < 50) {
                console.log("Новый сотрудник!");
                mainList.employers[i] = employer;
            } else {
                console.log("Не указано имя сотрудника!");
            }
        }
        return mainList.employers;
    },
    chooseShopItem: function chooseShopItem() {
        let items = prompt("Перечислите через запятую товары", "");
        mainList.shopItems = items.split(",");
        mainList.shopItems.push(prompt("Подождите, еще  ", ""));
        mainList.shopItems.sort();

        // Создаем блок с заголовком
        var title = document.createElement('h3');
        title.innerHTML = "У нас вы можете купить: ";
        document.body.appendChild(title);

        // Создаем нумерованный список, чтобы он начинался с 1,
        // но можно и через инкремент индекса i++
        var itemsList = document.createElement('ol');
        document.body.appendChild(itemsList);

        // Создаем элементы списка и добавляем в них название товаров
        mainList.shopItems.forEach(function (item, i) {
            let child = document.createElement('li');
            child.innerHTML = item.trim();
            itemsList.appendChild(child);
        });

        // решение как в условии
        // document.write("У нас вы можете купить:" + "<br>");
        // mainList.shopItems.forEach(function (item, i) {
        //     i++;
        //     document.write(i + ". " + item + "<br>");
        // });
        return mainList.shopItems;
    }
};

console.log('mainList: ', mainList);
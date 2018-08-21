let openBtn         = document.getElementById('open-btn'),
    nameValue       = document.getElementsByClassName('name-value')[0],
    budgetValue     = document.getElementsByClassName('budget-value')[0],
    goodsValue      = document.getElementsByClassName('goods-value')[0],
    itemsValue      = document.getElementsByClassName('items-value')[0],
    employersValue  = document.getElementsByClassName('employers-value')[0],
    discountValue   = document.getElementsByClassName('discount-value')[0],
    isopenValue     = document.getElementsByClassName('isopen-value')[0],

    goodsItem      = document.getElementsByClassName('goods-item'),
    goodsBtn        = document.getElementsByTagName('button')[1],
    budgetBtn       = document.getElementsByTagName('button')[2],
    employersBtn    = document.getElementsByTagName('button')[3],

    chooseItem      = document.querySelector('.choose-item'),
    timeValue       = document.querySelector('.time-value'),
    countBudgetValue= document.querySelector('.count-budget-value'),
    employers       = document.querySelectorAll('.hire-employers-item');

 let budget,
     price;

openBtn.addEventListener('click', () => {
    while (isNaN(budget) || budget === '' || budget == null) {
        budget = prompt("Ваш бюджет на месяц?", "");
    }

    budgetValue.textContent = budget + ' рублей';
    nameValue.textContent = prompt("Название вашего магазина?", "Киберкот").toUpperCase();
});

goodsBtn.addEventListener('click', () => {
    for (let i = 0; i < goodsItem.length; i++) {
        let answer = goodsItem[i].value;

        if ( (typeof answer) === 'string' && (typeof answer) !== null  && answer.length < 50) {
            console.log("Добавлена категория товара: ", answer);
            mainList.shopGoods[i] = answer.trim();
            goodsValue.textContent = mainList.shopGoods;
        } else {
            i--;
            console.log("Тип товара не был добавлен! Введите еще раз!");
        }
    }
    return mainList.shopGoods;
});

// вместо change используем input - отображает изменения сразу при изменении
chooseItem.addEventListener('input', () => {
    let items = chooseItem.value;

    if(isNaN(items) && items != '') {
        mainList.shopItems = items.split(", ");
        mainList.shopItems.sort();

        itemsValue.textContent = mainList.shopItems;
    }

});

timeValue.addEventListener('change', function () {
    let time = timeValue.value;
    console.log('time: ', time);
    console.log('typeof time: ', typeof time);

    if ( time < 0 ) {
        mainList.open = false;
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
});

let mainList = {
    budget : budgetValue,
    shopName : nameValue,
    // budget : 0,
    // shopName : '',
    shopGoods : [],
    employers : {},
    open : false,
    discount : true,
    shopItems: [],
    // chooseGoods : function () {},
    // workTime : function (time) {},
    dayBudget : function () {
        alert('Ваш бюджет на 1 день составит: ' + (mainList.budget/30).toFixed(2));
    },
    makeDiscount : function () {
        if ( mainList.discount ) price = price*0.8;
        console.log('Итоговая стоимость товара со скидкой: ', price);
    },
    hireEmployers : function () {
        for (let i=0; i<4; i++) {
            let employer = prompt("Имя нового сотрудника?","");
            if ( (typeof employer) === 'string' && (typeof employer) !== null && employer !== '' && employer.length < 50) {
                console.log("Новый сотрудник!");
                mainList.employers[i] = employer;
            } else {
                console.log("Не указано имя сотрудника!");
            }
        }
        return mainList.employers;
    },
    // chooseShopItem: function () {},
    showMainList : function () {
        console.log('Наш магазин включает в себя: ');
        for ( let key in mainList ) {
            console.log('Свойство ' + key + ' имеет значение ' + mainList[key]);
        }
    }
};

console.log('mainList: ', mainList);
// mainList.addEventListener('change', function () {
//
// });

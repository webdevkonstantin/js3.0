let openBtn         = document.getElementById('open-btn'),
    nameValue       = document.getElementsByClassName('name-value')[0],
    budgetValue     = document.getElementsByClassName('budget-value')[0],
    budgetField     = document.getElementById('budget'),
    goodsValue      = document.getElementsByClassName('goods-value')[0],
    itemsValue      = document.getElementsByClassName('items-value')[0],
    employersValue  = document.getElementsByClassName('employers-value')[0],
    discountValue   = document.getElementsByClassName('discount-value')[0],
    isopenValue     = document.getElementsByClassName('isopen-value')[0],

    goodsItem       = document.getElementsByClassName('goods-item'),
    goodsBtn        = document.getElementsByTagName('button')[1],
    budgetBtn       = document.getElementsByTagName('button')[2],
    employersBtn    = document.getElementsByTagName('button')[3],
    discountBtn     = document.getElementsByTagName('button')[4],

    chooseItem      = document.querySelector('.choose-item'),
    timeValue       = document.querySelector('.time-value'),
    countBudgetValue= document.querySelector('.count-budget-value'),
    employers       = document.querySelectorAll('.hire-employers-item'),
    priceValue      = document.querySelector('.price-item-value');

 let budget;

 // Запрет ручного ввода в input “Расчет дневного бюджета”
budgetField.disabled = true;

// Делаем все кнопки и ввод времени по умолчанию недоступными
close();
timeValue.disabled = true;

// нажатие кнопки "Открыть магазин"
openBtn.addEventListener('click', () => {
    while (isNaN(budget) || budget === '' || budget == null) {
        budget = prompt("Ваш бюджет на месяц?", "70000");
    }
    budgetValue.textContent = budget + ' рублей';
    nameValue.textContent = prompt("Название вашего магазина?", "Пиченька").toUpperCase();
    mainList.shopName = nameValue.value;
    timeValue.disabled = false;
    timeValue.value = formatTime(new Date());
    changeTime();
    open();
});



// Проверяем ввод значений в поля ввода категории товаров
// и проверяем открыт ли магазин
for (let i = 0; i < goodsItem.length; i++) {
    goodsItem[i].addEventListener('input', function () {
        if (mainList.open) {
            if (goodsItem[i].value.trim()) goodsBtn.disabled = false;
            else {
                let allgoods = '';
                for (let i = 0; i < goodsItem.length; i++) {
                    allgoods += goodsItem[i].value.trim();
                }
                console.log('allgoods: ', allgoods);
                if (allgoods == '') goodsBtn.disabled = true;
            }
        } else {
            goodsItem[i].value = '';
            alert('Магазин закрыт!')
        }
    });
}

// нажатие кнопки "Утвердить"
goodsBtn.addEventListener('click', () => {
    for (let i = 0; i < goodsItem.length; i++) {
        let good = goodsItem[i].value;

        if ( (typeof good) === 'string' && (typeof good) !== null  && good.length < 50) {
            console.log("Добавлена категория товара: ", good);
            mainList.shopGoods[i] = good.trim();
            goodsValue.textContent = mainList.shopGoods;
            goodsItem[i].value = '';
        } else {
            i--;
            console.log("Тип товара не был добавлен! Введите еще раз!");
        }
    }
});

// ввод продуктов через запятую
// вместо change используем input - отображает изменения сразу при изменении
chooseItem.addEventListener('input', () => {
    let items = chooseItem.value;

    if (mainList.open) {
        if(isNaN(items) && items != '') {
            mainList.shopItems = items.split(", ");
            mainList.shopItems.sort();

            itemsValue.textContent = mainList.shopItems;
        }
    } else {
        chooseItem.value = '';
        alert('Магазин закрыт!')
    }
});

// Ввод в поле "Сколько сейчас времени?"
timeValue.addEventListener('input', () => {
    changeTime();
});

// нажатие кнопки "Рассчитать"
budgetBtn.addEventListener('click', () => {
    if (budget) countBudgetValue.value = (budget / 30).toFixed(2) + ' рублей';
});

// Проверяем ввод значений в поля ввода имена сотрудников
// и проверяем открыт ли магазин
for ( let i = 0; i < employers.length; i++) {
    employers[i].addEventListener('input', function () {
        if (mainList.open) {
            if (employers[i].value.trim()) employersBtn.disabled = false;
            else {
                let allemployers = '';
                for (let i = 0; i < employers.length; i++) {
                    allemployers += employers[i].value.trim();
                }
                console.log('allemployers: ', allemployers);
                if (allemployers == '') employersBtn.disabled = true;
            }
        }
        else {
            employers[i].value = '';
            alert('Магазин закрыт!')
        }
    });
}

// нажатие кнопки "Нанять"
employersBtn.addEventListener('click', () => {
    for ( let i = 0; i < employers.length; i++) {
        let employerName = employers[i].value;
        mainList.employers[i] = employerName;

        employersValue.textContent += mainList.employers[i] + ', ';
    }
    // employersValue.textContent = ''+mainList.employers;
});

// Ввод стоимости покупки
priceValue.addEventListener('input', function () {
    let price = priceValue.value.trim();

    if (mainList.open) {
        if(!isNaN(price) && price != '') {
            discountBtn.disabled = false;
        } else {
            discountBtn.disabled = true;
        }
    } else {
        priceValue.value = '';
        alert('Магазин закрыт!')
    }
});

// нажатие кнопки "Получить скидку"
discountBtn.addEventListener('click', () => {
    let discount = 0,
        price = priceValue.value;

    if (price > 0 && price !== '') {
        mainList.discount = true;

        if (price > 0 && price <= 2000) {
            discount = 5;
            price = price * 0.95;
        } else if (price > 2000 && price <= 4000) {
            discount = 10;
            price = price * 0.9;
        } else if (price > 4000 && price <= 6000) {
            discount = 15;
            price = price * 0.85;
        } else if (price > 6000 && price <= 8000) {
            discount = 20;
            price = price * 0.8;
        } else if (price > 8000 && price <= 10000) {
            discount = 25;
            price = price * 0.75;
        } else if (price > 10000) {
            discount = 30;
            price = price * 0.7;
        }
    } else {
        mainList.discount = false;
    }

    if (mainList.discount) {
        discountValue.style.color = 'white';
        discountValue.style.backgroundColor = 'green';
        discountValue.innerHTML = 'Скидка: ' + discount + '%.<br>Стоимость со скидкой: ' + price.toFixed(2);
    } else {
        discountValue.style.backgroundColor = 'red';
        discountValue.innerHTML = '';
    }
});

let mainList = {
    budget : budget,
    shopName : nameValue,
    shopGoods : [],
    employers : {},
    open : false,
    discount : false,
    shopItems: []
};

function open() {
    mainList.open = true;
    chooseItem.disabled = false;
    budgetBtn.disabled = false;
    goodsDisabled(false);
    employersDisabled(false);
    priceValue.disabled = false;
    console.log(timeValue.value);
}

function close() {
    chooseItem.disabled = true;
    budgetBtn.disabled = true;
    goodsDisabled(true);
    goodsBtn.disabled = true;
    employersDisabled(true);
    employersBtn.disabled = true;
    priceValue.disabled = true;
    discountBtn.disabled = true;
    discountValue.style.backgroundColor = 'red';
}

function changeTime() {
    let time = timeValue.value,
        timeArr = time.split(':');

    console.log('time: ', time);

    if ( +timeArr[0] >= 8 && +timeArr[0] < 20 ) {
        mainList.open = true;
        console.log("Время работать!");
    } else if ( +timeArr[0] >= 20 && +timeArr[0] <= 23) {
        mainList.open = false;
        console.log("Уже слишком поздно!");
    } else {
        mainList.open = false;
        console.log("Магазин еще не открылся!");
    }

    if (mainList.open === true) {
        discountValue.textContent === ''?discountValue.style.backgroundColor = 'red':discountValue.style.backgroundColor = 'green';
        isopenValue.style.backgroundColor = 'green';
        isopenValue.style.color = 'white';
        isopenValue.innerHTML = 'Магазин открыт';
        open();
    } else {
        isopenValue.style.backgroundColor = 'red';
        isopenValue.style.color = 'white';
        isopenValue.innerHTML = 'Магазин закрыт';
        close();
    }
}

function formatTime(date) {
    let hh = date.getHours(),
        mm = date.getMinutes();

    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;

    return hh + ':' + mm;
}

function goodsDisabled(disabled) {
    for (let i = 0; i < goodsItem.length; i++) {
        goodsItem[i].disabled = disabled;
    }
}

function employersDisabled(disabled) {
    for (let i = 0; i < employers.length; i++) {
        employers[i].disabled = disabled;
    }
}
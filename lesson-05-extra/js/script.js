var now = new Date(),
    div = document.createElement('div');
    div.textContent = formatDate(now) + ' ' + getWeekDay(now),
    firstDate = document.createElement('input'),
    firstDateLbl = document.createElement('label'),
    secondDate = document.createElement('input'),
    secondDateLbl = document.createElement('label'),
    resultDays = document.createElement('input'),
    resultDaysLbl = document.createElement('label'),
    btn = document.createElement('button');

firstDate.setAttribute("type", "date");
secondDate.setAttribute("type", "date");
resultDays.setAttribute("type", "text");

firstDateLbl.innerHTML = '<br>Укажите первую дату: ';
firstDateLbl.appendChild(firstDate);

secondDateLbl.innerHTML = '<br>Укажите вторую дату: ';
secondDateLbl.appendChild(secondDate);

resultDaysLbl.innerHTML = '<br>Разница между датами в днях: ';
resultDaysLbl.appendChild(resultDays);

btn.textContent = 'Вычислить';

document.body.appendChild(div);
document.body.appendChild(firstDateLbl);
document.body.appendChild(secondDateLbl);
document.body.appendChild(resultDaysLbl);
document.body.appendChild(btn);

btn.addEventListener("click", function(){
    resultDays.value = calculateDays(firstDate.value,secondDate.value);
});

function formatDate(date) {
    let hh = date.getHours(), 
        mm = date.getMinutes(), 
        ss = date.getSeconds(),
        DD = date.getDate(),
        MM = date.getMonth() + 1,
        YYYY = date.getFullYear();

    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    if (DD < 10) DD = '0' + DD;
    if (MM < 10) MM = '0' + MM;

    return hh + ':' + mm + ':' + ss + ' ' + DD + '.' + MM + '.' + YYYY;
}

function getWeekDay(date) {
    let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    return week[date.getDay()];
}

function calculateDays(day1, day2) {
    let msDay1 = Date.parse(day1),
        msDay2 = Date.parse(day2),
        result = 0,
        s = 0,
        m = 0,
        h = 0,
        d = 0;

    result = (msDay1 > msDay2 ? msDay1 - msDay2 : msDay2 - msDay1);
    s = result/1000;
    m = s/60;
    h = m/60;
    d = h/24;

    console.log('msDay1: ', msDay1);
    console.log('msDay2: ', msDay2);
    console.log('result: ', result);
    console.log('d: ', d);

    return d;
}
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let parent = document.getElementById('week');
let date = new Date(); // текущая дата
let arr = ['9345243', '735445', '3257546', '8094563', '1094573', '7933941', '392513'];
// let currentDay = week[date.getDay()]; // текущий день недели

// console.log('Сегодня: ', currentDay);
parent.style.marginLeft = '0'; // убираем отступы для ul
parent.style.paddingLeft = '0'; // убираем отступы для ul

for (let i = 0; i < week.length; i++) {
	let child = document.createElement('li');
	child.style.listStyleType = 'none'; // убираем маркеры для li
	// if ( week[i] === 'Суббота' || week[i] === 'Воскресенье' ) {
	if ( i === 0 || i === 6 ) {
		child.innerHTML = '<strong>' + week[i] + '</strong>';
	} else if ( i === date.getDay() ) {
		child.innerHTML = '<em>' + week[i] + '</em>';
	}
	else child.innerHTML = week[i];
	parent.appendChild(child);
}

for (let i = 0; i < arr.length; i++) {
    if ( arr[i][0] === '3' || arr[i][0] === '7' )
        console.log(arr[i]);
}
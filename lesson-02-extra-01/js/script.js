let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let parent = document.getElementById('week');
let date = new Date(); // текущая дата
// let currentDay = week[date.getDay()]; // текущий день недели

for (let i = 0; i < week.length; i++) {
	let child = document.createElement('li');
	// if ( week[i] === 'Суббота' || week[i] === 'Воскресенье' ) {
	if ( i === 5 || i === 6 ) {
		child.innerHTML = '<strong>' + week[i] + '</strong>';
	} else if (i === date.getDay()-1) {
		child.innerHTML = '<em>' + week[i] + '</em>';
	}
	else child.innerHTML = week[i];
	parent.appendChild(child);
}
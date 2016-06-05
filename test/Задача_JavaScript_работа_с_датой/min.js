// Определяем день недели
var today = new Date(); // сегодняшняя дата
var weekday = new Array(7);
weekday[0] = "Воскресенье";
weekday[1] = "Понедельник";
weekday[2] = "Вторник";
weekday[3] = "Среда";
weekday[4] = "Четверг";
weekday[5] = "Пятница";
weekday[6] = "Суббота";
var today = weekday[today.getDay()];
document.getElementById("todayId").innerHTML = today;


function timeShow() {
	var today = new Date();
	var hours = today.getHours();
	var mins = today.getMinutes();
	var secs = today.getSeconds();
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();
	
	if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (day < 10) day = "0" + day;
	if (month < 10) month = "0" + month;
	document.getElementById("digital_time").innerHTML = hours + ":" + mins  + ":" + secs;
	document.getElementById("dataId").innerHTML = day +"."+ month+"."+year;

}

setInterval("timeShow()", 100);

// Вычисляем даты до основных праздников 

var yesterDay = new Date(2016, 03, 12); // дата до которой нужно вычеслить остаток
var today = yesterDay - today;
var correctDay = Math.floor(today/1000/60/60/24);

function calculateDay(colId, yesterDay) {
	var today = new Date(); // сегодняшняя дата
	var today = yesterDay - today;
	var correctDay = Math.floor(today/1000/60/60/24);
	if(correctDay >= 0) {;
		colId.innerHTML = correctDay + 1;
	}  else colId.innerHTML = "Этот день настал";
}

// значения передоваемые функции
calculateDay(document.getElementById("col1"), new Date(2017, 00, 01)); //Новогодние каникулы	1-5 января
calculateDay(document.getElementById("col2"), new Date(2017, 00, 07)); //Рождество Христово 7 января
calculateDay(document.getElementById("col3"), new Date(2017, 01, 23)); //День защитника Отчества	23 февраля
calculateDay(document.getElementById("col4"), new Date(2017, 02, 08)); //Международный женский день 8 мара	
calculateDay(document.getElementById("col5"), new Date(2016, 04, 01)); //Праздник Весны и Труда	1 мая	
calculateDay(document.getElementById("col6"), new Date(2016, 04, 09)); //День победы	9 мая
calculateDay(document.getElementById("col7"), new Date(2016, 05, 12)); //День России	Дней 12 инюня	
calculateDay(document.getElementById("col8"), new Date(2016, 08, 01)); //День знаний	Дней 1 сентября	
calculateDay(document.getElementById("col9"), new Date(2016, 10, 04)); //День народного единства 4 ноября	

document.getElementById("subscribe_one").checked = false;
document.getElementById("subscribe_two").checked = false;
document.getElementById("subscribe_three").checked = false;
document.getElementById("subscribe_four").checked = false;
document.getElementById("subscribe_five").checked = false;
document.getElementById("subscribe_six").checked = false;
var overlay = document.getElementById("overlay"); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
var modal_form = document.getElementById("modal_form");// мoдaльные oкно



/* Первый блок */
var elem_one = document.getElementById("link_one");
elem_one.onclick = function() {
	document.getElementById("subscribe_one").checked = true;
	var background = document.getElementById("description_courses_one");
	background.setAttribute("class", "description-courses-text-new");
	setTimeout(coursesBlockOne, 1000);
}

/* Второй блок */
var elem_two = document.getElementById("block_two");
elem_two.onclick = function() {
	document.getElementById("subscribe_two").checked = true;
	var background = document.getElementById("description_courses_two");
	background.setAttribute("class", "description-courses-text-new");
	setTimeout(coursesBlockTwo, 1000);
}

/* Третий блок */
var elem_three = document.getElementById("block_three");
elem_three.onclick = function() {
	document.getElementById("subscribe_three").checked = true;
	var background = document.getElementById("description_courses_three");
	background.setAttribute("class", "description-courses-text-new");
	setTimeout(coursesBlockThree, 1000);
}

/* Четвертый блок */
var elem_three = document.getElementById("block_four");
elem_three.onclick = function() {
	document.getElementById("subscribe_four").checked = true;
	var background = document.getElementById("description_courses_four");
	background.setAttribute("class", "description-courses-text-new");
	setTimeout(coursesBlockFour, 1000);
}

/* Пятый блок */
var elem_three = document.getElementById("block_five");
elem_three.onclick = function() {
	document.getElementById("subscribe_five").checked = true;
	var background = document.getElementById("description_courses_five");
	background.setAttribute("class", "description-courses-text-new");
	setTimeout(coursesBlockFive, 1000);
}

/* Шестой блок */
var elem_three = document.getElementById("block_six");
elem_three.onclick = function() {
	document.getElementById("subscribe_six").checked = true;
	var background = document.getElementById("description_courses_six");
	background.setAttribute("class", "description-courses-text-new");
	setTimeout(coursesBlockSix, 1000);
}

function coursesBlockOne() {
	document.getElementById("block_one").style.display = "none";
	look();
}

function coursesBlockTwo() {
	document.getElementById("block_two").style.display = "none";
	look();
}

function coursesBlockThree() {
	document.getElementById("block_three").style.display = "none";
	look();
}

function coursesBlockFour() {
	document.getElementById("block_four").style.display = "none";
	look();
}

function coursesBlockFive() {
	document.getElementById("block_five").style.display = "none";
	look();
}

function coursesBlockSix() {
	document.getElementById("block_six").style.display = "none";
	look();
}

function look() {
	if((document.getElementById("block_one").style.display == "none") && (document.getElementById("block_two").style.display == "none") 
		&& (document.getElementById("block_three").style.display == "none") && (document.getElementById("block_four").style.display == "none") 
		&& (document.getElementById("block_five").style.display == "none") && (document.getElementById("block_six").style.display == "none"))  {
		overlay.style.display = "block"; 
		modal_form.style.display = "block";
	}
}

/* Модальное окно */
var modal_close = document.getElementById("modal_close");
modal_close.onclick = function() {
	overlay.style.display = "none"; 
	modal_form.style.display = "none";
}

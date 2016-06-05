/*По нажатию на кнопку button_1 пользователь получает одно из трех сообщений: "Кликни-ка еще разик", 
"Эта кнопка — самая замечательная кнопка в мире", "Ну чего раскликался тут?!".*/ 
window.onload = function() {
	var button = document.getElementById("button");
	var values = ["Кликни-ка еще разик", "Клевая кнопка", "Ну чего раскликался тут?!"];
	var count = 0;

	button.onclick = function() {
		if (count == 0) {
			this.value = values[0];
			count++;
		} else if (count == 1) {
			this.value = values[1];
			count++;
		} else if (count == 2) {
			this.value = values[2];
			count++;
		} else {
			alert("Кнопка сломалась");
		} 
	};
}

// По нажатию на ссылку вывести пользователю сообщение: "И куда это вы собрались?"
var elem = document.getElementById("click");
elem.onclick = function() {
	alert("Вы нажали на ссылку");
}


// По нажатию на картинку image_1 изображение должно случайным образом меняться на одно из пяти
function randomFiveImages(img) {
	var List = ["images/five.jpg", "images/four.jpg", "images/one.jpg",  "images/three.jpg",  "images/two.jpg", "images/zero.jpg"];
	img.src = List[Math.floor(Math.random()*List.length)];
}

// Написать функцию, которая по нажатию на кнопку генерировала бы случайную 
// цифру от 0 до 5 в сообщении: "Ваша случайная цифра: n" 
function randomNumber() {
	document.getElementById("numberId").innerHTML = Math.floor(Math.random() * 6);
}

// При наведении курсора мыши на картинку изображение должно меняться на другое
window.onload = init;
function init() {
	var image = document.getElementById("zero");
	image.onmouseover = showAnswer;
	image.onmouseout = reblur;
}

function showAnswer() {
	var image = document.getElementById("zero");
	image.src = "images/zero.jpg";
}

function reblur() {
	var image = document.getElementById("zero");
	image.src = "images/zeroblur.jpg";
}

// При наведении курсора мыши на кнопку должно выдаваться некоторое сообщение

window.onload = textMouseOver;

function textMouseOver() {
	var buttonText = document.getElementById("textMouseOver");
	buttonText.onmouseover = showAnswer;
	buttonText.onmouseout =  hideAnswer;
}

function showAnswer() {
	document.getElementById("mouseOverButton").style.display = "none";
}

function hideAnswer() {
	document.getElementById("mouseOverButton").style.display = "block";
}

// При наведении курсора мыши на какой-либо элемент страницы меняется цвет фона документа 
var elemBody = document.getElementById("bodyBackground");

elemBody.onmouseover= function() {
	document.body.style.backgroundColor="#336699";
	elemBody.value = "Вернуть фон наза";
}

elemBody.onclick  = function() {
	document.body.style.backgroundColor="#5b5652";
	elemBody.value = "Сменить фон";
}

// При получении текстовым полем text_1 фокуса ввода в строке состояния должно выводиться сообщение: «Вы ввели не число
input.onblur = function() {
  if (isNaN(this.value)) { // введено не число
    // показать ошибку
    this.className = "error";
    error.innerHTML = 'Вы ввели не число. Исправьте, пожалуйста.'
  }
};

input.onfocus = function() {
  if (this.className == 'error') { // сбросить состояние "ошибка", если оно есть
    this.className = "";
    error.innerHTML = "";
  }
};

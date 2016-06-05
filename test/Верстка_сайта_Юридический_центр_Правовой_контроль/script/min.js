function validate_form() {
	if(document.getElementById('name').value=="") {
		document.getElementById('name').value='Введите имя';
	}
	if(document.getElementById('tel').value=="") {
		document.getElementById('tel').value='Введите телефон';
	}
	if(document.getElementById('tel').value=="") {
		document.getElementById('tel').value='Введите телефон';
	}
	if(document.getElementById('question').value=="") {
		document.getElementById('question').value='Введите вопрос';
	}
	if(document.getElementById('name').value !="" && document.getElementById('tel').value !="" && document.getElementById('question').value !="") {
		alert('Спасибо, что заполнили все поля\nЭто показательный макет!');
	}
}
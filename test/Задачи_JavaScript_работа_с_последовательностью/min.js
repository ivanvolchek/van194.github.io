function calculate() {	
	var field = document.getElementById("number"); // Поле куда вводится число последовательности
	var n = field.value;

	// Проверка формы на правильность ввода
	if(n == "") {
		alert("Заполните поле");
        return false;
	}

	if (n.match(/^[-\+]?\d+/) === null) {
		alert('Заполните поле числом');
		return false;
	} 

	var randomText = document.getElementById("randomNumberText"); // Доступ к элементу выводу последовательности		
	var summId = document.getElementById("summId"); // сумма элементов
	var numberMaxId = document.getElementById("numberMaxId"); 
	var numberMinId = document.getElementById("numberMinId"); // вывести минимальный элемент
	var sortMaxId = document.getElementById("sortMaxId"); // вывести отсортированный массив к максимуму
	var sortMinId = document.getElementById("sortMinId"); // вывести отсортированный массив к минимуму
	var moreTenId = document.getElementById("moreTenId"); // вывести числа больше 10
	var positiveNumbersId = document.getElementById("positiveNumbersId"); // вывести положительные числа
	var negativeNumberId = document.getElementById("negativeNumberId"); // вывести отрицательные числа
	var resultMathSqrtId = document.getElementById("resultMathSqrtId");
	var resultMathPowId = document.getElementById("resultMathPowId"); // вывести Степень
	var randomLook = 0;	// Случайная последовательность чисел												  
 	var numberMax = 0; // Максимальное число
 	var numberMin; // Минимальное число
 	var numbers = []; // массива куда заносится последовательность 

 	for(var i = 0; i < n; i++) {
 		var randomNumber = Math.floor(-30 + 100 * Math.random()); 
		randomLook = randomLook + randomNumber+"; ","" // Случайная последовательность
		numbers.push(randomNumber); // заносим рандомные числа в массив
		
		// Поиск макисального значения
		if(numberMax < randomNumber) {
			numberMax = randomNumber;
		}

		// Поиск минимального значения
		if(typeof(numberMin)==="undefined"){
			numberMin = randomNumber;
		}

		if(numberMin > randomNumber) {
			numberMin =  randomNumber;
		}	
	}

	// Последовательность по возрастанию 
	var resultSortMax = numbers.sort(function (a, b) {
		return a - b;
	});

	// Сумма числе c использованием метода
	var summa = numbers.reduce(function(a, b) { 
 		return a + b;
 	});

	// Числа больше 10
	var filtered = numbers.filter(function e(element) {
		return element > 10;
	});

	// Положительные числа 
 	var positiveNumbers = numbers.filter(function e(element) { 
 		return element >=0;
 	});

 	// Отрицательные числа
 	var negativeNumber = numbers.filter(function e(element) {
 		return element <=0;
 	});

 	// Корень из последовательности
 	var resultMathSqrt = numbers.reduce(function(a,b) {
	if(a + b > 0) {
			return Math.sqrt(a + b);
		} else  return "Число отрицательное";
	});

 
	randomText.innerHTML ="Случайная последовательность: " + randomLook;	
	sortMaxId.innerHTML = "Последовательность по возрастанию: " + resultSortMax;
	numberMaxId.innerHTML = "Максимальный элемент в последовательности: " + numberMax; 
	numberMinId.innerHTML = "Минимальный элемент в последовательности: " + numberMin;
	summId.innerHTML =  "Cумма элементов в последовательности:  "  + summa;
	moreTenId.innerHTML = "Числа больше 10: " + filtered;
	positiveNumbersId.innerHTML = "Положительные элементы в последовательности: " + positiveNumbers;
	negativeNumberId.innerHTML = "Отрацательные элементы в последовательности: " + negativeNumber;
	resultMathSqrtId.innerHTML = "Корень из последовательности: " + resultMathSqrt;
}


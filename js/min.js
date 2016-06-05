$(document).ready(function() {
  var pie1 = $('.pie-1'),
    pie2 = $('.pie-2'),
    pie3 = $('.pie-3');
    pie4 = $('.pie-4');
  progressBarUpdate(89, 100, pie1);
  progressBarUpdate(57, 100, pie2);
  progressBarUpdate(65, 100, pie3);
  progressBarUpdate(19, 100, pie4);
});

function rotate(element, degree) {
  element.css({
    '-webkit-transform': 'rotate(' + degree + 'deg)',
    '-moz-transform': 'rotate(' + degree + 'deg)',
    '-ms-transform': 'rotate(' + degree + 'deg)',
    '-o-transform': 'rotate(' + degree + 'deg)',
    'transform': 'rotate(' + degree + 'deg)',
    'zoom': 1
  });
}

function progressBarUpdate(x, outOf, elem) {
  var firstHalfAngle = 180;
  var secondHalfAngle = 0;

  // caluclate the angle
  var drawAngle = x / outOf * 360;

  // calculate the angle to be displayed if each half
  if (drawAngle <= 180) {
    firstHalfAngle = drawAngle;
  } else {
    secondHalfAngle = drawAngle - 180;
  }

  // set the transition
  rotate(elem.find(".slice1"), firstHalfAngle);
  rotate(elem.find(".slice2"), secondHalfAngle);

  // set the values on the text
  elem.find(".status").html(x + "<span>%</span>");
}

$(document).ready(function(){
	
	var items = $('#stage li'),
		itemsByTags = {};
	
	// Цикл по всем элементам li:
	
	items.each(function(i){
		var elem = $(this),
			tags = elem.data('tags').split(',');
		
		// Добавляем атрибут data-id. Требуется плагином Quicksand:
		elem.attr('data-id',i);
		
		$.each(tags,function(key,value){
			
			// Удаляем лишние пробелы:
			value = $.trim(value);
			
			if(!(value in itemsByTags)){
				// Cоздаем пустой массив для пунктов:
				itemsByTags[value] = [];
			}
			
			// Каждый пункт добавляется в один массив по ярлыку:
			itemsByTags[value].push(elem);
		});
		
	});

	// Создаем опцию "Все" в меню:
	createList('ALL',items);

	// Цикл по массивам в itemsByTags:
	$.each(itemsByTags,function(k,v){
		createList(k,v);
	});
	
	$('#filter a').live('click',function(e){
		var link = $(this);
		
		link.addClass('active').siblings().removeClass('active');
		
		// Используем плагин Quicksandдля анимации пунктов li.
		// Он использует data('list'), определённую нашей функцией createList:
		
		$('#stage').quicksand(link.data('list').find('li'));
		e.preventDefault();
	});
	
	$('#filter a:first').click();
	
	function createList(text,items){
		
		// Вспомогательная функция, которая получает текст кнопки меню и 
		// массив пунктов li
		
		// Создаем пустой неупорядоченный список
		var ul = $('<ul>',{'class':'hidden'});
		
		$.each(items,function(){
			// Создаем копию каждого пункта li 
			// и добавляем ее в список:
			
			$(this).clone().appendTo(ul);
		});

		ul.appendTo('#container');

		// Создаем пункт меню. Неупорядоченный список добавляется 
		// как параметр data (доступен через .data('list'):
		
		var a = $('<a>',{
			html: text,
			href:'#',
			data: {list:ul}
		}).appendTo('#filter');
	}
});

window.addEventListener('scroll', function(e) {
	  var nav = document.querySelectorAll('div[id^="nav"]');
	  for (var i = 0; i < nav.length; i++) { 
	    document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'active' : '');
	  }
	}, false);
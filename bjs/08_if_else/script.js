// задаем всем кнопкам константы
const btnRetry = document.querySelector('#btnRetry');
const btnOver = document.querySelector('#btnOver');
const btnLess = document.querySelector('#btnLess');
const btnEqual = document.querySelector('#btnEqual');
const btnStart = document.querySelector('#btnStart');

// задаем поля 
const minValueField = document.querySelector('#minValue')
const maxValueField = document.querySelector('#maxValue')
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

// стандартные значения переменных
let minValue = 0;
let maxValue = 100;
let orderNumber = 1;
let gameRun = true;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let answerStr = (IntToString(answerNumber).length < 20) ? IntToString(answerNumber) : answerNumber;

// возможные варианты ответов
let question = ['Вы загадали число', 'Может это', 'Видимо это', 'Наверное'];
let success = ['Я всегда угадываю\n😎', 'Это было легко!\n😎', 'Я думал будет что-то посложнее\n🤪']

// Я не нашел обязательного условия использовать условные операторы, так что использовал конструкцию:

// array[Math.round(Math.random() * n];

// Так как она сильно короче, и на мой взгляд проще

// Условия можно было бы использовать так:
// let r = Math.round(Math.random() * n;
// switch (r){
// 	case 1:
// 		answerField.innerText = 'text1';
// 		break;
// 	case 2:
// 		answerField.innerText = 'text2';
// 		break;

// 	...	
// 	case n:
// 		answerField.innerText = 'text n';
// 		break;
// 	default:
// 		answerField.innerText = 'text0'
// }


btnStart.addEventListener('click', () => {
	minValue = (parseInt(minValueField.value) || 0);
	maxValue = (parseInt(maxValueField.value) || 100);
	minValue = (minValue >= 1000) ? 999 : (minValue <= -1000) ? -999 : minValue;
	maxValue = (maxValue >= 1000) ? 999 : (maxValue <= -1000) ? -999 : maxValue;
	minValue = (minValue >= 1000) ? 999 : (minValue <= -1000) ? -999 : minValue;
	answerNumber  = Math.floor((minValue + maxValue) / 2);
	answerStr = (IntToString(answerNumber).length < 20) ? IntToString(answerNumber) : answerNumber;
	orderNumber = 1;
	gameRun = true;
	orderNumberField.innerText = orderNumber;
	answerField.innerHTML = `Загадайте число от ${minValue} до ${maxValue}<br>Вы загадали число ${answerStr}?`;
})

// преобразует число в текстовую запись
function IntToString(num) {
	let text = '';
	let dec = true;
	if (num < 0) {
		text += 'минус ';
		num = Math.abs(num);
	} else if (num == 0) {
		text = 'ноль';
		return text;
	}
	// обрабатываем сотни
	switch(Math.floor(num / 100)) {
		case 1:
			text += 'сто ';
			break;
		case 2:
			text += 'двести ';
			break;
		case 3:
			text += 'триста ';
			break;
		case 4:
			text += 'четыреста ';
			break;
		case 5:
			text += 'пятьсот ';
			break;
		case 6:
			text += 'шестьсот ';
			break;
		case 7:
			text += 'семьсот ';
			break;
		case 8:
			text += 'восемьсот ';
			break;
		case 9:
			text += 'девятьсот ';
			break;
	}
	num = num % 100;
	// обрабатываем 10-99
	switch(Math.floor(num / 10)) {
		case 1:
			num = num % 10;
			// обрабатываем числа 10-19. Так как это последнее слово в числе, выходим из цикла
			switch (num) {
				case 1:
					text += 'одиннадцать';
					return text;
				case 2:
					text += 'двенадцать';
					return text;
				case 3:
					text += 'тринадцать';
					return text;
				case 4:
					text += 'четырнадцать';
					return text;
				case 5:
					text += 'пятнадцать';
					return text;
				case 6:
					text += 'шестнадцать';
					return text;
				case 7:
					text += 'семнадцать';
					return text;
				case 8:
					text += 'восемнадцать';
					return text;
				case 9:
					text += 'девятнадцать';
					return text;
				default:
					text += 'десять';
					return text;
			}
			break;
		case 2:
			text += 'двадцать ';
			break;
		case 3:
			text += 'тридцать ';
			break;
		case 4:
			text += 'сорок ';
			break;
		case 5:
			text += 'пятьдесят ';
			break;
		case 6:
			text += 'шестьдесят ';
			break;
		case 7:
			text += 'семьдесят ';
			break;
		case 8:
			text += 'восемьдесят ';
			break;
		case 9:
			text += 'девяносто ';
			break;
	}
	// обрабатываем единицы
	num = num % 10;
	switch (num) {
		case 1:
			text += 'один';
			break;
		case 2:
			text += 'два';
			break;
		case 3:
			text += 'три';
			break;
		case 4:
			text += 'четыре';
			break;
		case 5:
			text += 'пять';
			break;
		case 6:
			text += 'шесть';
			break;
		case 7:
			text += 'семь';
			break;
		case 8:
			text += 'восемь';
			break;
		case 9:
			text += 'девять';
			break;
	}
	return text;
}

// кнопка "заново"
btnRetry.addEventListener('click', function () {
	// minValue = (parseInt(prompt('Минимальное знание числа для игры','0')) || 0);
	// minValue = (minValue >= 1000) ? 999 : (minValue <= -1000) ? -999 : minValue;
	// maxValue = (parseInt(prompt('Максимальное знание числа для игры','100')) || 100);
	// maxValue = (maxValue >= 1000) ? 999 : (maxValue <= -1000) ? -999 : maxValue;
	// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
	// answerNumber  = Math.floor((minValue + maxValue) / 2);
	// let answerStr = (IntToString(answerNumber).length < 20) ? IntToString(answerNumber) : answerNumber;	
	// answerField.innerText = `Вы загадали число ${answerStr}?`;
	// orderNumber = 1;
	// orderNumberField.innerText = orderNumber;
	// gameRun = true;
})

// кнопка "больше"
btnOver.addEventListener('click', function () {
	if (gameRun){
		if (minValue === maxValue){
			const phraseRandom = Math.round( Math.random());
			const answerPhrase = (phraseRandom === 1) ?
				`Вы загадали неправильное число!\n😡` :
				`Я сдаюсь..\n😤`;

			answerField.innerText = answerPhrase;
			gameRun = false;
		} else {
			minValue = answerNumber  + 1;
			answerNumber  = Math.floor((minValue + maxValue) / 2);
			let answerStr = (IntToString(answerNumber).length < 20) ? IntToString(answerNumber) : answerNumber;
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			answerField.innerText = `${question[Math.round(Math.random() * 3)]} ${answerStr}?`;
		}
	}
})

// кнопка "меньше"
btnLess.addEventListener('click', function () {
	if (gameRun){
		if (minValue === maxValue){
			const phraseRandom = Math.round(Math.random());
			const answerPhrase = (phraseRandom === 1) ?
				`Вы загадали неправильное число!\n😡` :
				`Я сдаюсь..\n😤`;

			answerField.innerText = answerPhrase;
			gameRun = false;
		} else {
			maxValue = answerNumber  - 1;
			answerNumber  = Math.floor((minValue + maxValue) / 2);
			let answerStr = (IntToString(answerNumber).length < 20) ? IntToString(answerNumber) : answerNumber;
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			answerField.innerText = `${question[Math.round(Math.random() * 3)]} ${answerStr}?`;
		}
	}
})

// кнопка "верно"
btnEqual.addEventListener('click', function () {
	if (gameRun){
		answerField.innerText = success[Math.round(Math.random() * 2)]
		gameRun = false;
	}
})


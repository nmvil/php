let lastOperand = 0;
let operation = null;
let result = 0;

const inputWindow = document.querySelector('#inputWindow');
const history = document.querySelector('#history');

const b0 = document.querySelector('#btn_0');
const b1 = document.querySelector('#btn_1');
const b2 = document.querySelector('#btn_2');
const b3 = document.querySelector('#btn_3');
const b4 = document.querySelector('#btn_4');
const b5 = document.querySelector('#btn_5');
const b6 = document.querySelector('#btn_6');
const b7 = document.querySelector('#btn_7');
const b8 = document.querySelector('#btn_8');
const b9 = document.querySelector('#btn_9');
const bdot = document.querySelector('#btn_dot');

const bsqrt = document.querySelector('#btn_sqrt');
const bunary = document.querySelector('#btn_unary');
const bplus = document.querySelector('#btn_plus');
const bminus = document.querySelector('#btn_minus');
const bc = document.querySelector('#btn_clr');
const bmult = document.querySelector('#btn_mult');
const bdiv = document.querySelector('#btn_div');
const bequals = document.querySelector('#btn_equals');

inputWindow.value = '0'


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

b0.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 0;
})
b1.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 1;
})
b2.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 2;
})
b3.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 3;
})
b4.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 4;
})
b5.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 5;
})
b6.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 6;
})
b7.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 7;
})
b8.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 8;
})
b9.addEventListener('click', () => {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
	}
	inputWindow.value += 9;
})
bdot.addEventListener('click', () => {
	inputWindow.value += '.';
})


bplus.addEventListener('click', () => {
	lastOperand = inputWindow.value;
	inputWindow.value = '0';
	operation = '+';
})
bminus.addEventListener('click', () => {
	lastOperand = inputWindow.value;
	inputWindow.value = '0';
	operation = '-';
})
bsqrt.addEventListener('click', () => {
	result = Math.sqrt(parseFloat(inputWindow.value));
	inputWindow.value = result;
})
bunary.addEventListener('click', () => {
	inputWindow.value = -inputWindow.value;
})
bmult.addEventListener('click', () => {
	lastOperand = inputWindow.value;
	inputWindow.value = '0';
	operation = '*';
})
bdiv.addEventListener('click', () => {
	lastOperand = inputWindow.value;
	inputWindow.value = '0';
	operation = '/';
})


bequals.addEventListener('click', () => {
	if (operation === '+') {
		result = parseFloat(lastOperand) + parseFloat(inputWindow.value);
		history.innerHTML += `${lastOperand} + ${inputWindow.value} = ${result} <br>\n`;
		inputWindow.value = result;
	}
	if (operation === '-') {
		result = parseFloat(lastOperand) - parseFloat(inputWindow.value);
		history.innerHTML += `${lastOperand} - ${inputWindow.value} = ${result} <br>\n`;
		inputWindow.value = result;
	}
	if (operation === '*') {
		result = parseFloat(lastOperand) * parseFloat(inputWindow.value);
		history.innerHTML += `${lastOperand} * ${inputWindow.value} = ${result} <br>\n`;
		inputWindow.value = result;
	}
	if (operation === '/') {
		result = parseFloat(lastOperand) / parseFloat(inputWindow.value);
		history.innerHTML += `${lastOperand} / ${inputWindow.value} = ${result} <br>\n`;
		inputWindow.value = result;
	}
})
const openBth = document.querySelector('.open');
const clouseBtn = document.querySelector('.clouse');
const calculator = document.querySelector('.not-hidden');

openBth.addEventListener('click', openCalculator);
clouseBtn.addEventListener('click', clouseCalculator);

function openCalculator() {
  calculator.classList.remove('is-hidden');
}
function clouseCalculator() {
  calculator.classList.add('is-hidden');
}

const previousNumber = document.querySelector('.previous-number');
const mathSign = document.querySelector('.math-sign');
const currentNumber = document.querySelector('.current-number');
const clearBtn = document.querySelector('.clear');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('.equals');
const historyBtn = document.querySelector('.history__reset');
const calculatorHistory = document.querySelector('.list-history');

let result = '';

clearBtn.addEventListener('click', clearWindow);
operatorBtn.forEach(li => li.addEventListener('click', operate));
numberBtn.forEach(li => li.addEventListener('click', displayNumber));
equalsBtn.addEventListener('click', showResult);
historyBtn.addEventListener('click', clearHistory);

function operate() {
  if (currentNumber.innerHTML === '' && this.textContent === '-') {
    return (currentNumber.innerHTML = '-');
  } else if (currentNumber.innerHTML === '') {
    return;
  }
  if (mathSign.innerHTML !== '') {
    showResult();
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = '';
}

function showResult() {
  if (currentNumber.innerHTML === '' || previousNumber.innerHTML === '') return;
  let a = Number(currentNumber.innerHTML);
  let b = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = b - a;
      break;
    case '*':
      result = a * b;
      break;
    case '&#247':
      result = b / a;
      break;
    case 'x^':
      result = b ** a;
      break;
    case '%':
      result = (b * a) / 100;
  }
  addToHistory();
  historyBtn.classList.add('active');
  currentNumber.innerHTML = result;
  previousNumber.innerHTML = '';
  mathSign.innerHTML = '';
}
function addToHistory() {
  const newHistoryItem = document.createElement('li');
  newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`;
  newHistoryItem.classList.add('list-history');
  calculatorHistory.appendChild(newHistoryItem);
}

function displayNumber() {
  if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
  if (this.textContent === '.' && currentNumber.innerHTML === '')
    return (currentNumber.innerHTML = '0.');
  currentNumber.innerHTML += this.textContent;
}

function clearWindow() {
  result = '';
  previousNumber.innerHTML = '';
  mathSign.innerHTML = '';
  currentNumber.innerHTML = '';
}
function clearHistory() {
  calculatorHistory.textContent = '';
  if (calculatorHistory.textContent === '') {
    historyBtn.classList.remove('active');
  }
}

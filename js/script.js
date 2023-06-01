const previousNumber = document.querySelector('.previous-number');
const mathSign = document.querySelector('.math-sign');
const currentNumber = document.querySelector('.current-number');
const clearBtn = document.querySelector('.clear');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('.equals');
const historyBtn = document.querySelector('.history__reset');
const calculatorHistory = document.querySelector('.list-history');

clearBtn.addEventListener('click', clearWindow);
operatorBtn.forEach(li => li.addEventListener('click', operate));
numberBtn.forEach(li => li.addEventListener('click', displayNumber));
equalsBtn.addEventListener('click', showResult);
historyBtn.addEventListener('click', clearHistory);

function clearWindow() {}
function operate() {}
function displayNumber() {}
function showResult() {}
function clearHistory() {}

let result = '';

const screen = document.getElementById('screen');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operador');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

let currentNumber = '';
let previousNumber = null;
let currentOperator = null;


Array.from(numbers).forEach(numberButton => {
  numberButton.addEventListener('click', () => {
    currentNumber += numberButton.value;
    screen.innerText = currentNumber;
  });
});


Array.from(operators).forEach(operatorButton => {
  operatorButton.addEventListener('click', () => {
    if (currentOperator !== null && currentNumber !== '') {
      calculate();
    }
    currentOperator = operatorButton.value;
    previousNumber = parseFloat(currentNumber);
    currentNumber = '';
  });
});


equal.addEventListener('click', () => {
  calculate();
});


clear.addEventListener('click', () => {
  clearCalculator();
});


function calculate() {
  if (previousNumber !== null && currentOperator !== null && currentNumber !== '') {
    const num1 = previousNumber;
    const num2 = parseFloat(currentNumber);
    let result;

    switch (currentOperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'X':
        result = num1 * num2;
        break;
      case ':':
        result = num1 / num2;
        break;
      default:
        result = NaN;
    }

    screen.innerText = result;
    currentNumber = result.toString();
    previousNumber = null;
    currentOperator = null;
  }
}

function clearCalculator() {
  currentNumber = '';
  previousNumber = null;
  currentOperator = null;
  screen.innerText = '0';
}

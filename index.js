const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
let displayText = '';
let numOne = '';
let numTwo = '';
let operator = '';

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operation, x, y) {
  switch (operation) {
    case 'add':
      return add(x, y);
    case 'subtract':
      return subtract(x, y);
    case 'multiply':
      return multiply(x, y);
    case 'divide':
      return divide(x, y);
  }
}

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    numOne += e.target.innerHTML;
    displayText += e.target.innerHTML;
    display.innerHTML = displayText;
  });
});

operandButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    operator = e.target.id;
    displayText += e.target.innerHTML;
    display.innerHTML = displayText;
  });
});

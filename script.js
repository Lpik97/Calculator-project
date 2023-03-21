let currentNumber = '';
let previousNumber = '';
let operator = '';
const allNumberButtons = document.querySelectorAll('.number');
const allOperatorButtons = document.querySelectorAll('.operator');
let displayedNumber = document.querySelector('.displayed-number');
let displayedMemory = document.querySelector('.displayed-memory');
const equalButton = document.querySelector('.equal-operator');
equalButton.addEventListener('click', function () {
    if (currentNumber !== '' && previousNumber !== '') {
        operateNumbers();
    }
});
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearAll);

const backSpaceButton = document.querySelector('.backspace-button');
backSpaceButton.addEventListener('click', undo);

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', addDecimal);

function operateNumbers () {
    currentNumber = Number(currentNumber);
    previousNumber = Number(previousNumber);
    let result = 0;
        if (operator === '+') {
            result = previousNumber + currentNumber;
        } else if (operator === '-') {
            result = previousNumber - currentNumber;
        } else if (operator === '*') {
            result = previousNumber * currentNumber;
        } else if (operator === '/') {
            if (currentNumber <= 0) {
                displayedMemory.textContent = '';
                displayedNumber.textContent = 'Error';
                previousNumber = '';
                currentNumber = 0;
                return;
            }
            result = previousNumber / currentNumber;
        }
    displayedMemory.textContent = previousNumber + ' ' + operator + ' ' + currentNumber + ' ' + '=';
    previousNumber = '';
    currentNumber = result;
    displayedNumber.textContent = roundNumber(result);
}

function populateDisplayedNumber () {
    allNumberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let buttonValue = button.textContent;
            currentNumber += buttonValue;
            currentNumber = currentNumber.substring(0, 16);
            displayedNumber.textContent = currentNumber;
        });
    });
}

populateDisplayedNumber();

function populateDisplayedMemory () {
    allOperatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (currentNumber !== '') {
                let buttonValue = button.textContent;
                operator = buttonValue;
                previousNumber = currentNumber;
                previousNumber = previousNumber,
                displayedMemory.textContent = roundNumber(previousNumber) + ' ' +  operator;
                currentNumber = '';
                displayedNumber.textContent = '';
            }
        });
    });
}
populateDisplayedMemory();

function roundNumber (num) {
    num = String(num);
    num = num.substring(0,16);
    return Math.round(num * 1000000) / 1000000;
}

function clearAll () {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    displayedNumber.textContent = '';
    displayedMemory.textContent = '';
}

function undo () {
    console.log(currentNumber);
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        displayedNumber.textContent = currentNumber;
        displayedMemory.textContent = '';
    }
}

function addDecimal () {
        currentNumber = currentNumber + '.';
        displayedNumber.textContent = currentNumber;
}


let currentNumber = '';
let previousNumber = '';
let operator = '';
const allNumberButtons = document.querySelectorAll('.number');
const allOperatorButtons = document.querySelectorAll('.operator');
let displayedNumber = document.querySelector('.displayed-number');
let displayedMemory = document.querySelector('.displayed-memory');
const equalButton = document.querySelector('.special-operator');
equalButton.addEventListener('click', function () {
    if (currentNumber !== '' && previousNumber !== '') {
        operateNumbers();
    }
});

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
                displayedMemory.textContent = previousNumber + ' ' +  operator;
                currentNumber = '';
                displayedNumber.textContent = '';
            }
        });
    });
}
populateDisplayedMemory();

function roundNumber (num) {
    return Math.round(num * 1000000) / 1000000;
}

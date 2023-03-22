let currentNumber = '';
let previousNumber = '';
let operator = '';
const allNumberButtons = document.querySelectorAll('.number');
const allOperatorButtons = document.querySelectorAll('.operator');
let displayedNumber = document.querySelector('.displayed-number');
let displayedMemory = document.querySelector('.displayed-memory');

window.addEventListener('keydown', keyboardSupport);

const equalButton = document.querySelector('.operator-equal');
equalButton.addEventListener('click', function () {
    if (currentNumber !== '' && previousNumber !== '') {
        operateNumbers();
    }
});

const clearAllButton = document.querySelector('.clearAll-button');
clearAllButton.addEventListener('click', clearAll);

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', undo);

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
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        displayedNumber.textContent = currentNumber;
    }
}

function addDecimal () {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        displayedNumber.textContent = currentNumber;
    }
}

function keyboardSupport (e) {
   e.preventDefault();
   if (e.key >= 0 && e.key <= 9) {
        currentNumber += e.key;
        currentNumber = currentNumber.substring(0, 16);
        displayedNumber.textContent = currentNumber;
   } else if (currentNumber !== '' && previousNumber !== '' && e.key === 'Enter' || e.key === '=') {
        operateNumbers();
   } else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') {
        if (currentNumber !== '') {
        operator = e.key;
        previousNumber = currentNumber;
        previousNumber = previousNumber,
        displayedMemory.textContent = roundNumber(previousNumber) + ' ' +  operator;
        currentNumber = '';
        displayedNumber.textContent = '';
        }
   } else if (e.key === '.') {
        addDecimal();
   } else if (e.key === 'Backspace') {
        if (currentNumber != '') {
            undo();
        } else if (currentNumber != '' && previousNumber != '') {
            clearAll();
        }
   }
}

const addButton = document.querySelector('#operator-add');
const subtractButton = document.querySelector('#operator-subtract');
const multiplyButton = document.querySelector('#operator-multiply');
const divideButton = document.querySelector('#operator-divide');
const allNumberButtons = document.querySelectorAll('.number');
const displayedNumber = document.querySelector('.displayed-number');
const displayedMemory = document.querySelector('.displayed-memory');
const allOperatorButtons = document.querySelectorAll('.operator');


function addNumbers (...args) {
    let result = args.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    return result;
}

function subtractNumbers (...args) {
    let result = args.reduce(function(accumulator, currentValue) {
        return accumulator - currentValue;
    });
    return result;
}

function multiplyNumbers (...args) {
    let result = args.reduce(function(accumulator, currentValue) {
        return accumulator * currentValue;
    }, 1);
    return result;
}

function divideNumbers (...args) {
    let result = args.reduce(function(accumulator, currentValue) {
        return accumulator / currentValue;
    });
    return result;
}

function operateNumbers (operator, num1, num2) {
    let result;
    switch (operator) {
        case "+":
            result = addNumbers(num1, num2);
            break;
        case "-":
            result = subtractNumbers(num1, num2);
            break;
        case "*":
            result = multiplyNumbers(num1, num2);
            break;
        case "/":
            result = divideNumbers(num1, num2);
            break;
        default:
            console.log("Invalid operator");
    }
    return result;
}

function populateDisplay () {
    allNumberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonValue = button.textContent;
            displayedNumber.textContent += buttonValue;
        });
    });
}

populateDisplay();

function populateDisplayMemory () {
    allOperatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonValue = button.textContent;
            displayedMemory.textContent = displayedNumber.textContent + ' ' +  buttonValue;
            displayedNumber.textContent = '';
        });
    });
}

populateDisplayMemory();


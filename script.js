const addButton = document.querySelector('.operator-add');
const subtractButton = document.querySelector('.operator-subtract');
const multiplyButton = document.querySelector('.operator-multiply');
const divideButton = document.querySelector('.operator-divide');
const allNumberButtons = document.querySelectorAll('.number');
const displayedNumber = document.querySelector('.displayed-number');


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

function operateNumbers (operator, ...args) {
    let result;
    switch (operator) {
        case "+":
            result = addNumbers(...args);
            break;
        case "-":
            result = subtractNumbers(...args);
            break;
        case "*":
            result = multiplyNumbers(...args);
            break;
        case "/":
            result = divideNumbers(...args);
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
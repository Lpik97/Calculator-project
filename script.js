const addButton = document.querySelector('#operator-add');
const subtractButton = document.querySelector('#operator-subtract');
const multiplyButton = document.querySelector('#operator-multiply');
const divideButton = document.querySelector('#operator-divide');
const allNumberButtons = document.querySelectorAll('.number');
let displayedNumber = document.querySelector('.displayed-number');
let displayedMemory = document.querySelector('.displayed-memory');
const allOperatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#operator-equal');
let operator = null;


function addNumbers (...args) {
    let result = args.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
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

function performOperations () {
    numbers = [];
    result = 0;
    allOperatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (operator === null) {
                operator = button.textContent;
                numbers.push(Number(displayedNumber.textContent));
                displayedNumber.textContent = '';
                displayedMemory.textContent = numbers[0] + ' ' + operator;
            } else {
                numbers.push(Number(displayedNumber.textContent));
                result = operateNumbers(operator, numbers[0], numbers[1]);
                displayedMemory.textContent = numbers[0] + ' ' + operator + ' ' + numbers[1] + ' ' + '=';
                displayedNumber.textContent = result.toFixed(3); //This method should round the decimals to max 3.
                numbers = [result];
                if (result !== 0) {
                    numbers = [result];
            
                }
                operator = button.textContent;
                displayedNumber.textContent = '';
                displayedMemory.textContent = numbers[0] + ' ' + operator;
            }
        });
    });
}

performOperations();

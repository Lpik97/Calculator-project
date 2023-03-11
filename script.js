const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');


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
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
    }, 0);
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
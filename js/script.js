"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'), // clear button
    ops = ['+', '-', '×', '÷'];

let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        input.innerHTML += this.innerHTML;
    });
});
// adding click handlers to the operation buttons
operators.forEach(function(operator) {
    operator.addEventListener('click', function() {
        if (ops.includes(input.innerHTML[input.innerHTML.length -1])) {
            input.innerHTML= input.innerHTML.slice(0, input.innerHTML.length - 1);
        }; 
        input.innerHTML += this.innerHTML; 
    });
});
// on click of 'equal' button
result.addEventListener('click', function() {
    input.innerHTML = 'I\'m sorry, I can\'t do that Dave';
});
// clearing the input on press of clear
clear.addEventListener('click', function() {
    input.innerHTML = '';
});

//.split(/\+|\-|\×|\÷/g)

"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'), // clear button
    ops = ['+', '-', '*', '/'];

let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length -1];
        if (resultDisplayed === false) {
            input.innerHTML += this.innerHTML;
        } else if (
            (resultDisplayed === true) && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")) {
            resultDisplayed = false;
            input.innerHTML += this.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += this.innerHTML;
        }
    });
});
// adding click handlers to the operation buttons
operators.forEach(function(operator) {
    operator.addEventListener('click', function() {
        if (ops.includes(input.innerHTML[input.innerHTML.length -1])) {
            input.innerHTML= input.innerHTML.slice(0, input.innerHTML.length - 1);
            input.innerHTML += this.innerHTML;
        } 
        else if (input.innerHTML.length === 0) {
            console.log("enter a number first");
        }
        else {
            input.innerHTML += this.innerHTML;
        }; 
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

//From Sean's code

/*Array.from(numbers).map(number => {
    number.addEventListener('click', function() {
        if (resultDisplayed === false) {
            input.innerHTML += this.innerHTML;
        } else if (
            (resultDisplayed === true && lastChar === "+") ||
            (resultDisplayed === true && lastChar === "-") ||
            (resultDisplayed === true && lastChar === "*") ||
            (resultDisplayed === true && lastChar === "/") ||
        )
        {
            resultDisplayed = false;
            input.innerHTML += this.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += this.innerHTML;
        }
    });
});*/
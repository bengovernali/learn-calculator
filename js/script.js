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
    const currentString = input.innerHTML;
    const numberStringArray = currentString.split(/\+|\-|\*|\//g);
    
    let numbersArray = [];
    
    numberStringArray.forEach(function(number){
        numbersArray.push(Number(number));
    });

    const operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");
    console.log(numbersArray);

    let multiply = operatorsArray.indexOf("*");
    while (multiply != -1) {
        numbersArray.splice(multiply, 2, numbersArray[multiply] * numbersArray[multiply + 1]);
        operatorsArray.splice(multiply, 1);
        multiply = operatorsArray.indexOf('*');
    }
    let divide = operatorsArray.indexOf("/");
    while (divide != -1) {
        numbersArray.splice(divide, 2, numbersArray[divide] / numbersArray[divide + 1]);
        operatorsArray.splice(divide, 1);
        divide = operatorsArray.indexOf("/");
    }
    let add = operatorsArray.indexOf("+");
    while (add != -1) {
        numbersArray.splice(add, 2, numbersArray[add] + numbersArray[add + 1]);
        operatorsArray.splice(add, 1);
        add = operatorsArray.indexOf("+");
    }
    let subtract = operatorsArray.indexOf("-");
    while (subtract != -1) {
        numbersArray.splice(subtract, 2, numbersArray[subtract] - numbersArray[subtract + 1]);
        operatorsArray.splice(subtract, 1);
        subtract = operatorsArray.indexOf("-");
    }
    resultDisplayed = true;
    input.innerHTML = numbersArray;
    console.log(numbersArray);
});

// clearing the input on press of clear
clear.addEventListener('click', function() {
    input.innerHTML = '';
});
const one = document.querySelector("one");
const two = document.querySelector("two");
const three = document.querySelector("three");
const four = document.querySelector("four");
const five = document.querySelector("five");
const six = document.querySelector("six");
const seven = document.querySelector("seven");
const eight = document.querySelector("eight");
const nine = document.querySelector("nine");
const zero = document.querySelector("zero");
const add = document.querySelector("add");
const subtract = document.querySelector("subtract");
const multiply = document.querySelector("multiply");
const devide = document.querySelector("devide");
const equals = document.querySelector("equals");
const clear = document.querySelector("clear");
const backspace = document.querySelector("backspace");

let firstNumber 
let secondNumber 
let operator

function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber
};

function subtraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber
};

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber
};

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber
};
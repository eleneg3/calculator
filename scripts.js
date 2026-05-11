const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const devide = document.getElementById("devide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let operator = document.getElementById("operator");
let equalSign = document.getElementById("equalsSign");
let results = document.getElementById("results");

one.addEventListener("click", () => firstNumber.textContent += "1");
two.addEventListener("click", () => firstNumber.textContent += "2");
three.addEventListener("click", () => firstNumber.textContent += "3");
four.addEventListener("click", () => firstNumber.textContent += "4");
five.addEventListener("click", () => firstNumber.textContent += "5");
six.addEventListener("click", () => firstNumber.textContent += "6");
seven.addEventListener("click", () => firstNumber.textContent += "7");
eight.addEventListener("click", () => firstNumber.textContent += "8");
nine.addEventListener("click", () => firstNumber.textContent += "9");
zero.addEventListener("click", () => firstNumber.textContent += "0");

// if (firstNumber.textContent.length > 0) {
    add.addEventListener("click", () => operator.textContent = "+");
    subtract.addEventListener("click", () => operator.textContent = "-");
    multiply.addEventListener("click", () => operator.textContent = "x");
    devide.addEventListener("click", () => operator.textContent = "÷");
    equals.addEventListener("click", () => equalSign.textContent += "=");
// }

if (operator.textContent === "+") {
    zero.addEventListener("click", () => secondNumber.textContent += "0");
}

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

function operate(firstNumber, secondNumber, operator) {
    if (operator = add) {
        return addition(firstNumber + secondNumber)
    } else if (operator = subtract) {
        return subtraction(firstNumber, secondNumber)
    } else if (operator = devide) {
        return division(firstNumber, secondNumber)
    } else if (operator = multiply) {
        return multiplication(firstNumber, secondNumber)
    }
}
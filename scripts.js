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
const comma = document.getElementById("comma");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let operator = document.getElementById("operator");
let equalSign = document.getElementById("equalsSign");
let results = document.getElementById("results");

one.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "1";
    } else {
        secondNumber.textContent += "1";
    }
});
two.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "2";
    } else {
        secondNumber.textContent += "2";
    }
});
three.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "3";
    } else {
        secondNumber.textContent += "3";
    }
});
four.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "4";
    } else {
        secondNumber.textContent += "4";
    }
});
five.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "5";
    } else {
        secondNumber.textContent += "5";
    }    
});
six.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "6";
    } else {
        secondNumber.textContent += "6";
    }    
});
seven.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "7";
    } else {
        secondNumber.textContent += "7";
    }    
});
eight.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "8";
    } else {
        secondNumber.textContent += "8";
    }    
});
nine.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "9";
    } else {
        secondNumber.textContent += "9";
    }    
});
zero.addEventListener("click", () => {
    if (operator.textContent === "") {
        firstNumber.textContent += "0";
    } else {
        secondNumber.textContent += "0";
    }    
});

clear.addEventListener("click", () => {
    firstNumber.textContent = "";
    operator.textContent = "";
    secondNumber.textContent = "";
    results.textContent = ""
});

// comma.addEventListener("click", () => {
//     if (secondNumber) {
//         secondNumber.textContent += ","
//     } else if (firstNumber) {
//         firstNumber.textContent += ","
//     }
// })

add.addEventListener("click", () => {
    if (secondNumber.textContent !== "") {
        let result = operate(parseInt(firstNumber.textContent), parseInt(secondNumber.textContent), operator);
        firstNumber.textContent = result;
        secondNumber.textContent = "";
        operator.textContent = "+";
    } else if (firstNumber.textContent !== "") {
        operator.textContent = "+"
    }
});

subtract.addEventListener("click", () => {
    if (secondNumber.textContent !== "") {
        let result = operate(parseInt(firstNumber.textContent), parseInt(secondNumber.textContent), operator);
        firstNumber.textContent = result;
        secondNumber.textContent = "";
        operator.textContent = "-";
    } else if (firstNumber.textContent !== "") {
        operator.textContent = "-"
    }    
});

multiply.addEventListener("click", () => {
    if (secondNumber.textContent !== "") {
        let result = operate(parseInt(firstNumber.textContent), parseInt(secondNumber.textContent), operator);
        firstNumber.textContent = result;
        secondNumber.textContent = "";
        operator.textContent = "x";
    } else if (firstNumber.textContent !== "") {
        operator.textContent = "x"
    }    
});

devide.addEventListener("click", () => {
    if (secondNumber.textContent !== "") {
        let result = operate(parseInt(firstNumber.textContent), parseInt(secondNumber.textContent), operator);
        firstNumber.textContent = result;
        secondNumber.textContent = "";
        operator.textContent = "÷";
    } else if (firstNumber.textContent !== "") {
        operator.textContent = "÷"
    }
});

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
    if (operator.textContent == "+") {
        let answer = addition(firstNumber, secondNumber)
        return answer
    } else if (operator.textContent == "-") {
        let answer = subtraction(firstNumber, secondNumber)
        return answer 
    } else if (operator.textContent == "÷") {
        let answer = division(firstNumber, secondNumber)
        return answer 
    } else if (operator.textContent == "x") {
        let answer = multiplication(firstNumber, secondNumber)
        return answer
    }
}

equals.addEventListener("click", () => {
    let result = operate(parseInt(firstNumber.textContent), parseInt(secondNumber.textContent), operator);
    results.textContent = `= ${result}`
})

backspace.addEventListener("click", () => {
    if (results.textContent != "") {
        results.textContent = ""
        let num = secondNumber.textContent
        let deleted = num.slice(0, - 1);
        secondNumber.textContent = deleted
    } else if (secondNumber.textContent != "") {
        let num = secondNumber.textContent
        let deleted = num.slice(0, - 1);
        secondNumber.textContent = deleted
    } else if (operator.textContent != "") {
        operator.textContent = ""
    } else if (firstNumber.textContent != "") {
        let num = firstNumber.textContent
        let deleted = num.slice(0, - 1);
        firstNumber.textContent = deleted        
    }
})
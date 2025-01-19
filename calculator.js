// Functions for arithmetic operations
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Get references to input fields and buttons
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Add event listeners to operation buttons
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = add(number1, number2);
    resultDisplay.textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = subtract(number1, number2);
    resultDisplay.textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = multiply(number1, number2);
    resultDisplay.textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = divide(number1, number2);
    resultDisplay.textContent = result;
});

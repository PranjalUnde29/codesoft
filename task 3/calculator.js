const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value; // Append the number or decimal to the current input
    display.value += value; // Append the value to the display
}

function setOperator(op) {
    if (currentInput === '') return; // Prevent setting operator if no input
    if (previousInput !== '' && currentInput !== '') {
        // If there's already an operator, calculate the intermediate result
        calculate();
    }
    operator = op; // Set the operator
    previousInput = currentInput; // Save the current input as the previous input
    currentInput = ''; // Reset the current input
    display.value += ` ${operator} `; // Show the operator in the display
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 === 0 ? 'Error' : num1 / num2; // Handle division by zero
            break;
        default:
            return;
    }

    display.value = result; // Show the result in the display
    currentInput = result.toString(); // Store the result for further operations
    previousInput = '';
    operator = '';
}

function clearDisplay() {
    display.value = ''; // Clear the display
    currentInput = '';
    previousInput = '';
    operator = '';
}

let currentInput = '';
let result = null;
let operator = '';
let lastOperator = ''; // Variable para almacenar la última operación seleccionada

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        // Si se hace clic en un botón de operación, y hay un número actual y un resultado previo, realiza la operación previa.
        if (currentInput !== '') {
            if (result === null) {
                result = parseFloat(currentInput);
            } else {
                const num2 = parseFloat(currentInput);
                switch (lastOperator) {
                    case '+':
                        result += num2;
                        break;
                    case '-':
                        result -= num2;
                        break;
                    case '*':
                        result *= num2;
                        break;
                    case '/':
                        if (num2 !== 0) {
                            result /= num2;
                        } else {
                            alert("Error: División por cero.");
                            clearDisplay();
                            return;
                        }
                        break;
                    default:
                        result = num2;
                }
            }
            // Luego, establece el operador seleccionado y almacena la última operación.
            operator = value;
            lastOperator = operator;
            // Muestra el operador en el campo de entrada.
            document.getElementById('display').value = result.toString() + ' ' + operator + ' ';
            currentInput = '';
        }
    } else {
        currentInput += value;
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    currentInput = '';
    result = null;
    operator = '';
    lastOperator = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (currentInput !== '') {
        const num2 = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result += num2;
                break;
            case '-':
                result -= num2;
                break;
            case '*':
                result *= num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result /= num2;
                } else {
                    alert("Error: División por cero.");
                    clearDisplay();
                    return;
                }
                break;
            default:
                result = num2;
        }
        document.getElementById('display').value = result.toString();
        currentInput = result.toString();
        operator = '';
        lastOperator = '';
    }
}

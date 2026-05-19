document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    
    let currentValue = '0';
    let previousValue = '';
    let operator = null;
    let shouldReset = false;

    function updateDisplay() {
        display.textContent = currentValue;
    }

    function clearAll() {
        currentValue = '0';
        previousValue = '';
        operator = null;
        shouldReset = false;
        updateDisplay();
    }

    function deleteLastChar() {
        if (currentValue.length > 1) {
            currentValue = currentValue.slice(0, -1);
        } else {
            currentValue = '0';
        }
        updateDisplay();
    }

    function appendNumber(num) {
        if (shouldReset) {
            currentValue = num;
            shouldReset = false;
        } else {
            currentValue = currentValue === '0' ? num : currentValue + num;
        }
        updateDisplay();
    }

    function appendDecimal() {
        if (shouldReset) {
            currentValue = '0.';
            shouldReset = false;
        } else if (!currentValue.includes('.')) {
            currentValue += '.';
        }
        updateDisplay();
    }

    function setOperator(op) {
        if (operator !== null && !shouldReset) {
            calculate();
        }
        previousValue = currentValue;
        operator = op;
        shouldReset = true;
    }

    function calculate() {
        if (operator === null || previousValue === '') return;

        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);
        
        if (isNaN(prev) || isNaN(current)) {
            showError('无效输入');
            return;
        }

        let result;
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '−':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    showError('不能除以零');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        if (!isFinite(result)) {
            showError('计算错误');
            return;
        }

        currentValue = formatResult(result);
        previousValue = '';
        operator = null;
        shouldReset = true;
        updateDisplay();
    }

    function formatResult(num) {
        if (Number.isInteger(num)) {
            return num.toString();
        }
        const formatted = num.toFixed(10);
        return parseFloat(formatted).toString();
    }

    function showError(message) {
        currentValue = message;
        updateDisplay();
        setTimeout(() => {
            clearAll();
        }, 2000);
    }

    document.getElementById('clear').addEventListener('click', clearAll);
    document.getElementById('backspace').addEventListener('click', deleteLastChar);
    document.getElementById('decimal').addEventListener('click', appendDecimal);
    document.getElementById('equals').addEventListener('click', calculate);

    document.getElementById('add').addEventListener('click', () => setOperator('+'));
    document.getElementById('subtract').addEventListener('click', () => setOperator('−'));
    document.getElementById('multiply').addEventListener('click', () => setOperator('×'));
    document.getElementById('divide').addEventListener('click', () => setOperator('÷'));

    const numberButtons = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9'];
    numberButtons.forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            appendNumber(id.replace('num', ''));
        });
    });
});
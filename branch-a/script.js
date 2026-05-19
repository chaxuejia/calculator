document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === 'C') {
                display.textContent = '0';
            } else if (value === '⌫') {
                if (display.textContent.length > 1) {
                    display.textContent = display.textContent.slice(0, -1);
                } else {
                    display.textContent = '0';
                }
            } else if (value === '=') {
                display.textContent = display.textContent;
            } else if (value === '.') {
                if (!display.textContent.includes('.')) {
                    display.textContent += value;
                }
            } else {
                if (display.textContent === '0') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
            }
        });
    });
});
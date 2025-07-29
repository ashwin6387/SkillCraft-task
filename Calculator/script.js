const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (err) {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// ✅ Keyboard Input Handling
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (/[\d+\-*/.]/.test(key)) {
        currentInput += key;
        display.value = currentInput;
    } else if (key === 'Enter') {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch {
            display.value = 'Error';
            currentInput = '';
        }
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (key === 'Escape') {
        currentInput = '';
        display.value = '';
    }
});
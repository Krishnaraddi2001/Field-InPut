document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const resultMessage = document.getElementById('resultMessage');

    numberInput.addEventListener('input', function () {
        const value = numberInput.value.trim();

        if (value === '') {
            resultMessage.textContent = '';
            return;
        }

        const number = Number(value);

        if (isNaN(number)) {
            resultMessage.textContent = 'Please enter a valid number.';
            return;
        }

        if (number < 0) {
            resultMessage.textContent = 'Enter a positive value.';
        } else if (number % 2 === 0) {
            resultMessage.textContent = `Next 3 even numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
        } else {
            resultMessage.textContent = `Next 3 odd numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
        }
    });
});

const inputElement = document.getElementById('userInput');
const outputElement = document.getElementById('output');

inputElement.addEventListener('input', function () {

    const valorDigitado = inputElement.value;

    outputElement.textContent = 'Você digitou: ${valorDigitado}';
});
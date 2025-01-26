// esses codigos tão inutilizados por hora(não sei se vou usar) //

const inputElement = document.getElementById('userInput');
const outputElement = document.getElementById('output');

document.addEventListener('DOMContentLoaded', function() {

    const nameH = localStorage.getItem('nome');
    if (nameH){
        inputElement.value = nameH;
    }
});    

inputElement.addEventListener('input', function () {

    const nome = inputElement.value;

    outputElement.textContent = `Seu héroi se chamará: ${nome}`;
});

        const heroName = (localStorage.getItem('heroName') || 'SEU HEROI').toUpperCase();
        const choosenName = document.getElementById('choosenName');
        choosenName.textContent = `${heroName}`;
function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    // Verificando se os valores são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    var imc = peso / (altura * altura);
    //exibindo valores  :)
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Resultado</h2>' +
        '<p>Nome: ' + document.getElementById('nome').value + '</p>' +
        '<p>IMC: ' + imc.toFixed(2) + '</p>' +
        '<p>Classificação: ' + classificarIMC(imc) + '</p>';
}

function classificarIMC(imc) {
    if (imc <= 16.9) {
        return 'Muito abaixo do peso';
    } else if (imc >= 17 && imc <= 18.4) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Acima do Peso';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 40) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}


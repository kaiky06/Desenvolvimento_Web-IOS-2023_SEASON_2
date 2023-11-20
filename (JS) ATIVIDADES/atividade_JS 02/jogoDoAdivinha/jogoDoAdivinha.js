// jogo do adivinha

let numSorteado;
let numUsuario;

do {
    numSorteado = Math.floor(Math.random() * 10);
    numUsuario = prompt("Escolha um número de 0 a 10");

    if (isNaN(numUsuario)) { //se for true
        alert("Por favor, insira um número válido.");
    } else {
        numUsuario = parseInt(numUsuario); 
        if (numUsuario == numSorteado) {
            alert(`Parabéns ${numSorteado}, você acertou o número sorteado`);
        } else if (numUsuario > 10) {
            alert('O número precisa ser menor que 10');
        } else if (numUsuario < 0) {
            alert('O número precisa ser maior ou igual a 0');
        } else {
            alert(`Você errou! Tente novamente. O valor correto era: ${numSorteado}`);
        }
    }

} while (numUsuario != numSorteado);


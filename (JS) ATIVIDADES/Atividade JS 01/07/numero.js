// decodificador de inteiro

 let inteiro = function(parseInt){
    if(parseInt > 0){
        console.log('número inteiro')
    } else if (parseInt == 0) {
        console.log('número igual a zero')
    } else {
        console.log('número negativo')
    }
}

inteiro(6) //saida: positivo
inteiro(0) //saida: igual a zero
inteiro(-7) //saida: negativo

inteiro(-7.2) //saida: negativo
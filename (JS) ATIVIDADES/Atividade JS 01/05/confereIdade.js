//conferindo sua idade
const confereIdade = function (idade){
    if(idade < 18){
        console.log('usuário menor de idade')
    } else if(idade >= 18 && idade < 60){
        console.log('usuário adulto')
    } else {
        console.log('usuário idoso')
    }
}

confereIdade('40')
confereIdade('17')
confereIdade('80')
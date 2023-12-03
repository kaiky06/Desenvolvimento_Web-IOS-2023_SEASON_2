const funcionarios = [
    { nome: 'Wally', salario: 4800 },
    { nome: 'João', salario: 6000 },
    { nome: 'Maria', salario: 4500 },
    { nome: 'Carlos', salario: 5200 },
    { nome: 'Ana', salario: 4800 }
];

console.log('Lista de Funcionários:');
funcionarios.forEach(funcionario => {
    console.log(`${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

console.log('-------------------------------')

// reajuste de 5% a todos os funcionários 
const funcionariosReajustados = funcionarios.map(funcionario => {
    return {
        nome: funcionario.nome,
        salario: funcionario.salario * 1.05 // Aumento de 5%
    };
});

//  funcionários que recebem mais de 5000 
const funcionariosAcimaDe5000 = funcionariosReajustados.filter(funcionario => {
    return funcionario.salario > 5000;
});

const wally = funcionariosReajustados.find(funcionario => funcionario.nome === 'Wally');

// Mostrar no console se o funcionário Wally foi encontrado
console.log('Funcionários com reajuste:');
funcionariosReajustados.forEach(funcionario => {
    console.log(`${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

console.log('-------------------------------')

console.log('Funcionários que recebem mais de 5000:');
funcionariosAcimaDe5000.forEach(funcionario => {
    console.log(`${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

console.log('-------------------------------')

if (wally) {
    console.log(`Você encontrou o funcionário Wally! Ele recebe R$ ${wally.salario.toFixed(2)}.`);
} else {
    console.log('Funcionário Wally não encontrado.');
}

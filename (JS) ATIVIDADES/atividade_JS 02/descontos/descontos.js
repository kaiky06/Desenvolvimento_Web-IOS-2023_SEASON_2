alert('Super Mercado fictício')

const valor = prompt('Informe o valor da sua compra:')

alert('agora vamos aplicar o desconto com um de seus cupons:')
alert('DESC1 = 5%')
alert('DESC2 = 10%')
alert('DESC3 = 15%')
alert('DESC4 = 20%')
alert('DESC5 = 25%')

let desconto = prompt('Escolha o cupom que deseja aplicar. por exemplo: desc3').toUpperCase();

let calDesc1 = 5 * valor / 100;
let calDesc2 = 10 * valor / 100;
let calDesc3 = 15 * valor / 100;
let calDesc4 = 20 * valor / 100;
let calDesc5 = 25 * valor / 100;

switch (desconto) {
    case "DESC1":
        alert(`O valor era R$${valor}, com desconto de 5% aplicado, o valor final é de R$${valor - calDesc1}`);
        break;

    case "DESC2":
        alert(`O valor era R$${valor}, com desconto de 10% aplicado, o valor final é de R$${valor - calDesc2}`);
        break;

    case "DESC3":
        alert(`O valor era R$${valor}, com desconto de 15% aplicado, o valor final é de R$${valor - calDesc3}`);

    case "DESC4":
        alert(`O valor era R$${valor}, com desconto de 20% aplicado, o valor final é de R$${valor - calDesc4}`);
        break;

    case "DESC5":
        alert(`O valor era R$${valor}, com desconto de 25% aplicado, o valor final é de R$${valor - calDesc5}`);
        break;
    default:
        alert('ERRO! por favor aplique o desconto corretamente.')
};
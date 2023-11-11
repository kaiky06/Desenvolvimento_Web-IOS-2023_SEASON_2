alert("Vamos calcular o seu IMC")
let altura = Number(window.prompt("Digite a sua altura em metros"))
let peso = Number(window.prompt("Agora digite o seu peso em quilograma (Kg)"))

let IMC = peso / altura * 2
alert(`O seu IMC é: ${IMC}`)

if (IMC > 24.9) {
    alert("você está um pouco acima do peso")

} else if (IMC < 18.5) {
    alert("abaixo do peso")

} else {
    alert("Seu IMC está saudável.")
}   
const prompt = require('prompt-sync')();

const raio = Number(prompt("Digite o raio da caixa: "));
const altura = Number(prompt("Digite a altura da caixa: "));
const pi = 3.14;

if (isNaN(raio) || raio <= 0){
    console.log("Raio inválido!");
    return false;
}

if (isNaN(altura) || altura <= 0){
    console.log("Altura inválido!");
    return false;
}

const volumeFinal = pi * (raio ** 2) * altura;

console.log(`O Volume final será de ${volumeFinal}`);

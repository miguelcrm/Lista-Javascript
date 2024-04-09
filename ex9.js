const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Digite o primeiro número: '))
const numero2 = Number(prompt('Digite o segundo número: '))

if (isNaN(numero1) || numero1 < 0) {
    console.log('Digite um número válido!')
}
if (isNaN(numero2) || numero2 < 0) {
    console.log('Digite um número válido!')
}

const soma = numero1 + numero2;
const multiplicacao = soma * numero1;

console.log(`A soma dos números são ${soma}`);
console.log(`E a multiplicação é igual a ${multiplicacao}`);
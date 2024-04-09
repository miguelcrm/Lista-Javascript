const prompt = require('prompt-sync')();

const carrosvendidos = Number(prompt('Digite o número de carros vendidos: '))
const totalvendas = Number(prompt('Digite o total em R$ das vendas efetuadas: '))
const salario = Number(prompt('Digite o salário fixo: '))
const comissao = Number(prompt('Digite o valor de comissão por carro vendido: '))

if (isNaN(carrosvendidos) || carrosvendidos <= 0) {
    console.log("Valor inválido!");
    return false;
  }
  
if (isNaN(totalvendas) || totalvendas <= 0) {
    console.log("Valor inválido!");
    return false;
  }

if (isNaN(salario) || salario <= 0) {
    console.log("Valor inválido!");
    return false;
}

if (isNaN(comissao) || comissao < 0) {
    console.log("Valor inválido!");
    return false;
  }

const valorComissao = totalvendas * 0.05;
const valorPorCarro = carrosvendidos * comissao;

const salarioFinal = salario + valorComissao + valorPorCarro;

console.log(`O vendedor tem o salário fixo de ${salario}`);
console.log(`O valor que ele recebe por carro vendido é de R$${comissao}`);
console.log(`O número de carros vendidos por ele é de ${carrosvendidos} e o total dessas vendas é ${totalvendas}`);
console.log(`O valor final recebido é de R$${salarioFinal}`);


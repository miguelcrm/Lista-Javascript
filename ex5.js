const prompt = require('prompt-sync')();

const fabrica = Number(prompt("Digite o custo de fábrica do carro: "));
const distribuidor = Number(prompt("Digite a porcentagem cobrada pelo distribuidor: "));
const impostos = Number(prompt("Digite a porcentagem de impostos cobrada: "));

if (isNaN(fabrica) || fabrica <= 0) {
  console.log("Custo de fábrica inválido!");
  return false;
}

if (isNaN(distribuidor) || distribuidor < 0) {
    console.log("Custo do distribuidor inválido!");
    return false;
}

if (isNaN(impostos) || impostos <= 0) {
    console.log("Custo de impostos inválido!");
    return false;
}

const valorDistribuidor = (fabrica * distribuidor) / 100;
const valorImpostos = (fabrica * impostos) / 100;
const custoFinal = fabrica + valorDistribuidor + valorImpostos;

console.log(`Custo de fábrica: R$${fabrica.toFixed(2)}`);
console.log(`Valor do distribuidor: R$${valorDistribuidor.toFixed(2)}`);
console.log(`Valor dos impostos: R$${valorImpostos.toFixed(2)}`);
console.log(`Custo final ao consumidor: R$${custoFinal.toFixed(2)}`);
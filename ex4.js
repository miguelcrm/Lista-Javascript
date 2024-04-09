const prompt = require('prompt-sync')();

const fabrica = Number(prompt("Digite o custo de fábrica do carro: "));

if (isNaN(fabrica) || fabrica <= 0) {
  console.log("Custo de fábrica inválido!");
  return false;
}

const Distribuidor = 28;
const Impostos = 45;
const valorDistribuidor = (fabrica * Distribuidor) / 100;
const valorImpostos = (fabrica * Impostos) / 100;
const custoFinal = fabrica + valorDistribuidor + valorImpostos;

console.log(`Custo de fábrica: R$${fabrica.toFixed(2)}`);
console.log(`Valor do distribuidor: R$${valorDistribuidor.toFixed(2)}`);
console.log(`Valor dos impostos: R$${valorImpostos.toFixed(2)}`);
console.log(`Custo final ao consumidor: R$${custoFinal.toFixed(2)}`);

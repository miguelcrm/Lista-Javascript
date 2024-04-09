const prompt = require('prompt-sync')();

const total = Number(prompt("Digite o número total de eleitores: "));
const Brancos = Number(prompt("Digite o número de votos brancos: "));
const Nulos = Number(prompt("Digite o número de votos nulos: "));
const Validos = Number(prompt("Digite o número de votos válidos: "));

if (isNaN(total) || total <= 0) {
  console.log("Número total de eleitores inválido!");
  return false;
}
if (isNaN(Brancos) || Brancos < 0) {
  console.log("Número de votos brancos inválido!");
  return false;
}
if (isNaN(Nulos) || Nulos < 0) {
  console.log("Número de votos nulos inválido!");
  return false;
}
if (isNaN(Validos) || Validos < 0) {
  console.log("Número de votos válidos inválido!");
  return false;
}

const perc1 = (Brancos / total) * 100;
const perc2 = (Nulos / total) * 100;
const perc3 = (Validos / total) * 100;

console.log(`Total de eleitores: ${total}`);
console.log(`Votos brancos: ${Brancos} (${perc1.toFixed(2)}%)`);
console.log(`Votos nulos: ${Nulos} (${perc2.toFixed(2)}%)`);
console.log(`Votos válidos: ${Validos} (${perc3.toFixed(2)}%)`);

const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));

const mediaFinal = ((nota1 * 4) + (nota2 * 6)) / 10;

console.log(`A média final do aluno é: ${mediaFinal.toFixed(2)}`);

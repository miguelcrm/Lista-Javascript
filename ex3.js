const prompt = require('prompt-sync')();

const salario = Number(prompt("Digite o salário mensal atual: "));
const reajuste = Number(prompt("Digite o percentual de reajuste: "));

if (isNaN(salario) || salario <= 0) {
  console.log("Salário mensal atual inválido!");
  return false;
}
if (reajuste < 0) {
    console.log("Percentual de reajuste inválido!");
    return false;
}

const valorReajuste = (salario * reajuste) / 100;
const novoSalario = salario + valorReajuste;


console.log(`Salário atual: R$${salario.toFixed(2)}`);
console.log(`Reajuste de: ${reajuste}%`);
console.log(`Valor do reajuste: R$${valorReajuste.toFixed(2)}`);
console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);

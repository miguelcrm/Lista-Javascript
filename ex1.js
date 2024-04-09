const prompt = require('prompt-sync')();

const nome = prompt('Nome do Aluno: ');

const nota1 = Number(prompt('Nota 1: '));
const nota2 = Number(prompt('Nota 2: '));
const nota3 = Number(prompt('Nota 3: '));
const nota4 = Number(prompt('Nota 4: '));

if ((nota1 || nota2 || nota3 || nota4) < 0){
    console.log('Notas inválidas!')
    return false;
}

const soma = (nota1 + nota2 + nota3 + nota4) / 4;

console.log('Média alcançada:', soma);

if (soma >= 7) {
    console.log(`O aluno ${nome} foi Aprovado!`);
}
else {
    console.log(`O aluno ${nome} foi Reprovado!`);
}
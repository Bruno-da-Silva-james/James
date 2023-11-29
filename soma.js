const leitor = require("readline-sync");

const meuNome = leitor.question("Ola, insira seu nome: ")
let num1 = leitor.questionInt("Ensira o valor 1: ");
let num2 = leitor.questionInt("Ensira o valor 2: ");
const num3 = num1 + num2;

console.log("Olá, ", meuNome);
console.log("a soma dos valores é: " ,num3);
const leitor = require("readline-sync");

//Exercicio 1
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);
nome = leitor.question("Qual seu nome? ");
idade = leitor.questionInt("Qual sua idade? ")

console.log(typeof nome);
console.log(typeof idade);

console.log("Ola, ", nome, "voce tem , ", idade, "anos!");
//Resposta D 
//Foi dado como undefined pois nao tem valor atribuido as variaveis

//Exercicio 2
let roupa = leitor;
let cafe = leitor;
let curso = leitor;

console.log = leitor.question("Voce esta usando uma roupa azul? ", roupa);
console.log = leitor.question("Voce tomou cafe? ", cafe); 
console.log = leitor.question("Voce foi no curso? ", curso);

//Exercicio 3
let a = 25;
let b = 10;
let c = 0;

c = b;
b = a;
a = c;

console.log(a);
console.log(b);

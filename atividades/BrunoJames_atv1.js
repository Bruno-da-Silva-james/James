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
let roupa = leitor.question("Voce esta usando uma roupa azul? ");
let cafe = leitor.question("Voce tomou cafe? ");
let curso = leitor.question("Voce foi no curso? ");

console.log("Voce esta usando uma roupa azul? ", roupa);
console.log("Voce tomou cafe? ", cafe);
console.log("Voce foi no curso? ", curso);

//Exercicio 3
let a = 25;
let b = 10;
let c = 0;

console.log("Valor de a:", a);
console.log("Valor de b:", b);

c = b;
b = a;
a = c;

console.log("Novo valor de a: ", a);
console.log("Novo valor de b: ", b);
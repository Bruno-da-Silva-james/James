const leitor = require('readline-sync')

//Ex01
let idade = leitor.questionInt("Ensira sua idade ")
let idadeA = leitor.questionInt("Ensira a idade de seu amigo(a) ")

console.log("Sua idade é maior a do seu amigo(a) ", idade > idadeA);
console.log("A diferença de idade ", idade - idadeA, "anos");

//Ex02
let par = leitor.questionInt("Ensira um numero par ")

console.log(par % 2); //C) O resultado sempre sera 0 pois no console.log esta pedindo o resto da divisao
//D) Quando um numero impar é enserido o resultado sempre sera 1 pois a divisao de numeros impar por 2 sobra 1

//Ex03 

console.log("Sua idade em meses ", idade * 12);
console.log("Sua idade em dias ", idade * 12 * 30);
console.log("Sua idade em horas ", idade * 12 * 30 * 24);

//Ex04

let n1 = leitor.questionInt("Ensira um numero ")
let n2 = leitor.questionInt("Ensira outro numero ")

console.log("O primeiro numero é maior que o segundo? ", n1 > n2);
console.log("O primeiro numero é igual ao segundo? ", n1 == n2);
console.log("O primeiro numero é divisivel pelo segundo? ", (n1 % n2) == 0);
console.log("O segundo numero é divisivel pelo primeiro? ", (n2 % n1) ==  0);
const leitor = require('readline-sync')
//ex1
let n1 = leitor.questionInt("Ensira um numero: ")
let n2 = leitor.questionInt("Ensira outro numero: ")
console.log("Soma da adicao: ", n1 + n2);

//ex2
n1 = leitor.questionInt("Ensira um numero: ")
n2 = leitor.questionInt("Ensira outro numero: ")
console.log("Soma da multiplicacao: ", n1 * n2);
div = leitor.questionInt("Ensira um numero a dividir: ")
console.log("Multiplicacao e divisao: ", n1 * n2 / div);

//ex3
n1 = leitor.questionInt("Ensira um numero: ")
n2 = leitor.questionInt("Ensira outro numero: ")
console.log("A soma da subtracao: ", n1 - n2);
multi = leitor.questionInt("Ensira um numero a multiplicar: ")
console.log("Subtracao e multiplicacao: ", (n1 - n2) * multi);

//ex4
n1 = leitor.questionInt("Ensira um numero: ")
div = leitor.questionInt("Ensira um numero a dividir: ")
console.log("Resto da divisao: ", n1 %div);




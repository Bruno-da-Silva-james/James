const leitor = require('readline-sync')

let num = leitor.questionInt("Ensira um numero ")
let num2 = leitor.questionInt("Ensira outro numero ")
let soma = num + num2

if (num > 0 && num2 > 0) {
    console.log(soma);
} else {
    console.log("Invalido");
}
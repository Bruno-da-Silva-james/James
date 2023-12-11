const leitor = require('readline-sync')

let num = leitor.questionInt("Ensira um numero ")
let num2 = leitor.questionInt("Ensira outro numero ")
let mult = num * num2

if ((num % 2) == 0 && (num2 % 2) != 0 || (num % 2) != 0 && (num2 % 2) == 0) {
    console.log(mult);
} else {
    console.log("Invalido");
}
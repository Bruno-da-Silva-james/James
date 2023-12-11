const leitor = require('readline-sync')

let num = leitor.questionInt("Ensira um numero ")
let num2 = leitor.questionInt("Ensira o divisor ")
let div = num / num2

if (num2 != 0) {
    console.log(div);
} else {
    console.log("Invalido");
}
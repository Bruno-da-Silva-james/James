const leitor = require('readline-sync')

let superior = leitor.questionInt("Ensira um numero maior ")
let inferior = leitor.questionInt("Ensira um numero menor ")
let soma = 0
let num

num = inferior
do {
    if('num % 2 = 1');
    {
        soma = soma + num  
        num = num + 1
    }
} while (num <= superior );

console.log(soma);
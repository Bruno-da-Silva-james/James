const leitor = require('readline-sync')

let x = leitor.questionInt("Ensira um numero: ")
let y = leitor.questionInt("Ensira um numero outro numero: ")

console.log("Numero somado: ", x + y );
console.log("Numero dividido: ", x / y);
console.log("Numero subtraido: ", x - y);
console.log("Numero multiplicado: ", x * y);
  
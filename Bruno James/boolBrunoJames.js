const leitor = require("readline-sync")

let a = leitor.questionInt("Ensira um numero: ")
let b = leitor.questionInt("Ensira outro numero: ")

console.log("O primeiro numero é igual ao segundo? ", a == b);
console.log("O primeiro numero é diferente do segundo? ", a !== b);
console.log("O primeiro numero é maior que o segundo? ", a > b);
console.log("O primeiro numero é menor que o segundo? ", a < b);
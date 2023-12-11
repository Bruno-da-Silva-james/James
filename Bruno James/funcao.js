const leitor = require('readline-sync')

let a = leitor.questionInt('Ensira um valor: ')
let b = leitor.questionInt('Ensira outro valor: ')

function media(a,b) {
    let media = (a+b) /2
    console.log(`A media do valor ${a} e ${b} é ${media} `);
    return 0
}

media(a,b)
let prompt= require('prompt-sync')();

let saldo = parseFloat(prompt('o saldo é: '));
let porcentagem = (saldo * 33.33 / 100);

reajuste = saldo + porcentagem;

console.log('o reajuste é: ', reajuste);
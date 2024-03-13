let prompt= require('prompt-sync')();

let saldo = parseFloat(prompt('o saldo é: '));
let porcent = (saldo * 1 / 100) 

reajuste = saldo + porcent 
console.log('o resultado é ', reajuste);


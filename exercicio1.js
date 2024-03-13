let prompt= require('prompt-sync')();

let n1 =25;
let n2 =25;
let n3 =25;


n1 = parseInt(prompt('ola, qual é o valor do 1bim ?: '));
n2 = parseInt(prompt('ola, qual é o valor do 2bim ?: '));
n3 = parseInt(prompt('ola, qual é o valor do 3bim ?: '));

let media = 60;
let resultado
resultado = (n1+n2+n3)/3
console.log('o resultado é: ', resultado);

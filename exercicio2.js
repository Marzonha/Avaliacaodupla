let prompt= require('prompt-sync')();

let dólar
dólar = parseFloat(prompt('qual o valor em $? : '));
reais = (dólar * 4.97 );
console.log('o valor de conversao é', reais);

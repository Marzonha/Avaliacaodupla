let prompt= require('prompt-sync')();
let f;
f = parseFloat(prompt('a temperatura Farenheit é: '));
c = (f - 32) / 1.8
console.log('A temperatura Farenheit é °F',f + ' A temperatura convertida em Celsius é °C', c );
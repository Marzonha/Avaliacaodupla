let prompt= require('prompt-sync')();
let c;
c = parseFloat(prompt('a temperatura Celcius é: '));
f = (c * 1.8) + 32
console.log('A temperatura Celsius é °C',c + ' A temperatura convertida em Farenheint é °F', f );
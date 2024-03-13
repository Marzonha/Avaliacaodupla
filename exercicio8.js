let prompt= require('prompt-sync')();

let salario= parseFloat(prompt('O salário é: '));
percentual = (salario * 5 / 100 );
nvs = percentual + salario;
console.log('o valor do aumento é ', percentual + ' E o valor do novo salario é', nvs);

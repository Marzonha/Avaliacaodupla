let prompt= require('prompt-sync')();

n1 = parseInt(prompt('Digite um número: '));
p_i = n1 % 2
if (p_i == 0) {
    console.log('Par')
}
if (p_i == 1) {
    console.log('Impar')
}
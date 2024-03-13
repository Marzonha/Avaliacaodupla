let prompt= require('prompt-sync')();

let n1 = parseInt(prompt('digite um número: '));

if( n1 >= 0 ){
    res= 'Este número é positivo';
}
else{
res = 'número negativo';
}

console.log(res);
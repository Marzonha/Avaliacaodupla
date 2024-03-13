let prompt= require('prompt-sync')();

let n1;
let n2;
let n3;

soma = prompt('digite a nota do aluno: ');
if (soma >=7){
    res= 'Aluno aprovado ';
}else{
    res = 'Aluno reprovado';
}
console.log(res);
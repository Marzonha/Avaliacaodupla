let prompt= require('prompt-sync')();

let n1;
let n2;
let n3;

soma = prompt('digite a nota do aluno: ');
if (soma >=7){
    if(soma >=5){
        res = 'aluno aprovado';

    }else{
        res= ' aluno em recuperação';
    }
    }else if(soma <=5){
        res='aluno em reprova';
    }
    console.log(res);
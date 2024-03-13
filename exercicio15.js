let prompt= require('prompt-sync')();

let lanche, sabor;

console.log('pizza');
console.log('hamburguer');

lanche = prompt('escolha um lanche: ');

switch(lanche){
    case 'pizza':
    console.log('saindo uma pizza');
    break;

    case 'hamburguer':
        console.log('saindo um hamburguer');
        break;

    default:
        console.log('não houve pedido');

}


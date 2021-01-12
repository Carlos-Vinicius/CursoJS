const numerosPar = [2, 4, 6];
const numerosImp = [1, 3, 5];


const numeros = [...numerosPar, ...numerosImp]; //--> esses ... serve para juntar os array sem divisao

const [num1, num2, ...outrosNumb] = [1, 2, 3, 4, 5, 6]; /*--> aq ele pegou o
resto da array e junto com a variavel outrosNum */

//console.log(num1, num2, outrosNumb);

const [nome1 = 'Carl'] = []; /*--> se eu nao atribuir nenhum valor para o array
 ele passa o valor pre-definido que no caso é Carl*/

const pessoa = {
    nome: 'Carl',
    idade: 30
}

const pessoaComTell = {
    ...pessoa,
    telefone: 242525
}

//console.log(pessoa, pessoaComTell);

//const { nome } = pessoa;

function imprimeDados({nome,idade}) {
    console.log(nome,idade)
}
imprimiDados(pessoa);
//console.log(nome);



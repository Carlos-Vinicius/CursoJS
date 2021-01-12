console.log(`Trabalhando com listas`);
const listaDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`);// add um item na lista
console.log(`Destinos possiveis: `);
console.log(listaDestinos);
/*Vc so consegue add um item em uma lista pq ela nao é alterada e sim so seu
 conteudo a lista continua sendo do tipo const*/

listaDestinos.splice(1, 1); // retira um elemento da lista  ex[posicao,qnt de elemntos que quer apagar]
console.log(listaDestinos);
console.log(listaDestinos[1]);
console.log(listaDestinos[2], listaDestinos[0]);
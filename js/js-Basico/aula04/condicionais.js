console.log(`Trabalhando com Condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;


listaDestinos.push(`Curitiba`);// add um item na lista
console.log("Destinos possiveis");
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade e comprou  a passagem para: " + listaDestinos[1]);
//     listaDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado");
//     listaDestinos.splice(1, 1); // remove um item da lista
// } else {
//     console.log("Comprador menor de idade!!!");
// }


if (idadeComprador >= 18 || estaAcompanhada) {
    listaDestinos.splice(2, 1);
    console.log("Comprador maior de idade e comprou  a passagem para: " + listaDestinos[1]);
} else {
    console.log("Comprador menor de idade!!!");
}

// console.log("Embarque: \n\n"); // \n serve para quebrar linhas
// if (idadeComprador >= 18 && temPassagemComprada) {
//     console.log("Boa viagem");
// }else{
//      console.log("Voce nao pode embarcar sorry...");
// }



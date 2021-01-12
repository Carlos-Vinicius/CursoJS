console.log("\nTrabalhando com Condicionais");
const listaDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";


listaDestinos.push(`Curitiba`);// add um item na lista
console.log("\nDestinos possiveis");
console.log(listaDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador <=3) {
    if (listaDestinos[contador] == destino)  {
        destinoExiste = true;
        break;
    }//else{
    //     destinoExiste = false;
    //     console.log("Destino nao existe");
    // }
    contador +=1;
}

console.log('Destino existe: ',destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem !!");
}else{
    console.log("Erro no sistema");
}

for (let i = 0; i < 3; i++) {
    if (listaDestinos[i] == destino) {
        destinoExiste = true;
    }
}




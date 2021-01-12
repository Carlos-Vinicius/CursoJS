console.log("Atribuicao de Variaveis");


const idade = 29;
let primeiroNome = "Carlos";
const sobrenome ="Vinicius";

// console.log(nome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é: ${primeiroNome} ${sobrenome} `); // jeito de imprir variasveis

//sobrescrevendo variaeis

// primeiroNome = primeiroNome + sobrenome; nao é uma boa pratica fazer isso pois é dificil para
// debugar

// jeito certo

const nomeCompleto = primeiroNome + sobrenome;

console.log(primeiroNome);
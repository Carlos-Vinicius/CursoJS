import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

//const cliente1 = new Cliente(); //--> o cliente é um obj ou instanciando um obj
const cliente1 = new Cliente("Carlos", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
const conta1 = new ContaCorrente(1001,cliente1);
const conta2 = new ContaCorrente(102, cliente2);
conta1.depositar(500);
conta1.sacar(100);
let valor = 200;
//conta1.tranferir(valor,conta2);
//console.log(conta1);

console.log(ContaCorrente.numeroDeContas);

//conta2.cliente = null;
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 88822233309;
//console.log(conta2.cliente);
//console.log(conta2.saldo);
//console.log(conta2);
// conta1.saldo = 0;
//conta1.depositar(500);
// conta1.sacar(200);
// conta1.depositar(-1);
//console.log(conta1);
//console.log(cliente1);
//console.log(cliente2);


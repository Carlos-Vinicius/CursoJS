import { Cliente } from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678);
const gerente = new Gerente("Ricardo", 5000, 12345666);
const cliente = new Cliente("Lais", 12345679, "1452");
diretor.cadastrarsenha("12345678");
gerente.cadastrarsenha("123");


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345678");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1452");

//console.log(gerenteEstaLogado,diretorEstaLogado);
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);







/**import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

//const cliente1 = new Cliente(); //--> o cliente é um obj ou instanciando um obj
const cliente1 = new Cliente("Carlos", 11122233309);
const conta1 = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(ContaSalario); **/

//const conta = new Conta(0, cliente1, 1001);
//console.log(conta);
// conta1.depositar(500);
// conta1.sacar(100);
// contaPoupanca.sacar(10);
//console.log(contaPoupanca);

//console.log(contaPoupanca);
//console.log(conta1);
//const cliente2 = new Cliente("Alice", 88822233309);
//const conta2 = new ContaCorrente(102, cliente2);
//let valor = 200;
//conta1.tranferir(valor,conta2);
//console.log(conta1);



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
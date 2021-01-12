export class Cliente { // a classe é um molde

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome; // --> aqui ele ja esta inicializando a variavel nome
        this._cpf = cpf;// --> aqui ele ja esta inicializando a variavel cpf
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}



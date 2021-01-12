const informacoesClientes = [
    {
        cpf:12358749,
        nome: "Jairo"
    }, {
        cpf: 12358749,
        nome: "Carlos"
    },


]

const conteudoLinha = `
    <tr>
        <td>${informacoesClientes[0].cpf}</td>
        <td>${informacoesClientes[0].nome}</td>
    </tr>
`

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeCliente = (cpf, nome) =>{

    const linha = document.createElement('tr')

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
`
    linha.innerHTML = conteudoLinha
    return linha
}

informacoesClientes.forEach(indice =>{
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})
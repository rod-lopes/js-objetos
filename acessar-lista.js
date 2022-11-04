/*

Desafio: Acessar chaves

Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela

*/

const cliente = {
    Nome: "Rodrigo",
    Idade: 36,
    CPF: "34434944866",
    email: "andre@email.com"
}

const chaves = ["Nome", "Idade", "CPF", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))
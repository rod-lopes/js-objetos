/*
Desafio Printar Informações Objetos

Acessar um objeto com informações de um cliente e exibir essas informações no console.

*/

const cliente = {
    Nome: "Rodrigo",
    Idade: 36,
    CPF: "34434944866",
    email: "andre@email.com"
}

console.log(`Meu nome é: ${cliente.Nome} e tenho ${cliente.Idade} anos.`)
console.log(cliente.CPF.substring(0,3))
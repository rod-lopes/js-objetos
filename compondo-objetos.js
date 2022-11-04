/*
Desafio - Compondo um objeto

Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

*/

const cliente = {
    Nome: "Rodrigo",
    Idade: 36,
    CPF: "1234232332",
    email: "andre@email.com",
    fones: ["23421342134", "123121234214"]
}

cliente.dependentes = {
    nome: "Ana Paula",
    parentesco: "Esposa",
    dataNasc: "13/09/1988"
}

console.log(cliente)
/*
Desafio - Lista de telefones

Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-las, verificando se há mais de um número em algum cadastro.
*/

const cliente = {
    Nome: "Andre",
    Idade: 36,
    CPF: "1234232332",
    email: "andre@email.com",
    fones: ["23421342134", "123121234214"]
}

cliente.fones.forEach(fone => console.log(fone))
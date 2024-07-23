/*
// Erros no node
* throw: uma forma de encerrar um programa, gerenao um novo erro
* try catch: uma forma de evidenciar algo que deu errado em um bloco de codigo e 
* exibir a mensagem de erro.
*/

const x = '10'

// checar se x e um numero

if (!Number.isInteger(x)) {
    throw new Error('O numero de x nao é um inteiro!')
}

console.log('Continuando o codigo..')
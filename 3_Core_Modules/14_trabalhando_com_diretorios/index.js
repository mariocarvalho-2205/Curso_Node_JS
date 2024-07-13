const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {  // verifica se existe diretorio ou nao
    console.log('nao existe')
    fs.mkdirSync('./minhapasta')  // cria o diretorio
} else if (fs.existsSync('./minhapasta')) {
    console.log('existe')
}
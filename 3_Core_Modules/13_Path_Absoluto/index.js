const path = require('path')


console.log(path.resolve('teste.txt'))  // traz o caminho completo do arquivo

// criando path
const midFolder = 'relatorios'
const fileName = 'relatorio.txt'

// sintaxe = path.join('separador', primeira_pasta, pasta_do_meio, arquivo.ext)
const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)
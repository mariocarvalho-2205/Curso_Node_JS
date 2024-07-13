const path = require('path')


// verifica o diretorio, nome do arquivo
const customPath = '/documentos/mario/teste.pdf'

console.log(path.dirname(customPath))  // retorna o diretorio do arquivo
console.log(path.basename(customPath)) // retorna o nome do arquivo
console.log(path.extname(customPath))  // retorna a extensao do arquivo

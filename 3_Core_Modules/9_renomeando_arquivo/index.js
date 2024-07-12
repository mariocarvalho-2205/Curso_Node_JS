const fs = require('fs')
const arquivo = 'arquivo.txt'
const novoArquivo = 'renomado.txt'

fs.rename(arquivo, novoArquivo, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log(`O arquivo ${arquivo} foi renomeado para ${novoArquivo}`)
})
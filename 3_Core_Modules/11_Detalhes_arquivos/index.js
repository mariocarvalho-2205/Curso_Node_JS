const fs = require('fs')

fs.stat('novoarquivo.txt', (err, stats) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(stats.isFile()) // verifica se e um arquivo
    console.log(stats.isDirectory()) // verifica o diretorio
    console.log(stats.isBlockDevice()) // verifica se e um dispositivo de bloco
    console.log(stats.isCharacterDevice()) // verifica se e um dispositivo de caracteres
    console.log(stats.isSymbolicLink()) // verifica se e um link simbolico
    console.log(stats.isFIFO()) // verifica se e um FIFO
    console.log(stats.isSocket()) // verifica se e um socket
    console.log(stats.size) // tamanho do arquivo
    console.log(stats.birthtime) // data de criacao
    console.log(stats.atime) // ultima leitura
    console.log(stats.mtime) // ultima modificacao
    console.log(stats.ctime) // ultima modificacao do conteudo

})


const fs = require('fs')

// removendo um arquivo usamos o comando unlink
fs.unlink('arquivo.txt', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Arquivo Removido')

})
const fs = require('fs')

console.log('inicio')

fs.writeFile('arquivo2.txt', 'oi asincrono', () => {
    setTimeout(() => {
        console.log('arquivo criado com sucesso')
    }, 1000)
})

console.log('fim')
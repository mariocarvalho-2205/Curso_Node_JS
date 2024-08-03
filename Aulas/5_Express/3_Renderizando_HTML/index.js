const express = require('express')
const app = express()
const port = 3000

const path = require('path')  // pega o

const basePath = path.join(__dirname, 'templates')  // pega o endereço da pasta

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)  // seleciona o endereço pego pelo basePath e o arquivo
})

app.listen(port, () => {
    console.log(`Conectado na porta ${port} Render HTML`)
})
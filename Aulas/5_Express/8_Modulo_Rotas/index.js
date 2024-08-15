const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const baseUrl = path.join(__dirname, 'templates')
const users = require('./users/index')
const product = require('./product/index')

app.use(
    express.urlencoded({
        extended: true,
    }))

app.use(express.json())

// aqui e configurada o inicio das rotas do users
app.use('/users', users)
app.use('/product', product)

app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
})

app.listen(port, () => {
    console.log(`Rodando rotas na porta ${port}`)
})

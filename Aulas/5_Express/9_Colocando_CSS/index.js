const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const baseUrl = path.join(__dirname, 'templates')
const user = require('./user/index')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// arquivos estaticos
app.use(express.static('public'))

app.use('/user', user)

app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
})

app.listen(port, () => {
    console.log(`Rodando o CSS na porta ${port}`)
})
const express = require('express')
const app = express()

const port = 3000
const path = require('path')
const baseUrl = path.join(__dirname, 'templates')


// configurar o app para ler o body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


app.get('/users/add', (req, res) => {
    res.sendFile(`${baseUrl}/userForm.html`)
})

app.post('/users/save', (req, res) => { // ficar atento porque a rota no action do form precisa ser a mesma
    console.log(req.body) // req.body recebe os dados como objeto do form
    
    const name = req.body.name
    const idade = req.body.idade

    console.log(`O nome do Usuario é ${name} e ele tem ${idade} anos.`)
    res.sendFile(`${baseUrl}/userForm.html`)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id
    
    console.log(`Buscando o usuario ${id}`)
    
    if(id === 'mario') {
        res.sendFile(`${baseUrl}/user.html`)
    } else {
        res.sendFile(`${baseUrl}/index.html`)
    }
    
})



app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
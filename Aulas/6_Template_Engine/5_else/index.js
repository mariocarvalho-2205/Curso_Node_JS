const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const user = {
        nome: "Mario",
        sobrenome: "Carvalho"
    }
    res.render('dashboard', { title: 'Bem vindo!', user: user})
})

app.get('/', (req, res) => {
    const pessoa = {
        nome: 'Mario',
        idade: 49
    }

    const auth = true
    res.render('home', {pessoa: pessoa, auth})
})

app.listen(port, () => {
    console.log(`else na porta ${port}`)
})
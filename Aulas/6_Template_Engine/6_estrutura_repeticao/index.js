const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const user = {
    name: "Mario",
    sobrenome: "Carvalho"
}

app.get('/client', (req, res) => {
    const clients = ["Adilma", "Joao", "Antonio"]
    let id = 'ID'
    res.render('clients', { user, clients, id })
})
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { user })
})
app.get('/', (req, res) => {
    const auth = true
    res.render('home', {user, auth})
})

app.listen(port, () => {
    console.log(`repetição na porta ${port}`)
})

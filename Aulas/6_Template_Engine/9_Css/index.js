const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// configuração do css
app.use(express.static('public'))  // nome da pasta

const user = {
    name: 'Mario',
    surname: 'Carvalho',
    age: 30
}

const auth = true
const list = [
    'ford',
    'chevrolet',
    'fiat',
    'volkswagen',
]

const modelos = [
    {
        marca: 'Audi',
        modelo: 'A3'
    },
    {
        marca: 'Mercedes',
        modelo: 'C200'
    },
    {
        marca: 'BMW',
        modelo: 'X6'
    },
    {
        marca: 'Lotus',
        modelo: 'Elite'
    },
]

app.get('/modelos', (req, res) => {
    res.render('modelos', { auth, user, modelos})
})

app.get('/carro', (req, res) => {
    res.render('carro', { auth, modelos })
})

app.get('/list', (req, res) => {
    res.render('list', { auth, list })
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { user, auth })
})

app.get('/', (req, res) => {
    res.render('home', { user, auth })
    return user
})

app.listen(port, () => {
    console.log(`CSS Rodando na porta ${port}`)
})
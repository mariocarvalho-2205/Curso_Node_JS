const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', { layout: false })    
})

app.listen(port, () => {
    console.log(`Handlebars com Servidor rodando na porta ${port}`)
})


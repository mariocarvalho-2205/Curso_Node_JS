const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


app.get('/', (req, res) => {
    const user = {
        nome: "Mario",
        sobrenome: "Carvalho"
    }
    const auth = true  // precisa passar o auth na renderização para fazer a validação na view
    res.render('home', { user: user, auth })
})


app.listen(port, () => {
    console.log(`Condicionais na porta ${port}`)
})
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        name: "Mario",
        surname: "Carvalho"
    }

    const palavra = 'Jesus te ama!!'
    res.render('home', { user: user, palavra }) 
})

app.listen(port, () => {
    console.log(`dados rodando na porta ${port}`)
})
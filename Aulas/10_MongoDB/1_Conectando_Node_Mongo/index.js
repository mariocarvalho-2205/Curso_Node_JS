const express = require('express')
const app = express()
const port = 3000
const conn = require('./db/conn')
const exphbs = require('express-handlebars')


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
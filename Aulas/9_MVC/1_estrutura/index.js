const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const port = 3000

app.use(
    express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Conectado na porta ${port}`)
})

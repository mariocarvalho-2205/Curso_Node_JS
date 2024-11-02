const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const productsRoutes = require('./routes/productsRoutes')


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/products', productsRoutes)

try {
    app.listen(port, () => {
        console.log(`Conect in port ${port}`)
    })
} catch (error) {
    console.error('Erro no index', error)
}
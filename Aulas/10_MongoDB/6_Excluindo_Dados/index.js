const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const productRouter = require('./routes/productsRoutes')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/products', productRouter)

try {
    app.listen(port, () => {
        console.info(`Conectado a porta ${port}`)
    })
} catch (error) {
    console.error(error)
}

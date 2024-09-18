const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const conn = require('./db/conn')

// Models
const Task = require('./models/Task')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

conn.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Controller conectado a porta ${port}`)
    })
})
.catch((error) => {
    console.error(error)
})
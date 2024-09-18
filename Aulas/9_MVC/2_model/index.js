const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const conn = require('./db/conn')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const Task = require('./models/Task')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

conn.sync({force: true})
.then(() => {
    app.listen(port, () => {
        console.log(`conectado atraves da porta ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})
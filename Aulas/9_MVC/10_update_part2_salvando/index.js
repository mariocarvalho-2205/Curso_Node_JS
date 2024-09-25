const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const db = require('./db/db')
const taskRoutes = require('./routes/taskRoutes')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const Task = require('./models/Task')

app.use('/tasks', taskRoutes)

db.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Conectou na porta ${port}`)
    })
})
.catch(error => {
    console.log(error)
})
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const conn = require('./db/conn')
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

conn.sync()
.then(() => {
    app.listen(port, () => {
        console.log('conectou na porta', port)
    })
})
.catch((error) => {
    console.log(error, 'error no index listen')
});

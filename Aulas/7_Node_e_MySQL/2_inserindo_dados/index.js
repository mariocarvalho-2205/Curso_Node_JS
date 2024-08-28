const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const mysql = require('mysql')

// configurando para pegar o body
app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty
    console.log(title, pageqty)

    // criando a query de inserção
    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    // passando a query para o banco e callbak de erro
    conn.query(query, function(err) {
        if (err) {
            console.error(err)
        }

        res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if (err) {
        console.error(`Erro ao conectar ${err}`)
    }
    console.log('conectou ao mysql Insert')
    
    app.listen(port, () => {
        console.log(`Node MySQL Insert DATA in port ${port}`)
    })
})
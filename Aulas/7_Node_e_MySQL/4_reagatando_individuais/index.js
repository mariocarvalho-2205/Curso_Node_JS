const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

const port = 3000

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})
app.post('/books/insertbook/', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (title, pageqty) VALUE ('${title}', '${pageqty}')`

    conn.query(query, function(err) {
        if (err) {
            console.log(err);
            return
        }
        res.redirect('/books')
    })

})

app.get('/books', (req, res) => {


    const sql = "SELECT * FROM books"

    conn.query(sql, function (err, data) {
        if (err) {
            console.error(err)
            return
        }

        const books = data
        console.log(books)
        res.render('books', {books})
    })
})




const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if(err) {
        return console.error('error connecting:', err);
    }

    console.log('Conectou ao MySQL dados indicivuais')

    app.listen(port, () => {
        console.log(`Dados individuais na porta ${port}`)
    })

})
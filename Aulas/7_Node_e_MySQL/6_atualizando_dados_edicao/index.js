const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const mysql = require('mysql')

app.use(express.urlencoded({
    extends: true
}))

app.use(express.json())
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books'

    conn.query(query, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const books = data
        res.render('books', {books})
    })
})

app.get('/book/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query(query, function (err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('book', {book})
    })
})

app.get('/insertbook', (req, res) => {
    res.render('insertbook')
})

app.get('/edit/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query(query, function (err, data) {
        if(err) {
            console.log(err)
            return
        }
        const editBook = data[0]
        res.render('edit', {editBook})

    })
})

app.post('/editbook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty
    
    
    console.log(id, title, pageqty)
    
    
    const query = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`
    conn.query(query, function (err) {
        if(err) {
            console.log(err)
            return
        }
    })

    res.redirect('/books')
})

app.post('/insert', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (title, pageqty) VALUE ('${title}', '${pageqty}')`

    conn.query(query, function(err) {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function (err) {
    if(err) {
        console.log(err)
        return
    }

    console.log(`Atualizando dados no MySQL`)

    app.listen(port, () => {
        console.log(`Atualizando atraves da porta ${port}`)
    })
})


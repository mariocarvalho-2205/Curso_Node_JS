const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')
const port = 3000


app.use(express.urlencoded({
    extends: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query = (query, function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        res.render('book', {book})
    })
})

app.get('/books', (req, res) => {
    const query = "SELECT * FROM books"


    conn.query(query, function (err, data) {
        if(err) {
            console.log(err)
            return 
        }
        
        const books = data
        console.log(books)
        res.render('books', {books})
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

conn.connect(function(err) {
    if(err) {
        
        return console.log(err)
    }

    console.log('db connected')
    app.listen(port, () => {
        console.log(`Server running in port ${port}`)
    })
})
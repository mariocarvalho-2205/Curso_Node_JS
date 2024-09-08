const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const pool = require('./db/conn')

app.use(
	express.urlencoded({
		extends: true,
	})
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get('/edit/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    pool.query(query, function(err, data) {
        if(err) {
            console.log(err)
            return
        }
        const editBook = data[0]

        res.render('edit', {editBook})
    })
})

app.get('/book/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    pool.query(query, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', {book})
    })
})

app.get("/books", (req, res) => {
	const query = "SELECT * FROM books";

	pool.query(query, function (err, data) {
		if (err) {
			console.log(err);
			return;
		}
		const books = data;
		res.render("books", { books });
	});
});

app.get('/insertbook', (req, res) => {
    res.render('insert')
})

app.get("/", (req, res) => {
	res.render("home");
});

app.post('/editbook', (req, res) => {
    const { id, title, pageqty} = req.body

    const query = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id} `
    pool.query(query, function (err) {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.post('/insert', (req, res) => {
    const { title, pageqty } = req.body

    const query = `INSERT INTO books (title, pageqty) VALUE ('${title}', '${pageqty}')`

    pool.query(query, function(err) {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.post('/remove/:id', (req, res) => {
    const id = req.params.id
    const query = `DELETE FROM books WHERE id = ${id}`

    pool.query(query, function(err){
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.listen(port, () => {
    console.log(`Connection Pool rodando na porta ${port}`);
});

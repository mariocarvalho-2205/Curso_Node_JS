const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const mysql = require("mysql");

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

    conn.query(query, function(err, data) {
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

    conn.query(query, function(err, data) {
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

	conn.query(query, function (err, data) {
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
    conn.query(query, function (err) {
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

    conn.query(query, function(err) {
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

    conn.query(query, function(err){
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodemysql",
});

conn.connect(function (err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Deletando no MySQL!");

	app.listen(port, () => {
		console.log(`Deletando e rodando na porta ${port}`);
	});
});

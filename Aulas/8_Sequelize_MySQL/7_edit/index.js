const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const conn = require('./db/conn')


app.use(
	express.urlencoded({
		extends: true,
	})
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.get("/", (req, res) => {
	res.render("home");
});

conn.sync()
.then(() => {

    app.listen(port, () => {
        console.log(`Editando na porta ${port}`);
    });
})
.catch((err) => {
    console.log(`Não foi posivel conectar ${err}`)
})

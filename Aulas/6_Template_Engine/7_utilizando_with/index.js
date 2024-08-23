const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const user = {
  nome: "Mario",
  setor: "ADM",
};

const clients = [
    'mario',
    'maria',
    'joao',
    'adilma'
]



const auth = true;

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { user, auth });
});

app.get('/clients', (req, res) => {
    res.render('clients', { user, clients, auth})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender',
        categoria: 'javascript',
        body: 'Artigo principal',
        comments: 4,
    }
    res.render('blogpost', { auth, post})
})

app.get("/", (req, res) => {
  res.render("home", { user, auth });
});

app.listen(port, () => {
  console.log(`With rodando na porta ${port}`);
});

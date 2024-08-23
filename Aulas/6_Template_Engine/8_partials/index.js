const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const user = {
  nome: "Mario",
  setor: "ADM",
};

const clients = ["mario", "maria", "joao", "adilma"];

const auth = true;
const posts = [
  {
    title: "Aprender",
    categoria: "javascript",
    body: "Artigo principal",
    comments: 4,
  },
  {
    title: "Aprender",
    categoria: "python",
    body: "Artigo principal",
    comments: 2,
  },
  {
    title: "Aprender",
    categoria: "react",
    body: "Artigo principal",
    comments: 4,
  },
];

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { user, auth });
});

app.get("/clients", (req, res) => {
  res.render("clients", { user, clients, auth });
});

app.get("/post", (req, res) => {
  res.render("post", {  posts });
});
app.get('/blog', (req, res) => {

  res.render("blog", { auth, posts})
})
app.get("/blogpost", (req, res) => {
  res.render("blogpost", {  auth, posts });
});


app.get("/", (req, res) => {
  res.render("home", { user, auth });
});

app.listen(port, () => {
  console.log(`Partials rodando na porta ${port}`);
});

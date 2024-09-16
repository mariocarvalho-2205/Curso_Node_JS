const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const conn = require("./db/conn");
const User = require("./models/User");
const Addres = require('./models/Address')

app.use(
  express.urlencoded({
    extends: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({where: {id: id}})
    res.redirect('/')
})

app.post("/users/create", async (req, res) => {
  const { name, ocupation } = req.body;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  if (name !== "" || ocupation !== "") {
    await User.create({ name, ocupation, newsletter });
    console.log("Usuario criado com sucesso!");
  } else {
    console.log("Os campos não podem estar vazios");
  }

  res.redirect("/");
});

app.post("/users/update", async (req, res) => {
  const { id, name, ocupation } = req.body;
  let newsletter = req.body.newsletter;

  if (newsletter) {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    ocupation,
    newsletter,
  };

  if (name !== "" || ocupation !== "") {
    await User.update(userData, { where: { id: id } });
    console.log("Dados atualizados com sucesso!");
  } else {
    console.log("Os campos não podem estar vazios.");
  }

  res.redirect("/");
});

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("useredit", { user });
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });
  res.render("home", { users });
});

conn
  .sync()
  //.sync({force: true})
  .then(() => {
    app.listen(port, () => {
      console.log(`Relacionamento rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.log("Erro ao conectar Relacionamento", error);
  });

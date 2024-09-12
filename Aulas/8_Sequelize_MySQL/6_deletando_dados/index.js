const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const conn = require('./db/conn')
const User = require('./models/User')


app.use(
	express.urlencoded({
		extends: true,
	})
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const ocupation = req.body.ocupation
    let newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    if (name !== '' || ocupation !== '') {
        await User.create({ name, ocupation, newsletter})
    } else {
        console.log('Os campos nao podes ser vazios')
    }

    res.redirect('/')
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({where: {id: id}})

    res.redirect('/')

})
app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({raw: true, where: { id: id}})

    res.render('userview', {user})
})

app.get("/", async (req, res) => {

    const users = await User.findAll({raw: true})
	res.render("home", {users});
});

conn.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Removendo items na porta ${port}`);
    });
})
.catch((err) => {
    console.log(`Error na conexao ${err}`)
})
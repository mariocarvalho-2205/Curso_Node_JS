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
    const { name, ocupation } = req.body
    let newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    if ( name !== '' || ocupation !== '') {
        await User.create({ name, ocupation, newsletter})
        console.log('Cadastrado com sucesso')
    } else {
        console.log('Os campos nao podem estar vazios!')
    }

    res.redirect('/')

})

// na rota de update nao usamos o id, somente na rota que pega os dados
app.post('/users/update', async (req, res) => {
    const {id, name, ocupation } = req.body
    let newsletter = req.body.newsletter

    if ( newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    const dataUser = {
        id,
        name,
        ocupation,
        newsletter
    }

    try {
        await User.update(dataUser, { where: {id: id}})
        console.log('Dados atualizados com sucesso')
        
    } catch (error) {
        console.log('Não foi possivel atualizar', error)
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

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({raw: true, where: {id: id}})

    res.render('useredit', {user})
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({raw: true, where: {id: id}})

    res.render('userview', {user})
})

app.get("/", async (req, res) => {
    const users = await User.findAll({raw: true})
	res.render("home", {users});
});


conn
.sync() // metodo para sincronizar normalmente
//.sync({force: true}) // metodo para sincronizar apagando e recriando os modelos e tabelas
.then(() => {
    app.listen(port, () => {
        console.log(`Atualizando dados e conectado na porta ${port}`);
    });
})
.catch((err) => {
    console.error(`Erro na conexão ${err}`)
})

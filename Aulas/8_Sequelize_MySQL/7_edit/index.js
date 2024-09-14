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

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    if (name !== '' || ocupation !== '') {
        await User.create({ name, ocupation, newsletter })
    } else {
        console.log('Os campos não podem estar vazios!')
    }
    res.redirect('/')
})

// app.post('/users/edit/:id', async (req, res) => {
//     const {id, name, ocupation } = req.body
//     let newsletter = req.body.newsletter
//     if (newsletter === 'on) {
//          newsletter = true     
//     } else
//          newsletter = false
//     }
        // const userData = {
        //     id,
        //     name,
        //     ocupation,
        //     newsletter
        // }
//     const user = await User.upadate(userData, {where: { id: id}})
    
    
//     res.redirect('/')
// })

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({where: { id: id }})

    res.redirect('/')
})

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({where: { id: id}, raw: true})
    
    console.log(user)

    res.render('useredit', {user})
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ where: { id: id}, raw: true})

    res.render('userview', {user})
})

app.get("/", async (req, res) => {

    const users = await User.findAll({ raw: true})
	res.render("home", {users});
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

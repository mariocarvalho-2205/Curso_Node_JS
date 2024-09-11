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

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const ocupation = req.body.ocupation
    let newsletter = req.body.newsletter

    // 
    
    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }
    
    if(name !== '' || ocupation !== '' ) {
        await User.create({name, ocupation, newsletter})
    } else {
        console.log('os campos estao vazios')
    }
    console.log(req.body)
    res.redirect('/')
})

app.get("/", (req, res) => {
	res.render("home");
});

conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Inserindo dados com Sequelize na porta ${port}`);
    });
})
.catch((err) => {
    console.log(err)
})
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



app.get("/", (req, res) => {
	res.render("home");
});

conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Model Sequelize na porta ${port}`);
    });

})
.catch ((error) => {
    console.log(error)
})
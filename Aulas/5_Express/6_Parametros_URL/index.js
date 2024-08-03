const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

// // middleware
// const checkAuth = function( req, res, next ) {

//     req.authStatus = true

//     if(req.authStatus) {
//         console.log('Esta Logado em parametros por URL')
//         next()
//     } else {
//         console.log('Não esta logado em parametros por URL')
//         next()
//     }
// }

// app.use(checkAuth)

app.get("/users/:id", (req, res) => {
	const id = req.params.id;

	// leitura da tabela users, resgatar um usuario
	console.log(`Buscando o usuario ${id}`);

	if (id === "mario") {
		res.sendFile(`${basePath}/user.html`);
	} else {
		res.sendFile(`${basePath}/index.html`);
	}
});

app.get("/", (req, res) => {
	res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
	console.log(`App rodando na porta ${port} Parametros por URL`);
});

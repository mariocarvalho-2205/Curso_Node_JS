const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

// middlwares
// checagem
const checkAuth = function(req, res, next) {

    req.authStatus = true  // aqui valida o usuario 
    console.log(req.authStatus, 'req.authStatus')
    console.log(req.params, 'req.params')


    if(req.authStatus) {  // verifica se esta autenticado
        console.log('esta logado')  // na pratica aqui deixa prosseguir
        next()  // segue a aplicação sem parar o fluxo
    } else {
        console.log('Não esta logado, faça o login para continuar!') // aqui barra e direciona para outra pagina
        next()
    }
}


app.use(checkAuth)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
    console.log(`Server rodando na porta ${port} em middlewares`)
})
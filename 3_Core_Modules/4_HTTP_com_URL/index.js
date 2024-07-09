const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require("url").parse(req.url, true)  // pega a url e o parametro
    const name = urlInfo.query.name



    res.statusCode = 200                            // retorna o status da requisição
    res.setHeader('Content-Type', 'text/html')      // muda o header da aplicação com o tipo do conteudo

    if (!name) {
        res.end(`<h1>Ola, Digite seu nome</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" /></form>
        <p>Agora vai</p>`)     // Adiciona o tipo de tag e conteudo

    } else {

        res.end(`<h1>Ola, Seja bem vindo ${name}!</h1>`)     // Adiciona o tipo de tag e conteudo
    }

})

server.listen(port, () => {
    console.log("Rodando na porta html", port)
})
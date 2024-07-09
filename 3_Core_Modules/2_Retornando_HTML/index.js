const http = require("http")
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200                            // retorna o status da requisição
    res.setHeader('Content-Type', 'text/html')      // muda o header da aplicação com o tipo do conteudo
    res.end(`<h1>Ola, Eu venho do node!!</h1>
    <p>Agora vai</p>`)     // Adiciona o tipo de tag e conteudo
})

server.listen(port, () => {
    console.log("Rodando na porta html", port)
})
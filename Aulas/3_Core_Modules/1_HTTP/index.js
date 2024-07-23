const http = require("http")

const port = 3000

// criando servidor
const server = http.createServer((req, res) => {
    res.write("oi HTTP rodando no node")  // write escreve algo na pagina
    res.end()  // encerra o servidor
})

server.listen(port, () => {
    console.log('Rodando na porta ', port)
})
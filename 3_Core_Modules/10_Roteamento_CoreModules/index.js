const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
    

    const q = url.parse(req.url, true)

    const fileName = q.pathname.substring(1)  // pegamos a url, passando o 1 pega o parametro apos a barra/
    // const name = urlInfo.query.name

    if (fileName.includes('html')) { // verifica se tem arquivo html

        if( fs.existsSync(fileName)) {  // verifica se o arquivo existe
            fs.readFile(fileName, function (err, data) {
                res.writeHead(200, { "Content-type" : "text/html"})
                res.write(data)
                return res.end()
            } )
        } else {
            // 404
            fs.readFile('404.html', function (err, data) {
                res.writeHead(404, { "Content-type" : "text/html"})
                res.write(data)
                return res.end()
            } )
        }


    } 


})

server.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})


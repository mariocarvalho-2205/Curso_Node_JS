const express = require('express')
const app = express()
const port = 3001

const path = require('path')
const baseUrl = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${baseUrl}/404.html`)
})

app.listen(port, () => {
    console.log(`404 rodando na port ${port}`)
})
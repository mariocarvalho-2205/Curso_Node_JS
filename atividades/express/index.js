const express = require('express');
const app = express();

const port = 5000;

const path = require('path');
const baseUrl = path.join(__dirname, 'templates');

const user = require('./routes/user')
app.use(express.urlencoded({
    extends: true
}))

app.use(express.json())

app.use('/user', user)

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/home.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
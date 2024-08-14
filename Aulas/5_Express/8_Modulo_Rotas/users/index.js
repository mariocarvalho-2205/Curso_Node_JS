const express = require('express')
const router = express.Router()

// e necessario ter o path e o baseUrl no arquivo de rotas tambem
const path = require('path')
const baseUrl = path.join(__dirname, '../templates')  // aqui a importação da pasta e diferente

// as rotas nao precisam do inicio da url que ja esta configurada no arquivo principal
router.post('/save', (req, res) => {
    console.log(req.body)
    const nome = req.body.name
    const idade = req.body.idade
    console.log(`O Usuario ${nome} tem ${idade} anos`)

    res.sendFile(`${baseUrl}/userCadastrado.html`)
})

router.get('/add', (req, res) => {
    res.sendFile(`${baseUrl}/userForm.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    if(id === 'joao') {
        res.sendFile(`${baseUrl}/user.html`)
    } else {
        res.sendFile(`${baseUrl}/index.html`)
    }
})

module.exports = router
const express = require('express')
const router = express.Router()

const path = require('path')
const baseUrl = path.join(__dirname, '../templates')

router.post('/save', (req, res) => {
    const nome = req.body.nome

    console.log(`O nome cadastrado e ${nome}`)
    res.sendFile(`${baseUrl}/userCadastrado.html`)
})

router.get('/add', (erq, res) => {
    res.sendFile(`${baseUrl}/userForm.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    if(id === 'mario') {
        res.sendFile(`${baseUrl}/searchUser.html`)
    } else {
        res.sendFile(`${baseUrl}/user.html`)
    }
})
router.get('/usuario', (req, res) => {
    res.sendFile(`${baseUrl}/user.html`)
})

module.exports = router
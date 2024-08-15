const express = require('express')
const router = express.Router()

const path = require('path')
const baseUrl = path.join(__dirname, '../templates/user')
console.log(baseUrl, 'router')
console.log(__dirname, 'dirname')

router.post('/save', (req, res) => {
    const nome = req.body.nome
    console.log(nome)
    res.sendFile(`${baseUrl}/user.html`)
})

router.get('/add', (req, res) => {
    res.sendFile(`${baseUrl}/formUser.html`)
})


router.get('/client', (req, res) => {
    res.sendFile(`${baseUrl}/user.html`)
})

module.exports = router
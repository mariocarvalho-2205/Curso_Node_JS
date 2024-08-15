const express = require('express')
const router = express.Router()
const path = require('path')
const baseUrl = path.join(__dirname, '../templates')


router.post('/save', (req, res) => {
    console.log(req.body)
    const produto = req.body.nome_produto
    const tipo = req.body.tipo

    console.log(`O produto ${produto} é do tipo ${tipo}`)

    res.sendFile(`${baseUrl}/product/productCadastrado.html`)
})

router.get('/add', (req, res) => {
    res.sendFile(`${baseUrl}/product/productForm.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    if(id === 'drum') {
        res.sendFile(`${baseUrl}/product/product.html`)
    } else {
        res.sendFile(`${baseUrl}/index.html`)
    }
})

module.exports = router
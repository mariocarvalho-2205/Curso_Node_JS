const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: "API Criada com sucesso!"})
})

app.post('/createproduct', (req, res) => {
    const { name, price } = req.body
    console.log(name, price)

    if(!name || !price) {
        res.status(422).json({message: "O nome ou o preço são obrigatórios!"})
        return
    }
    res.status(201).json({message: `O produto ${name} foi criado com sucesso!`})

})

app.listen(port, () => {
    console.info(`API conectada a porta ${port}`)
})
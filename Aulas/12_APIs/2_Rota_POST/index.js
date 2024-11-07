const express =require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: "API Criada com sucesso" })
})

app.post('/createproduct', (req, res) => {
    const { name, price } = req.body
    console.log(name, price)
    res.json({ message: `O produto ${name} foi criado com sucesso!`})
})

try {
    app.listen(port, () => console.info(`conectou a porta ${port}`))
    
} catch (error) {
    console.error(error)
}
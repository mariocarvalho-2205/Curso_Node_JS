const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// end-points
app.get('/', ( req, res ) => {
    res.status(200).json({ message: "API criada com sucesso!"})
})

app.listen(port, () => {
    console.info(`Conectado a porta ${port}`)
})
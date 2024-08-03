const express = require('express')
const app = express()
const port = 3000  // variavel de ambiente

// criando uma rota teste
app.get('/', (req, res) => {
    res.send('Hello Word! Agora')
})



// conexao com a porta
app.listen(port, () => {
    console.log(`Conectou na porta ${port}`)
})
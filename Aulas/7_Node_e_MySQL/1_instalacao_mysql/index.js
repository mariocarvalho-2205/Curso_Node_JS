const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const mysql = require('mysql')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', )
})

// configuração de conexão com o banco
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

// estabelecendo a conexao com o banco
conn.connect(function(err) {
    if(err){
        console.log(err, 'erro ao conectar')
    }

    console.log('conectou ao mysql')
    app.listen(port, () => {
        console.log(`Servidor Node MySQL rodando na portas ${port}`)
    })
})

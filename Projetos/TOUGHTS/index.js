/*
npm i bcryptjs connect-flash cookie-parser cookie-session express express-flash express-session mysql2 sequelize session-file-store express-handlebars
*/

const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session') // 
const FileStore = require('session-file-store')(session) // salva sessões na pasta sessions
const flash = require('express-flash')

const app = express()
const port = 3000

const db = require('./db/db')

// recebe resposta do body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// config do session middware
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            lofFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'session'),
        }),
        cookie: {
            secure: false,
            maxAge: 3600000, // 1 hora,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
            },

    }),
)


db.sync()
.then(() => {
    app.listen(port, () => {
        console.info(`TOUGHTS conectou na porta ${port}`)
    })
})
.catch(error => {
    console.error(error)
})
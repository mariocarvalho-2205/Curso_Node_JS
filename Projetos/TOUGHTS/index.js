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

// models
const User = require('./models/User')
const Tought = require('./models/Tought')

// import Routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

// Import Controller
const ToughtsController = require('./controllers/ToughtController')


// recebe resposta do body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')



// public
app.use(express.static('public'))

// config do session middware
// responsavel por dizer onde o express vai salvar a sessão
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
        // configuração para salvar o cookie no pc do usuario
        // inclui o tempo em que fica ativo e o tempo que expira
        cookie: {
            secure: false,
            maxAge: 3600000, // 1 dia,
            expires: new Date(Date.now() + 360000),
            // aqui configuramos para usar com http
            httpOnly: true
            },

    }),
)

// habilitando a flash message de erros que serao recebidos no front
app.use(flash())

// set session to res
// configura a resposta vinda do banco
app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

// Routes
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)
// import controller
app.get('/', ToughtsController.showToughts)

db
.sync()
//.sync({ force: true })
.then(() => {
    app.listen(port, () => {
        console.info(`TOUGHTS conectou na porta ${port}`)
    })
})
.catch(error => {
    console.error(error)
})
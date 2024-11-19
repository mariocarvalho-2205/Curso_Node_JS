const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const mongoose = require('./db/conn')

// Config JSON response
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

// Solve CORS - libera a porta para trabalhar com frontend e backend
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

// Public folder for images
app.use(express.static('public'))

// Routes
const router = require('./routes/Routes')
app.use(router)

app.listen(port, () => {
    console.info(`Connect Pet in port ${port}`)
})
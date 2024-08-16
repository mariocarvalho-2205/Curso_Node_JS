const express = require('express')
const router = express.Router()

const path = require('path')
const baseUrl = path.join(__dirname, '../templates')

router.get('/usuario', (req, res) => {
    res.sendFile(`${baseUrl}/user.html`)
})

module.exports = router
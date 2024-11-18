const express = require('express')
const router = express.Router()

// Rotas Users
router.get('/all', (req, res) => {
    res.json({ message: "All Users Ok"})
})



module.exports = router
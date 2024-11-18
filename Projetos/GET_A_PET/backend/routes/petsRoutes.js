const express = require('express')
const router = express.Router()

// Rotas Pets
router.get('/all', (req, res) => {
    res.json({ message: "All pets Ok"})
})

module.exports = router

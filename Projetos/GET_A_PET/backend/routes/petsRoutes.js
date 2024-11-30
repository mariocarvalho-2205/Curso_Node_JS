const router = require('express').Router()
const PetController = require('../controllers/PetController')

// middlewares
const verifyToken = require('../helpers/verify-token')

// Rotas Pets
router.get('/all', (req, res) => {
    res.json({ message: "All pets Ok"})
})

router.post('/create', verifyToken, PetController.create)

module.exports = router

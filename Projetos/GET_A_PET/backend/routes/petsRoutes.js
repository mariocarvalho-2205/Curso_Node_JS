const router = require('express').Router()
const PetController = require('../controllers/PetController')

// Rotas Pets
router.get('/all', (req, res) => {
    res.json({ message: "All pets Ok"})
})

router.post('/create', PetController.create)

module.exports = router

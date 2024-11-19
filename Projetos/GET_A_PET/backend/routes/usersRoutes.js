const router = require('express').Router()
const UserController = require('../controllers/UserController')

// Rotas Users
router.get('/all', (req, res) => {
    res.json({ message: "All Users Ok"})
})

router.post('/register', UserController.register)



module.exports = router
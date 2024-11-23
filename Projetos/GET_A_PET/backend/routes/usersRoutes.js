const router = require('express').Router()
const UserController = require('../controllers/UserController')

// Rotas Users
router.get('/all', (req, res) => {
    res.json({ message: "All Users Ok"})
})

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
router.get('/:id', UserController.getUserById)



module.exports = router
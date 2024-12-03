const router = require('express').Router()
const PetController = require('../controllers/PetController')

// middlewares
const verifyToken = require('../helpers/verify-token')
const { imageUpload }= require('../helpers/image-upload')

// Rotas Pets
router.get('/', PetController.getAll)
router.get('/mypets', verifyToken, PetController.getAllUserPets)

router.post('/create', imageUpload.array('images'), verifyToken, PetController.create)

module.exports = router

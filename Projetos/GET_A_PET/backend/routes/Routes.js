const express = require('express')
const router = express.Router()

const usersRoutes = require('./UsersRoutes')
const petsRoutes = require('./PetsRoutes')

router.use('/users', usersRoutes)
router.use('/pets', petsRoutes)

router.get('/pets/test', (req, res) => {
    res.json({message: "Rota test PET OK"})
}) 
router.get('/users/test', (req, res) => {
    res.json({ message: "Rota test User OK"})
}) 


module.exports = router
const express = require('express')
const router = express.Router()

const usersRoutes = require('./usersRoutes')
const petsRoutes = require('./petsRoutes')

router.use('/api/users', usersRoutes)
router.use('/api/pets', petsRoutes)

router.get('/api/pets/test', (req, res) => {
    res.json({message: "Rota test PET OK"})
}) 
router.get('/api/users/test', (req, res) => {
    res.json({ message: "Rota test User OK"})
}) 


module.exports = router
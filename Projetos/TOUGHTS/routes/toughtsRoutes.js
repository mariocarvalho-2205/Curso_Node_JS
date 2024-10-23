const express = require('express')
const router = express.Router()
const ToughsController = require('../controllers/ToughtController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughsController.createToughts)
<<<<<<< HEAD
router.post('/add', ToughsController.createToughtsSave)
=======
router.post('/add', checkAuth, ToughsController.createToughtsSave)

>>>>>>> fcb94e9d1aa4f0d3bead137103240ec51ee28826
router.get('/dashboard', checkAuth, ToughsController.dashboard)
router.post('/remove', checkAuth, ToughsController.removeToughts)
// router.get('/edit', checkAuth, ToughsController.editToughts)
router.get('/', ToughsController.showToughts)

module.exports = router

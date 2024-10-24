const express = require('express')
const router = express.Router()
const ToughsController = require('../controllers/ToughtController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughsController.createToughts)
router.post('/add', checkAuth, ToughsController.createToughtsSave)
router.get('/edit/:id', checkAuth, ToughsController.updateTought)
router.post('/edit', checkAuth, ToughsController.updateToughtSave)
router.get('/dashboard', checkAuth, ToughsController.dashboard)
router.post('/remove', checkAuth, ToughsController.removeToughts)
router.get('/', ToughsController.showToughts)

module.exports = router

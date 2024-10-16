const express = require('express')
const router = express.Router()
const ToughsController = require('../controllers/ToughtController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughsController.createToughts)
router.post('/add', checkAuth, ToughsController.createToughtsSave)

router.get('/dashboard', checkAuth, ToughsController.dashboard)
router.post('/remove', checkAuth, ToughsController.removeToughts)
// router.get('/edit', checkAuth, ToughsController.editToughts)
router.get('/', ToughsController.showToughts)

module.exports = router

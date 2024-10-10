const express = require('express')
const router = express.Router()
const ToughsController = require('../controllers/ToughtController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughsController.createToughts)
router.get('/dashboard', checkAuth, ToughsController.dashboard)
router.get('/', ToughsController.showToughts)

module.exports = router

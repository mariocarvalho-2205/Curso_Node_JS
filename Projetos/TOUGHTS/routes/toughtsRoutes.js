const express = require('express')
const router = express.Router()
const ToughsController = require('../controllers/ToughtController')


router.get('/', ToughsController.showToughts)

module.exports = router

const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTasks)
router.get('/', TaskController.allTasks)

module.exports = router
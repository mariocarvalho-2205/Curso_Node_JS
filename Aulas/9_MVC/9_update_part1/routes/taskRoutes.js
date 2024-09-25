const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/edit/:id', TaskController.updateTask)
router.post('/remove', TaskController.removeTask)
router.get('/', TaskController.allTasks)

module.exports = router
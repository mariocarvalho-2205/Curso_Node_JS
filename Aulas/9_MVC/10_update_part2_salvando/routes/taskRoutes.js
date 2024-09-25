const express = require('express')
const TaskController = require('../controllers/TaskController')
const router = express.Router()

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.deleteTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.updateTask)
router.get('/', TaskController.allTasks)

module.exports = router
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.deleteTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.updateTask)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.allTasks)

module.exports = router
const Taks = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')  // selecionar a pasta e o arquivo
    }

    static allTasks(req, res) {
        res.render('tasks/all')
    }
}
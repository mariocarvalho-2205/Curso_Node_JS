const Task = require('../models/Task')

module.exports = class TaskController {
    static createTasks (req, res) {
        res.render('tasks/create')
    }

    static async createTasksSave (req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,
        }
        await Task.create(task)

        res.redirect('/tasks/')
    }

    static async allTasks (req, res) {
        const tasks = await Task.findAll({raw: true})


        res.render('tasks/all', { tasks })
    }
}
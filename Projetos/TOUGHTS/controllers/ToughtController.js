const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtsController {
    static async showToughts(req, res) {
        await res.render('toughts/home')
    }
    
    static async dashboard (req, res) {
        await res.render('toughts/dashboard')
    }

    static createToughts(req, res) {
        res.render('toughts/create')


    }
}
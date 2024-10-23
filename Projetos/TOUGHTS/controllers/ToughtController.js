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

    static async createToughtsSave(req, res) {
        const tought = {
            title: req.body.title,
            UserId: req.body.UserId
        }

        console.log( tought)
        try {
            await Tought.create(tought)
            console.log('pensamento inserido com sucesso')
            req.flash('message', 'Pensamento criado com sucesso!')
            
            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })

        } catch (error) {
            console.error("Erro no create Tought Save", error)
        }
    }
}
const { Sequelize } = require('sequelize')

const db = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    db.authenticate()
    console.info('TOUGHTS conectou ao MySQL')
} catch (error) {
    console.error(error)
}

module.exports = db
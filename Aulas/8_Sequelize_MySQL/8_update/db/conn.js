const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn
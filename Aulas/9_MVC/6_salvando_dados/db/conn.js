const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    conn.authenticate()
    console.log('Salvando dados conectou ao MySQL')
} catch (error) {
    console.log('Erro em conn salvando dados', error)
}

module.exports = conn
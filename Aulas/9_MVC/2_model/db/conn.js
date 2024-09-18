const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    conn.authenticate()
    console.log('Model conectado ao MySQL')
} catch (error) {
    console.error(`Erro na conexao com o MySQL`, error)
}

module.exports = conn
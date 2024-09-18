const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodemvc', 'root','', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    conn.authenticate()
    console.log('Conectou ao MySQL')
} catch (error) {
    console.log(`Erro na conexão MySQL - ${error}`)
}

module.exports = conn
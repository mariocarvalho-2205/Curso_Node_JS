const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    
    conn.authenticate()
    console.log('Resgatando dados / Conectou ao MySQL')
} catch (error) {
    console.log('Erro na conexão Mysql', error)
}

module.exports = conn
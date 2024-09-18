const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    conn.authenticate()
    console.log('Controller conectado ao mysql')
} catch (error) {
    console.log('Erro na conecão MySQL', error)
}

module.exports = conn
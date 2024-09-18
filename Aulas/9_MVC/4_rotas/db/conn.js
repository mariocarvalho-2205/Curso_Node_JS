const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    conn.authenticate()
    console.log('Rota conectada com sucesso ao mysql!')
} catch (error) {
    console.log('Rotas foi possivel conectar ao mysql', error)    
}

module.exports = conn
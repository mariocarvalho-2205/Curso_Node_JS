const { Sequelize } = require('sequelize')

const conn = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    conn.authenticate()
    console.log('Conectado ao MySQL com Sucesso!')
} catch (error) {
    console.log('Não foi possível conectar ao MySQL')
}
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// try {
    
//     sequelize.authenticate()
//     console.log('Conectamos o Sequelize')
// } catch (error) {
//     console.log('Não foi possivel conectar model ao mysql')
// }

module.exports = sequelize
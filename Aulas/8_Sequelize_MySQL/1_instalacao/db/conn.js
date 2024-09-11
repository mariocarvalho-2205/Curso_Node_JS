const { Sequelize } = require('sequelize')

/* nome do banco passa na instancia 
 * sintaxe: const variavel = new Sequelize('nome banco', 'usuario', 'senha', {
 * objeto com configurações
 * host: 'localhost',
 * dialect: 'tipo do banco se e mysql postgree ou outros'
 * })
 */
const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    // invocando função de autenticão
    sequelize.authenticate()
} catch (error) {
    console.log('Não foi possivel conectar ao banco na instalação', error)
}

module.exports = sequelize
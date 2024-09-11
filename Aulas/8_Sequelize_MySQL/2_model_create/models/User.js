// importação dos Datatypes do sequelize para ter acesso a todos os tipos de modos do banco
const { DataTypes } = require('sequelize')

// precisamos ter a conexão com o banco
const db = require('../db/conn')

// db.define define o model no banco e os tipos 
/*
Sintaxe:
db.define('Nome do Model', {
    chave: {
        type: Datatypes.String
    }
})
*/
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false  // nao acieta valores nulos
    },
    ocupation: {
        type: DataTypes.STRING,
        require: true,  // campos obrigatórios
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

// realiza a importação no index
module.exports = User
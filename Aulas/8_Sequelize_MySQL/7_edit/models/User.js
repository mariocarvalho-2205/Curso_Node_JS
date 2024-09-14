const { DataTypes } = require('sequelize')

const conn = require('../db/conn')

const User = conn.create('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ocupation: {
        type: DataTypes.STRING,
        require: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = User
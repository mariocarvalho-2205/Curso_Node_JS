const { DataTypes } = require('sequelize')
const conn = require('../db/conn')
const User = require('./User')

const Address = conn.define('Address', {
    rua: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bairro: {
        type: DataTypes.STRING,
    }
})

User.hasMany(Address)
Address.belongsTo(User)

module.exports = Address
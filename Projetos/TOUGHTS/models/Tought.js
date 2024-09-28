const { DataTypes } = require('sequelize')
const db = require('../db/db')

const User = require('../models/User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
})

User.hasMany(Tought)
Tought.belongsTo(User)

module.exports = Tought
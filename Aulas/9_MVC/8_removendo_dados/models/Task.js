const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.STRING,
        required: true
    }

})

module.exports = Task
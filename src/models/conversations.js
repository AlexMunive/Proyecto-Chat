const db = require('../utils/database')
const { DataTypes } = require('sequelize')


const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Categories
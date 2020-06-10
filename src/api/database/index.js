const Sequelize = require ('sequelize')
const database = require('../config/database')

const connection = new Sequelize(database)

module.exports = connection
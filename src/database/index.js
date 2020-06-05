const Sequelize = require ("sequelize")
const dbConfig = require("../config/database")

const Pokemon = require("../models/Pokemon")

const connection = new Sequelize(dbConfig)

Pokemon.init(connection)

module.exports = connection
const Sequelize = require ("sequelize")
const database = require("../database")

const Pokemons = database.define('pokemons', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    tipo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    treinador: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    nivel: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
}, {
        timestamps: false,
        schema: 'LUCAS'
    })

module.exports = Pokemons

// Pokemons.sync({
//     logging: console.log,
//     force: true
// })
// .then(() => {
//     console.log("connection sucessfully")
// }).catch(err => {
//     console.error("unable to connect", err)
// })
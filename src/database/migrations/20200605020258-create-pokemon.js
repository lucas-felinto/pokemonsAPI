'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pokemons', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        treinador: {
          type: Sequelize.STRING,
          allowNull: false
        },
        nivel: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
      },
      {
        schema: 'LUCAS'
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('pokemons')
  }
};
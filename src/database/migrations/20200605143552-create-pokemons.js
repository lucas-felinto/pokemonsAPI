'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('LUCAS.pokemons', { 
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
        tableName: 'pokemons',
      	timestamps: false,
	      freezeTableName: true,
        schema: 'LUCAS'
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('LUCAS.pokemons')
  }
};
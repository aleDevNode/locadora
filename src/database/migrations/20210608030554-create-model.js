'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING,
        allowNull:false
      },
      model: {
        type: Sequelize.STRING,
        allowNull:false
      },
      type: {
        type: Sequelize.STRING,
        allowNull:false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('models');
  }
};
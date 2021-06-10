'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('agencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      workin_hours: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'address'
          },
          key:'id'
        }
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

    await queryInterface.dropTable('agencies');

  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      os: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      date_location: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      date_delivery: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      odometer: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      type_payment: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      customer_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'customers'
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
     await queryInterface.dropTable('orders');
     
  }
};



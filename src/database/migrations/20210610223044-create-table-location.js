'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('location', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'orders'
          },
          key:'id'
        }
      },
      car_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'cars'
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
   await queryInterface.dropTable('location');
     
  }
};


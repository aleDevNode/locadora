'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      renavan: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull:false
      },
      type: {
        type: Sequelize.STRING,
        allowNull:false
      },
    
      plate: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
     
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      models_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'models'
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
    
      await queryInterface.dropTable('cars');
     
  }
};



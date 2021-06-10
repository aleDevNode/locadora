'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('customers', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cnh: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      card: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cellphone: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      birth_at: {
        type: Sequelize.DATE,
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
   
     await queryInterface.dropTable('customers');
     
  }
};



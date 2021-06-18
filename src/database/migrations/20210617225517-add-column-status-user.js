'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.addColumn('users', 'status',{type:Sequelize.INTEGER,allowNull:false,defaultValue:1});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.removeColumn('users','status');
    
  }
};

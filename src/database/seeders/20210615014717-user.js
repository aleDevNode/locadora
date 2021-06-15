'use strict';
require('dotenv').config()
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [{
        name: 'Alessandro Barbosa Vitorio',
        email: process.env.USER_EMAIL,
        login: process.env.USER_LOGIN,
        password: bcrypt.hashSync(process.env.USER_PASS,10),
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
      
    }
};

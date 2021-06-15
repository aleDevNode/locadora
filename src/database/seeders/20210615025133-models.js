'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('models', [
      {
        marca: 'Chevrolet',
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        marca: 'Ford',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        marca: 'Fiat',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        marca: 'Honda',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        marca: 'Nissan',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        marca: 'Toyota',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        marca: 'Volksvagen',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('models', null, {});

  }
};
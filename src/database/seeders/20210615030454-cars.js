'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('cars', [
      {
        renavan:'00421412440',
        color:'Branco',
        model:'Onix Sedan 1.5 Flex-Power',
        type:'Passageiro',
        plate:'FKK-1245',
        year:2020,
        status:1,
        models_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        renavan:'00542123004',
        color:'Preto',
        model:'EcoSport 2.0 Flex-Power',
        type:'Mista',
        plate:'FAF-2802',
        year:2021,
        status:1,
        models_id:2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        renavan:'01210014444',
        color:'Prata',
        model:'Siena 1.4 Fire',
        type:'Passageiro',
        plate:'GID-2424',
        year:2018,
        status:1,
        models_id:3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('cars', null, {});
    
  }
};

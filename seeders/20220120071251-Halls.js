'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Halls', [
      {
        name: 'Velika sala',
        noOfSeats: 900,
        description: 'Gledaliste se sastoji od partera sa 600 mesta i balkona sa dva nivoa, od po 125 mesta, kao i VIP sekcija od 50 mesta'
      },{
        name: 'Mala sala',
        noOfSeats: 150,
        description: 'Gledaliste se sastoji od partera sa 150 sedista'
      },{
        name: 'Sala Zmaj',
        noOfSeats: 400,
        description: 'Gledaliste se sastoji od partera sa 300 mesta i balkona sa 100 mesta'
      },{
        name: 'Sala Jovan Djordjevic',
        noOfSeats: 500,
        description: 'Gledaliste se sastoji od partera sa 350 mesta, balkona sa 125 mesta i VIP sekcije sa 25 mestav'
      },{
        name: 'Sala Pera Dobrinovic',
        noOfSeats: 200,
        description: 'Gledaliste se sastoji od partera sa 200 sedista'
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Halls', null, {});
  }
};
 
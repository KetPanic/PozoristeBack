'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Halls', [
      {
        name: 'Velika sala',
        noOfSeats: 900,
        description: 'Gledaliste se sastoji od partera sa 600 mesta i balkona sa dva nivoa, od po 125 mesta, kao i VIP sekcija od 50 mesta',
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'Mala sala',
        noOfSeats: 150,
        description: 'Gledaliste se sastoji od partera sa 150 sedista',
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'Sala Zmaj',
        noOfSeats: 400,
        description: 'Gledaliste se sastoji od partera sa 300 mesta i balkona sa 100 mesta',
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'Sala Jovan Djordjevic',
        noOfSeats: 500,
        description: 'Gledaliste se sastoji od partera sa 350 mesta, balkona sa 125 mesta i VIP sekcije sa 25 mestav',
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'Sala Pera Dobrinovic',
        noOfSeats: 200,
        description: 'Gledaliste se sastoji od partera sa 200 sedista',
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Halls', null, {});
  }
};
 
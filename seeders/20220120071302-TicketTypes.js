'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TicketTypes', [
      {
        name: 'Premium',
        price: 1500,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'VIP',
        price: 1000,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'Standard',
        price: 800,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'Decja',
        price: 400,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        name: 'Student',
        price: 500,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TicketTypes', null, {});
    
  }
};
 
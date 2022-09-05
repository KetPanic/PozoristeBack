'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TicketTypes', [
      {
        name: 'Premium',
        price: 1500,
      },{
        name: 'VIP',
        price: 1000,
      },{
        name: 'Standard',
        price: 800,
      },{
        name: 'Decja',
        price: 400,
      },{
        name: 'Student',
        price: 500,
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TicketTypes', null, {});
    
  }
};
 
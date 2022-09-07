'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservations', [
      {
        noOfTickets: 3,
        userId: 2,
        ticketId: 5,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        noOfTickets: 1,
        userId: 1,
        ticketId: 5,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        noOfTickets: 3,
        userId: 2,
        ticketId: 4,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        noOfTickets: 4,
        userId: 4,
        ticketId: 5,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        noOfTickets: 3,
        userId: 1,
        ticketId: 2,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
 
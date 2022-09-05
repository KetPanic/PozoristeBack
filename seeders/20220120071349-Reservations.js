'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservations', [
      {
        noOfTickets: 3,
        userId: 2,
        ticketId: 5
      },{
        noOfTickets: 1,
        userId: 1,
        ticketId: 5
      },{
        noOfTickets: 3,
        userId: 2,
        ticketId: 4
      },{
        noOfTickets: 4,
        userId: 4,
        ticketId: 5
      },{
        noOfTickets: 3,
        userId: 1,
        ticketId: 2
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
 
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tickets', [
      {
        number: 100,
        ticketTypeId: 5,
        repertoireId: 1,
      },{
        number: 200,
        ticketTypeId: 3,
        repertoireId: 3,
      },{
        number: 12,
        ticketTypeId: 5,
        repertoireId: 2,
      },{
        number: 54,
        ticketTypeId: 4,
        repertoireId: 1,
      },{
        number: 35,
        ticketTypeId: 2,
        repertoireId: 1,
      },{
        number: 40,
        ticketTypeId: 2,
        repertoireId: 4,
      },{
        number: 50,
        ticketTypeId: 1,
        repertoireId: 4,
      },{
        number: 60,
        ticketTypeId: 1,
        repertoireId: 5,
      },{
        number: 70,
        ticketTypeId: 5,
        repertoireId: 5,
      },{
        number: 200,
        ticketTypeId: 1,
        repertoireId: 6,
      },{
        number: 60,
        ticketTypeId: 4,
        repertoireId: 6,
      },{
        number: 35,
        ticketTypeId: 3,
        repertoireId: 6,
      },{
        number: 80,
        ticketTypeId: 2,
        repertoireId: 8,
      },{
        number: 95,
        ticketTypeId: 2,
        repertoireId: 9,
      },{
        number: 50,
        ticketTypeId: 2,
        repertoireId: 9,
      },{
        number: 40,
        ticketTypeId: 2,
        repertoireId: 10,
      },{
        number: 100,
        ticketTypeId: 1,
        repertoireId: 10,
      },{
        number: 150,
        ticketTypeId: 2,
        repertoireId: 10,
      },{
        number: 78,
        ticketTypeId: 1,
        repertoireId: 11,
      },{
        number: 32,
        ticketTypeId: 3,
        repertoireId: 11,
      },{
        number: 111,
        ticketTypeId: 1,
        repertoireId: 12,
      },{
        number: 45,
        ticketTypeId: 4,
        repertoireId: 12,
      },{
        number: 56,
        ticketTypeId: 1,
        repertoireId: 13,
      },{
        number: 32,
        ticketTypeId: 3,
        repertoireId: 7,
      },{
        number: 98,
        ticketTypeId: 1,
        repertoireId: 7,
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
 
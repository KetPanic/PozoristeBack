'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tickets', [
      {
        number: 100,
        ticketTypeId: 5,
        repertoireId: 1,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 200,
        ticketTypeId: 3,
        repertoireId: 3,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 12,
        ticketTypeId: 5,
        repertoireId: 2,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 54,
        ticketTypeId: 4,
        repertoireId: 1,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 35,
        ticketTypeId: 2,
        repertoireId: 1,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 40,
        ticketTypeId: 2,
        repertoireId: 4,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 50,
        ticketTypeId: 1,
        repertoireId: 4,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 60,
        ticketTypeId: 1,
        repertoireId: 5,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 70,
        ticketTypeId: 5,
        repertoireId: 5,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 200,
        ticketTypeId: 1,
        repertoireId: 6,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 60,
        ticketTypeId: 4,
        repertoireId: 6,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 35,
        ticketTypeId: 3,
        repertoireId: 6,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 80,
        ticketTypeId: 2,
        repertoireId: 8,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 95,
        ticketTypeId: 2,
        repertoireId: 9,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 50,
        ticketTypeId: 2,
        repertoireId: 9,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 40,
        ticketTypeId: 2,
        repertoireId: 10,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 100,
        ticketTypeId: 1,
        repertoireId: 10,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 150,
        ticketTypeId: 2,
        repertoireId: 10,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 78,
        ticketTypeId: 1,
        repertoireId: 11,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 32,
        ticketTypeId: 3,
        repertoireId: 11,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 111,
        ticketTypeId: 1,
        repertoireId: 12,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 45,
        ticketTypeId: 4,
        repertoireId: 12,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 56,
        ticketTypeId: 1,
        repertoireId: 13,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 32,
        ticketTypeId: 3,
        repertoireId: 7,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },{
        number: 98,
        ticketTypeId: 1,
        repertoireId: 7,
        createdAt:'2022-09-07',
        updatedAt: '2022-09-07'
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
 
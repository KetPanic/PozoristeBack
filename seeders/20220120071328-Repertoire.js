'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Repertoires', [
      {
      dateTime: '2022-10-25',
      time: '20:0:0',
      showId: 1,
      hallId: 2
    },{
      dateTime: '2022-10-05',
      time: '20:0:0',
      showId: 2,
      hallId: 1
    },{
      dateTime: '2022-10-11',
      time: '20:30:0',
      showId: 3,
      hallId: 1
    },{
      dateTime: '2022-11-15',
      time: '20:0:0',
      showId: 4,
      hallId: 5
    },{
      dateTime: '2022-12-15',
      time: '20:0:0',
      showId: 5,
      hallId: 4
    },{
      dateTime: '2022-10-03',
      time: '19:0:0',
      showId: 6,
      hallId: 3
    },{
      dateTime: '2022-10-15',
      time: '18:0:0',
      showId: 7,
      hallId: 2
    },{
      dateTime: '2022-09-15',
      time: '19:0:0',
      showId: 8,
      hallId: 1
    },{
      dateTime: '2022-10-15',
      time: '17:0:0',
      showId: 9,
      hallId: 5
    },{
      dateTime: '2022-10-15',
      time: '19:0:0',
      showId: 10,
      hallId: 4
    },{
      dateTime: '2022-11-01',
      time: '18:0:0',
      showId: 1,
      hallId: 3
    },{
      dateTime: '2022-10-04',
      time: '21:0:0',
      showId: 2,
      hallId: 2
    },{
      dateTime: '2022-09-13',
      time: '19:0:0',
      showId: 3,
      hallId: 1
    },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('Repertoires', null, {});

  }
};
 
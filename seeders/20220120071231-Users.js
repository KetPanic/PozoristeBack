'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
         username: 'admin',
         password: bcrypt.hashSync('admin', 10),
         name: "Catherine",
         surname: "Black",
         email: "admin@gmail.com",
         type: 0
       },{
        username: 'moderator',
        password: bcrypt.hashSync('moderator', 10),
        name: "Mora",
        surname: "Gray",
        email: "moderator@gmail.com",
        type: 1
      },{
        username: 'user',
        password: bcrypt.hashSync('user', 10),
        name: "Danielle",
        surname: "Smith",
        email: "user@gmail.com",
        type: 2
      },{
        username: 'qwerty',
        password: bcrypt.hashSync('qwerty', 10),
        name: "John",
        surname: "Green",
        email: "qwerty@gmail.com",
        type: 0
      },{
        username: 'asd',
        password: bcrypt.hashSync('asd', 10),
        name: "Daisy",
        surname: "Love",
        email: "asd@gmail.com",
        type: 1
      },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
 
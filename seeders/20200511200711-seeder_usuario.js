'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('usuario', 
    [{
      nome: 'David',
      email: 'david@facebook.com',
      senha: bcrypt.hashSync('123456', 10),
      isBetaMember: false
    },
    {
      nome: 'Paula',
      email: 'paula@facebook.com',
      senha: bcrypt.hashSync('123456', 10),
      isBetaMember: false
    },
    {
      nome: 'Adler',
      email: 'adler@facebook.com',
      senha: bcrypt.hashSync('123456', 10),
      isBetaMember: false
    }  
    ],
    {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('usuario', null, {});
  }
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.createTable('endereco', {
      id_endereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      endereco: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      complemento: Sequelize.STRING(100),
      cep: Sequelize.STRING(8),
      uf: Sequelize.STRING(2),
      fk_usuario: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: { model: 'usuario', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.dropTable('endereco');
  }
};

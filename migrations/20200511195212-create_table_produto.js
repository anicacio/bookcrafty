'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.createTable('produto', {
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      imagem: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      fk_categoria: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: { model: 'categoria', key: 'id_categoria' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_editora: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: { model: 'editora', key: 'id_editora' },
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
    return queryInterface.dropTable('produto');
  }
};

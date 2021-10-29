'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('parking', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      slot: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    }).then(function () {
      queryInterface.sequelize.query("insert into parking (name, slot) values ('Test1', 5)");
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

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
      reserve: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
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

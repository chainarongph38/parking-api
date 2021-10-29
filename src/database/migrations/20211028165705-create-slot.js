'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('slot', {
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
      is_available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      parking_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'parking', key: 'id' }
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
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-01', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-02', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-03', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-04', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-05', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-06', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-07', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-08', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-09', 1)");
      queryInterface.sequelize.query("insert into slot (name, parking_id) values ('A-10', 1)");
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

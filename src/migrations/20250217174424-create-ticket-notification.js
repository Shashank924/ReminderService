'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TicketNotifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        allowNull : false
      },
      content: {
        type: Sequelize.STRING,
        allowNull : false
      },
      recipientMail: {
        type: Sequelize.STRING,
        allowNull : false
      },
      status: {
        type: Sequelize.ENUM,
        values : ['PENDING' , 'SUCCESS' , 'FAILED'],
        defaultValue : 'PENDING'
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TicketNotifications');
  }
};
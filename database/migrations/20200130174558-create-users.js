'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      urlImg: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      firstName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      about: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: 'About me'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
};

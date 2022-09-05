'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(6000)
      },
      image: {
        type: DataTypes.BLOB('long'),
        get () { // define a getter
          const data = this.getDataValue('image')
          return data ? data.toString('base64') : ''
        },
        set(val) {
          this.setDataValue('image', val);
        }
      },
      poster: {
        type: DataTypes.BLOB('long'),
        get () { // define a getter
          const data = this.getDataValue('poster')
          return data ? data.toString('base64') : ''
        },
        set(val) {
          this.setDataValue('poster', val);
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Shows');
  }
}; 
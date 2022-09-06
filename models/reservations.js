'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Tickets}) {
      this.belongsTo(Users, {foreignKey: 'userId', as: 'user'});
      this.belongsTo(Tickets, {foreignKey: 'ticketId', as: 'ticket'});
      
    }
  };
  Reservations.init({
    noOfTickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:1
      }
    }
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
}; 
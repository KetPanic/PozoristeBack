'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Reservations, Repertoire, TicketTypes}) {
      this.hasMany(Reservations, {as: "reservation", foreignKey: 'ticketId', onDelete:'cascade', hooks:true});
      this.belongsTo(Repertoire, {foreignKey: 'repertoireId', as: 'repertoire'});
      this.belongsTo(TicketTypes, {foreignKey: 'ticketTypeId', as: 'ticketType'});
    }
  };
  Tickets.init({
    number: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        min:0
      }
    }
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
}; 
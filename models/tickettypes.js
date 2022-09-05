'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tickets}) {
      this.hasMany(Tickets, {as: "tickets", foreignKey: 'ticketTypeId', onDelete:'cascade', hooks:true});
    }
  };
  TicketTypes.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:0
      }
    }
  }, {
    sequelize,
    modelName: 'TicketTypes',
  });
  return TicketTypes;
}; 
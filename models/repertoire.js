'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repertoire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tickets, Shows, Halls}) {
      this.hasMany(Tickets, {as: "tickets", foreignKey: 'repertoireId', onDelete:'cascade', hooks:true});
      this.belongsTo(Shows, {foreignKey: 'showId', as: 'show'});
      this.belongsTo(Halls, {foreignKey: 'hallId', as: 'hall'});
    }
  };
  Repertoire.init({
    dateTime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Repertoire',
  });
  return Repertoire;
}; 
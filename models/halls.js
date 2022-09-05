'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Halls extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Repertoire}) {
      this.hasMany(Repertoire, {as: "repertoires", foreignKey: 'hallId', onDelete:'cascade', hooks:true});
    }
  };
  Halls.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    noOfSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:0
      }
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Halls',
  });
  return Halls;
}; 
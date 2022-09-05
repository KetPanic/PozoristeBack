'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Shows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Repertoire, Comments}) {
      this.hasMany(Repertoire, {as: "repertoires", foreignKey: 'showId', onDelete:'cascade', hooks:true});
      this.hasMany(Comments, { foreignKey: 'showId', as: 'comments', onDelete: 'cascade', hooks: true });
    }
  };
  Shows.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING(6000),
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
    }
  }, {
    sequelize,
    modelName: 'Shows',
  });
  return Shows;
}; 
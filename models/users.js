'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Reservations, Comments}) {
      this.hasMany(Reservations, {as: "reservation", foreignKey: 'userId', onDelete:'cascade', hooks:true})
      this.hasMany(Comments, { foreignKey: 'userId', as: 'comments', onDelete: 'cascade', hooks: true });
    }
  };
  Users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 255]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        min:0,
        max:2
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
}; 
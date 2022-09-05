'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Shows}) {
      this.belongsTo(Users, {foreignKey: 'userId', as: 'user'});
      this.belongsTo(Shows, {foreignKey: 'showId', as: 'show'});
    }
  }
  Comments.init({
    text: {
      type: DataTypes.STRING(2048),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};
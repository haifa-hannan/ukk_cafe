'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.role,{
        foreignKey: "id",
        as: "role_user"
      })

      this.hasMany(models.transaksi,{
        foreignKey: "user_transaksi",
        as: "transaksis"
      })
    }
  }
  user.init({
    name: DataTypes.STRING,
    role: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user',
  });
  return user;
};
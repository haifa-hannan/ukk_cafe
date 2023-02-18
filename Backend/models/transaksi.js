'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{
        foreignKey: "id_users",
        as: "users_transaksi"
      })

      this.belongsTo(models.meja,{
        foreignKey: "id_meja",
        as: "meja_transaksis"
      })

      this.hasMany(models.detail_transaksi, {
        foreignKey:"id_detail_transaksi",
        as: "detail_transaksis"
      })
    }
  }
  transaksi.init({
    tanggal_transaksi: DataTypes.DATE,
    id_user: DataTypes.INTEGER,
    id_meja: DataTypes.INTEGER,
    nama_pelanggan: DataTypes.STRING,
    status_pembayaran: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transaksi',
    tableName: 'transaksi'
  });
  return transaksi;
};
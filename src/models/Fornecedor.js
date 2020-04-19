
const { Model, DataTypes } = require('sequelize');
const connection = require('../database')

class Fornecedor extends Model {
  static init(sequelize) {
    super.init({
      razaoSocial: DataTypes.STRING,
      nomeFantasia: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize,
    })
  }
}

Fornecedor.init(connection);
module.exports = Fornecedor;
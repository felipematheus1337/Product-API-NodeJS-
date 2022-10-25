import Sequelize, { Model } from 'sequelize';

export default class Produtos extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      marca: Sequelize.STRING,
      peso: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}

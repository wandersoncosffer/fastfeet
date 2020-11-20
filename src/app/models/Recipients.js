import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        postalcode: Sequelize.STRING,
        addressline1: Sequelize.STRING,
        addressline2: Sequelize.STRING,
        number: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        country: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Recipients;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', '1234567890', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;
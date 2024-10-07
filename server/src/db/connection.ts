import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('u491711087_almacen', 'u491711087_admin123', 'F*7c4>?xRrc', {
    host: 'srv1180.hstgr.io',
    dialect: 'mysql'
  });

  export default sequelize;
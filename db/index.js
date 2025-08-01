import config from '../config/config.js';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(config.db.dbName, config.db.user, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: config.db.dialect,
  logging: false,
});

export default sequelize;

/*export the connection  export { sequelize };*/

import config from './config/config.js';
import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

import router from './src/router/router.ts';
app.use('/user', router);
//how connect that with front form?

const PORT = config.app.port;
import sequelize from './db/index.js';
//npx kill-port 9000
app.listen(PORT, async () => {
  console.log('Server: Connection successful on Port ' + PORT);
  //someday sync with sequelize migrations
  await sequelize.sync().catch((err) => {
    console.error('Error syncing database:', err);
  });
});

/*
app.listen(PORT, async () => {
  console.log('Server: Connection successful on Port ' + PORT);
  await sequelize.sync();
});
*/

//node --env-file=config/.env index.ts

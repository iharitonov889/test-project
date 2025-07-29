import config from './config/config.js';
import express from 'express';
import bodyParser from 'body-parser';

import router from './src/router/central.js';
import sequelize from './db/index.js';

const app = express();
app.use(express.json());
app.use(express.static('src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

import * as http from 'http';
const server = http.createServer(app);
const PORT: number = config.app.port as unknown as number;

//async?
server.listen(PORT, () => {
  console.log('Server: Connection successful on PORT ' + PORT);
  sequelize
    .sync()
    .then(() => console.log('Database synchronized'))
    .catch((error) => console.error('Error synchronizing database:', error));
});

//npx kill-port 9000

//node --env-file=config/.env index.ts

/*
app.listen(PORT, async () => {
  console.log('Server: Connection successful on Port ' + PORT);
  await sequelize.sync();
});
*/

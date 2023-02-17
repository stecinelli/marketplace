import express from 'express';
import config from '../config/default';
import log from './logger';
import { connectToDatabase } from './service/database.service';
import { router } from './routers';

const port = config.port as number;
const host = config.host as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToDatabase()
  .then(() => {
    app.use('/api', router);

    app.listen(port, host, () => {
      log.info(`Server listing at http://${host}:${port}`);
    });
  });

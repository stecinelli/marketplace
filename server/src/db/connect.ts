import config from '../../config/default';
import log from '../logger';

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = config.dbUri as string;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const connect = () => {
  client
    .connect((error: Error) => {
      const collection = client.db('test').collection('devices');
      log.info('this is the collection:', collection);
      // perform actions on the collection object
      log.error('db error:', error);
      client.close();
    });
};

export default connect;

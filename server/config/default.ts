import * as dotenv from 'dotenv'
dotenv.config()

export default {
  port: 3001,
  host: 'localhost',
  dbUri: process.env.DB_CONN_STRING || '',
  dbName: process.env.DB_NAME || '',
  dbCollectionProducts: process.env.PRODUCTS_COLLECTION_NAME || '',
  saltWorkFactor: 10,
};

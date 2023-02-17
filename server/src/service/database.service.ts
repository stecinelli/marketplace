// External Dependencies
import * as mongoDB from 'mongodb';
import config from '../../config/default';
import log from '../logger';

// Global Variables
export const collections: { products?: mongoDB.Collection } = {};

// Initialize Connection

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(config.dbUri);

  await client.connect();

  const db: mongoDB.Db = client.db(config.dbName);

  const productsCollection: mongoDB.Collection = db.collection(config.dbCollectionProducts);

  collections.products = productsCollection;

  log.info(`Successfully connected to database: ${db.databaseName} and collection: ${productsCollection.collectionName}`);
}

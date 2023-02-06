// External Dependencies
import * as mongoDB from "mongodb";
import config from '../../config/default';


// Global Variables
export const collections: { products?: mongoDB.Collection } = {}

// Initialize Connection

export async function connectToDatabase () {
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(config.dbUri);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(config.dbName);
   
    const gamesCollection: mongoDB.Collection = db.collection(config.dbCollection);
 
  collections.products = gamesCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
 }
const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
let database = 'e-comm'

const client = new MongoClient(url);

const dbConection = async () => {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}
module.exports = dbConection
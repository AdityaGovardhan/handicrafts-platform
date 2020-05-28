const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

const client = new MongoClient(url, { useUnifiedTopology: true });

const insertDocuments = (db, callback) => {
  const collection = db.collection('documents');

  collection.insertMany([
    { a: 1 }, { a: 2 }, { a: 3 },
  ], (err, result) => {
    console.log(result);
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
};

const findDocuments = (db, callback) => {
  const collection = db.collection('documents');

  collection.find({ a: 3 }).toArray((err, docs) => {
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};

client.connect(() => {
  console.log('Connected successfully to the DB');
  const db = client.db(dbName);

  insertDocuments(db, () => {
    findDocuments(db, () => {
      client.close();
    });
  });
});

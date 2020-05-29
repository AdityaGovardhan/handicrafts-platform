const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';

// const dbName = 'handicrafts-platform';

// const client = new MongoClient(url, { useUnifiedTopology: true });

const connectToDb = () => {
  const url = 'mongodb://localhost:27017';
  const dbName = 'handicrafts-platform';
  const client = new MongoClient(url, { useUnifiedTopology: true });

  client.connect(() => {
    console.log('Connected successfully to the DB');
  });

  const db = client.db(dbName);
  return db;
};

const insertUser = (db, user, callback) => {
  const collection = db.collection('users');

  collection.insertOne(user, (err, result) => {
    if (err) console.log(err);
    callback(result);
  });
};

const findUser = (db, searchParam, callback) => {
  const collection = db.collection('users');

  collection.find(searchParam).toArray((err, result) => {
    if (err) console.log(err);
    callback(result);
  });
};

module.exports = { connectToDb, insertUser, findUser };

// const insertDocuments = (db, callback) => {
//   const collection = db.collection('users');

//   collection.insertMany([
//     { a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 },
//   ], (err, result) => {
//     console.log(result);
//     console.log('Inserted 3 documents into the collection');
//     callback(result);
//   });
// };

// const findDocuments = (db, callback) => {
//   const collection = db.collection('users');

//   collection.find({ c: 3 }).toArray((err, docs) => {
//     console.log('Found the following records');
//     console.log(docs);
//     callback(docs);
//   });
// };

// client.connect(() => {
//   console.log('Connected successfully to the DB');
//   const db = client.db(dbName);

//   insertDocuments(db, () => {
//     findDocuments(db, () => {
//       client.close();
//     });
//   });
// });

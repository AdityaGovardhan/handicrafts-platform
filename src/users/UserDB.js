const { MongoClient } = require('mongodb');

class UserDB {
  constructor() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'handicrafts-platform';

    this.client = new MongoClient(url, { useUnifiedTopology: true });

    this.client.connect(() => {
      console.log('Connected successfully to the UserDB'); // TODO: need to convert to single connection, new connection is being created for every request, wasteful
    });

    this.db = this.client.db(dbName);
    this.collection = this.db.collection('users');
  }

  insertUser(userObj, callback) {
    this.collection.insertOne(userObj, (err, result) => {
      if (err) console.log(err);
      callback(result);
    });
  }

  findUserById(userId, callback) {
    this.collection.find({ userId }).toArray((err, result) => {
      if (err) console.log(err);
      callback(result);
    });
  }

  closeConnection() {
    this.client.close();
  }
}

module.exports = UserDB;

// const url = 'mongodb://localhost:27017';
// const dbName = 'handicrafts-platform';
// const client = new MongoClient(url, { useUnifiedTopology: true });

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

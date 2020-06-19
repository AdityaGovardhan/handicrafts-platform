const UserBuilder = require('./UserBuilder');

const { connectToDb, insertUser, findUser } = require('./UserPersistence');

const user = UserBuilder.user()
  .withFirstName('Aditya')
  .withMiddleName('Nagesh')
  .withLastName('Govardhan')
  .withEmailId('dtgovardhan@gmail.com')
  .withPhoneNumber('9876543210')
  .withGender('male')
  .build();

// console.log(user);

const db = connectToDb();

insertUser(db, user, () => {
  console.log('Inserted a User into the users collections');
  // console.log(result);
});

findUser(db, {}, (result) => {
  console.log('Found the following records');
  console.log(result);
});

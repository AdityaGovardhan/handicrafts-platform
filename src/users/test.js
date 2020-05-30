const UserBuilder = require('./UserBuilder');
const UserDB = require('./UserDB');

const user = UserBuilder.user()
  .withUserId('AdityaGovardhan')
  .withFirstName('Aditya')
  .withMiddleName('Nagesh')
  .withLastName('Govardhan')
  .withEmailId('dtgovardhan@gmail.com')
  .withPhoneNumber('9876543210')
  .withDateOfBirth('4th April 1996')
  .withGender('male')
  .withResidentialAddress('Tempe, AZ')
  .build();

// console.log(user);

const userDb = new UserDB();

userDb.insertUser(user, () => {
  console.log('User inserted successfully');
  userDb.closeConnection();
});

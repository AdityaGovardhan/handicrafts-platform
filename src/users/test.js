const UserBuilder = require('./UserBuilder');
const UserDB = require('./UserDB');

const user1 = UserBuilder.user()
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

const user2 = UserBuilder.user()
  .withUserId('VasishtaHarekal')
  .withFirstName('Vasishta')
  .withMiddleName('Divakar')
  .withLastName('Harekal')
  .withEmailId('vasishtahd123@gmail.com')
  .withPhoneNumber('9876543210')
  .withDateOfBirth('4th April 1996')
  .withGender('male')
  .withResidentialAddress('Tempe, AZ')
  .build();

// console.log(user1);

const userDb = new UserDB();

userDb.insertUser(user1, () => {
  userDb.insertUser(user2, () => {
    console.log('User inserted successfully');
    userDb.closeConnection();
  });
});

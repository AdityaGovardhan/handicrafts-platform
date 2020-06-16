const UserBuilder = require('./UserBuilder');

const user = UserBuilder.user()
  .withFirstName('Aditya')
  .withMiddleName('Nagesh')
  .withLastName('Govardhan')
  .withEmailId('dtgovardhan@gmail.com')
  .withPhoneNumber('9876543210')
  .withGender('male')
  .build();

console.log(user);

const UserBuilder = require('./UserBuilder');

const user = UserBuilder.user()
  .withFirstName('Aditya')
  .withMiddleName('Nagesh')
  .withLastName('Govardhan')
  .withEmailId('dtgovardhan@gmail.com')
  .build();

console.log(user);

const UserBuilder = require('./UserBuilder');

const user = UserBuilder.user()
  .withFirstName('Aditya')
  .withMiddleName('Nagesh')
  .withLastName('Govardhan')
  .build();

console.log(user);

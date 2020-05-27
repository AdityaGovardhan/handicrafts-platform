class User {
  constructor(userBuilder) {
    this.firstName = userBuilder.firstName;
    this.middleName = userBuilder.middleName;
    this.lastName = userBuilder.lastName;
    this.emailId = userBuilder.emailId;
    this.phoneNumber = userBuilder.phoneNumber;
    this.dateOfBirth = userBuilder.dateOfBirth;
    this.gender = userBuilder.gender;
    this.residentialAddress = userBuilder.residentialAddress;
  }
}

module.exports = User;

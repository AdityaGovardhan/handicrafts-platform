const User = require('./User');

// Builder class can be used for backend validation
class UserBuilder {
  static user() {
    return new UserBuilder();
  }

  withUserId(userId) {
    this.userId = userId;
    return this;
  }

  withFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  withMiddleName(middleName) {
    this.middleName = middleName;
    return this;
  }

  withLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  withEmailId(emailId) { // can be further split
    this.emailId = emailId;
    return this;
  }

  withPhoneNumber(phoneNumber) { // can be further split
    this.phoneNumber = phoneNumber;
    return this;
  }

  withDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
  }

  withGender(gender) {
    this.gender = gender;
    return this;
  }

  withResidentialAddress(residentialAddress) { // can be further split
    this.residentialAddress = residentialAddress;
    return this;
  }

  build() {
    return new User(this);
  }
}

module.exports = UserBuilder;

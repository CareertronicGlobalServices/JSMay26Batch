class User {
  constructor(username, email, password) {
    this._username = username;
    this._email = email;
    this._password = password;
  }
  get username() {
    return this._username;
  }
  set username(value) {
    if (value.length < 3) {
      console.log("Invalid Name Entered");
      return;
    }
    this._username = value;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
  loginMsg() {
    return `username is ${this.username}`;
  }
}

const user1 = new User("Kunal", "k@k.com", 12345);
console.log(user1.username);
user1.username = "s";
console.log(user1.username);

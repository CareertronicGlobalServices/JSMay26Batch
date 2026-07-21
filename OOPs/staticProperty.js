class User {
  constructor(username) {
    this.username = username;
  }
  loginMsg() {
    return `username is ${this.username}`;
  }
  static createId() {
    return `12345`;
  }
}

const kunal1 = new User("Kunal");
console.log(kunal1.loginMsg());
//console.log(kunal1.createId());

class kunal extends User {
  constructor(username, age, emailId, contact) {
    super(username);
    this.age = age;
    this.emailId = emailId;
    this.contact = contact;
  }
}
const Rahul = new kunal("Rahul", 25, "r@r.com", 112314462);
console.log(Rahul.createId());

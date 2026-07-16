class User {
  constructor(username) {
    this.username = username;
  }
  loginMsg() {
    return `username is ${this.username}`;
  }
}

const kunal1 = new User("Kunal");
console.log(kunal1.loginMsg());

// class kunal extends User {
//   constructor(username, age, emailId, contact) {
//     super(username);
//     this.age = age;
//     this.emailId = emailId;
//     this.contact = contact;
//   }
//   checkObj() {
//     console.log("nayaObj   " + this.username);
//   }
// }
// const Rahul = new kunal("Rahul", 25, "r@r.com", 112314462);
// const Shubham = new kunal("Rahul", 25, "r@r.com", 112314462);
// console.log(Rahul.checkObj());
// console.log(Shubham instanceof User);

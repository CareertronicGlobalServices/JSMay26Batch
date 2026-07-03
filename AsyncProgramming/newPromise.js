// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task sone");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });
// ////////////////////////////////////////
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task sone");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("new Consumed");
// });
// // -------------------------

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Kunal", PW: "123456" });
//     } else {
//       reject("Bad Request");
//     }
//   }, 2000);
// });

// promiseThree
//   .then((user) => {
//     console.log(user);
//     console.log(user.username);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(` I am from next then${username}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log(`Promise either resolved or rejected`);
//   });
const promisefive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Kunal", PW: "123456" });
    } else {
      reject("Bad Request");
    }
  }, 2000);
});

async function consumePromise() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
consumePromise();

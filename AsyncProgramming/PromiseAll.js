// // const kunal = Promise.resolve("Cake");
// // const gulshan = Promise.reject("ChaiNashta nahi mila");
// // const shubham = Promise.resolve("Drinks+ PArtyPoppers");

// // Promise.all([kunal, shubham, gulshan])
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// // //kunal , shubham ,gulshan -seperate independent promises

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task1 Done");
//     }, 2000);
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task2 Done");
//     }, 3000);
//   });
// }
// function task3() {
//   return new Promise((resolve, reject) => {
//     let error = true;
//     setTimeout(() => {
//       if (!error) {
//         resolve("Task3  Done");
//       } else reject("Task3 Not Done");
//     }, 5000);
//   });
// }

// Promise.all([task1(), task2(), task3()])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// usinf fetch
const users = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => {
    //console.log(res.json());
    return res.json();
  },
);
const posts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => {
    //console.log(res.json());
    return res.json();
  },
);
const comments = fetch("https://jsonplaceholder.typicode.com/comments").then(
  (res) => {
    //console.log(res.json());
    return res.json();
  },
);
Promise.all([users, posts, comments]).then(
  ([userData, postsData, commentsData]) => {
    console.log(userData.length);
    console.log(postsData.length);
    console.log(commentsData.length);
  },
);

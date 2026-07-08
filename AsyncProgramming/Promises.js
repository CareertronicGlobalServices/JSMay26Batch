//Callback

function kunal(uName) {
  console.log("Hello " + uName);
}
//kunal("Kunal");
//parameter - khud ek function ko maang raha h
function user(spiderman) {
  spiderman("New USer");
}
user(kunal);
//REal world case scenario
//Login
function login(pLogin) {
  setTimeout(() => {
    console.log("Login Success");
    pLogin();
  }, 2000);
}

//
function getProfile(spiderman) {
  setTimeout(() => {
    console.log("Profile Loaded");
    spiderman("HI from profile");
  }, 1000);
}
function getPost(batman) {
  setTimeout(() => {
    console.log("Post Loaded");
    batman("Hi posts");
  }, 1000);
}
function getcomments(superman) {
  setTimeout(() => {
    console.log("comments Loaded");
    superman("hi comments");
  }, 1000);
}
login(function () {
  getProfile(function () {
    getPost(function () {
      getcomments(function () {
        setTimeout(() => {
          console.log("SAb aagya");
        }, 1000);
      });
    });
  });
});

// Promises - 3 states -
//Pending , fulfill , reject
//
let promise = new Promise(function (resolve, reject) {
  resolve("Kaam ho gya");
});
promise.then(function (result) {
  console.log(result);
});

let promise = new Promise(function (resolve, reject) {
  let Success = false;
  if (Success) {
    resolve("Kaam Hogya");
  } else {
    reject("Kuch Atak gya");
  }
});
promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Steps Done");
  });

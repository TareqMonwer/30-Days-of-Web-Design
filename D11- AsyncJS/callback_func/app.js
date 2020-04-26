const users = [
  { name: "Tareq", age: 21 },
  { name: "Hasan", age: 22 },
  { name: "Rafi", age: 7 },
];

// function createPost(post) {
//   setTimeout(function () {
//     users.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     users.forEach((user) => {
//       output += `<li>${user.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ name: "Shahariar", age: 22 });
// getPosts();

// *******
// ** Async

function createPost(post, callback) {
  setTimeout(function () {
    users.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    users.forEach((user) => {
      output += `<li>${user.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ name: "Shahariar", age: 22 }, getPosts);
getPosts();

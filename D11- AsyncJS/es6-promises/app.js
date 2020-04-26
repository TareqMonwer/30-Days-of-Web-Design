const users = [
  { name: "Tareq", age: 21 },
  { name: "Hasan", age: 22 },
  { name: "Rafi", age: 7 },
];

/**
 * Promisess
 */
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      users.push(post);
      const err = false;
      if (!err) {
        resolve();
      } else {
        reject("Something is wrong!");
      }
    }, 2000);
  });
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

createPost({ name: "Shahariar", age: 22 })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
// getPosts();

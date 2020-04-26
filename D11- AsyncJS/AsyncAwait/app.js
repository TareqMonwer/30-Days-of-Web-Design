// async function myfunc() {
//   const pormise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("hello"), 3000);
//   });

//   const err = false;

//   if (!err) {
//     const res = await pormise;
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myfunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/**
 * With fetch
 */

async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  // only proceed once promise resolved
  const data = await response.json();

  // only proceed once second promise is resolved.
  return data;
}

getUsers().then((users) => console.log(users));

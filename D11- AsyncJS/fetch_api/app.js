// get text event listener
document.getElementById("get_text").addEventListener("click", getText);
document.getElementById("get_json").addEventListener("click", getJSON);
document.getElementById("get_api_data").addEventListener("click", getUsersData);

// Get local text data
function getText() {
  fetch("data.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get local JSON data
function getJSON() {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get External data
function getUsersData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach((user) => {
        output += `<li>${user.name}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

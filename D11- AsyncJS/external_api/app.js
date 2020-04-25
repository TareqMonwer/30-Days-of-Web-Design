const getJokesForm = document.getElementById("getJokes");

getJokesForm.addEventListener("submit", getJokes);

function getJokes(e) {
  const number = document.getElementById("number_of_jokes").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";

      if (response.type === "success") {
        response.value.forEach((item) => {
          output += `<li>${item.joke}</li>`;
        });
      } else {
        output += "<li>Something went wrong!</li>";
      }

      document.getElementById("jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

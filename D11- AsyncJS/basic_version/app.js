const btn = document.getElementById("btn");
btn.addEventListener("click", loadData);

const dataDiv = document.getElementById("data");

function loadData() {
  // create xhr obj.
  const xhr = new XMLHttpRequest();

  // request metadata.
  xhr.open("GET", "data.txt", true);

  // process data on load.
  xhr.onload = function () {
    if (this.status === 200) {
      dataDiv.textContent = this.responseText;
    } else {
      console.error("AJAX Call Failed!");
    }
  };

  // send the request.
  xhr.send(null);
}

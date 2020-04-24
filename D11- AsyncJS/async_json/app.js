document.getElementById("customer").addEventListener("click", loadCustomer);

document.getElementById("customers").addEventListener("click", loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
        </ul>
        `;
      document.getElementById("customer-data").innerHTML = output;
    }
  };

  xhr.send();
}

// Load all customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(function (customer) {
        output += `
        <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
        </ul>
        `;
      });
      document.getElementById("all-customer-data").innerHTML = output;
    }
  };

  xhr.send();
}

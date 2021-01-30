// Create event listener
document.getElementById("btn").addEventListener("click", loadData);

function loadData() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();

  // OPEN - ( type, url/file, async )
  xhr.open("GET", "users.json", true);

  let output = "";

  xhr.onload = function () {
    // HTTP Statuses
    // 200: "OK"
    // 404: "Not Found"

    if (this.status == 200) {
      let users = JSON.parse(this.responseText);

      users.forEach((user) => {
        output += `
              <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
              </ul>
            `;
      });

      document.getElementById("text").innerHTML = output;
    }
  };

  // Sends request
  xhr.send();
}

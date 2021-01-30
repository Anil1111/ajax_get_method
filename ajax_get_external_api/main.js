// Create event listener
document.getElementById("btn").addEventListener("click", loadExternalAPI);

function loadExternalAPI() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();

  // OPEN - ( type, url/file, async )
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function () {
    // HTTP Statuses
    // 200: "OK"
    // 404: "Not Found"

    if (this.status == 200) {
      let users = JSON.parse(this.responseText);

      let output = "";

      users.forEach((user) => {
        output += `
            <div class="user">
                <img src=${user.avatar_url} />    
                <ul>
                    <li>
                        ID: ${user.id}
                    </li>
                    <li>
                        User: ${user.login}
                    </li>
                </ul>
            </div>
          `;
      });

      document.getElementById("users").innerHTML = output;
    }
  };

  // Sends request
  xhr.send();
}

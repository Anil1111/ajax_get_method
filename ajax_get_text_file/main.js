// Create event listener
document.getElementById("btn").addEventListener("click", loadText);

function loadText() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();

  // OPEN - ( type, url/file, async )
  xhr.open("GET", "text.txt", true);

  xhr.onload = function () {
    // HTTP Statuses
    // 200: "OK"
    // 404: "Not Found"

    if (this.status == 200) {
      document.getElementById("text").innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "NOT FOUND";
    }
  };

  // Sends request
  xhr.send();
}

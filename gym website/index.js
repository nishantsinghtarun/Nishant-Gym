//sign up popup msg.

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (confirm("Your form is submitted!")) {
      window.location.href = "signin.html";
    }
  });

//sign up popup msg over

//QUERY

function openQueryPopup() {
  var popup = document.getElementById("queryPopup");
  popup.style.display = "block";
}

function closeQueryPopup() {
  var popup = document.getElementById("queryPopup");
  popup.style.display = "none";
}

function sendQuery() {
  var queryText = document.getElementsByClassName("d")[1].value;
  alert("Query Sent: " + queryText);
  closeQueryPopup();
}
//QUERY OVER

function submitForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

  
    window.location.href = "index3.html?firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password) + "&confirm_password=" + encodeURIComponent(confirm_password);
}

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
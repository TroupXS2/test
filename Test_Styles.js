 function Close() {
    document.getElementById("demo").style.display = "none";
  }
 function Open() {
    window.alert("hi")
  }
  function Login() {
    window.alert("Enter Password")
    var ask1 = prompt("Please enter your username");
    var ask2 = prompt("Please enter your password");
    var username = ("jwang141")
    var username2 = ("Brill")
    var password = ("Super")
    if (ask1 == (username || username2) && ask2 == password) {
        window.alert("Password Accepted")
        document.getElementById("Sky").style.display = "block";
    }
    else{
        window.alert("hihi")
    }
  }
  function Keydown() {
      window.alert("hi")
  }
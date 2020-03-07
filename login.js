$(document).ready(function() {
  $(".login-info-box").fadeOut();
  $(".login-show").addClass("show-log-panel");
});

$('.login-reg-panel input[type="radio"]').on("change", function() {
  if ($("#log-login-show").is(":checked")) {
    $(".register-info-box").fadeOut();
    $(".login-info-box").fadeIn();

    $(".white-panel").addClass("right-log");
    $(".register-show").addClass("show-log-panel");
    $(".login-show").removeClass("show-log-panel");
  } else if ($("#log-reg-show").is(":checked")) {
    $(".register-info-box").fadeIn();
    $(".login-info-box").fadeOut();

    $(".white-panel").removeClass("right-log");

    $(".login-show").addClass("show-log-panel");
    $(".register-show").removeClass("show-log-panel");
  }
});
var un = document.getElementById("name");
var pw = document.getElementById("pw");

// storing input from register-form
function store() {
  localStorage.setItem("name", un.value);
  localStorage.setItem("pw", pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {
  // stored data from the register-form
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");

  // entered data from the login-form
  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");

  // check if stored data from register-form is equal to data from login form
  if (userName.value == storedName && userPw.value == storedPw) {
    alert("welcome to online Gallery ^_^");
  } else {
    var frm = document.getElementById("login-form") || null;
    if (frm) {
      frm.action = "login.html";
    }
    alert("ERROR.");
  }
}

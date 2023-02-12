const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const danger = document.querySelectorAll(".danger");

function validatePassword() {
  if (password.value != confirmPassword.value) {
    password.classList.add("not-match");
    confirmPassword.classList.add("not-match");
    danger.forEach(function (item) {
      item.classList.add("active");
    });
  } else {
    password.classList.remove("not-match");
    confirmPassword.classList.remove("not-match");
    danger.forEach(function (item) {
      item.classList.remove("active");
    });
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

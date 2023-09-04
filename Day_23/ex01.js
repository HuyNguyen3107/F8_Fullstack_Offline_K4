var btn = document.querySelector(".btn");
var overlay = document.querySelector(".overlay");
var modalBox = document.querySelector(".modal-box");
var login = document.querySelector(".login");
var register = document.querySelector(".register");
var loginForm = document.querySelector(".login-form");
var registerForm = document.querySelector(".register-form");
var emailLogin = document.querySelector("#email-login");
var passwordLogin = document.querySelector("#password-login");
var emailNotice = document.querySelector(".notice-email");
var passwordNotice = document.querySelector(".notice-password");
var btnLogin = document.querySelector(".btn-login");
var loginNotice = document.querySelector(".login-notice");
var faEye = document.querySelector(".fa-eye");
var faEyeSlash = document.querySelector(".fa-eye-slash");

btn.addEventListener("click", function () {
  modalBox.classList.add("show");
});
overlay.addEventListener("click", function () {
  modalBox.classList.remove("show");
});

login.addEventListener("click", function () {
  loginForm.classList.add("show");
  login.classList.remove("faded");
  registerForm.classList.remove("show");
  register.classList.add("faded");
});
register.addEventListener("click", function () {
  registerForm.classList.add("show");
  register.classList.remove("faded");
  loginForm.classList.remove("show");
  login.classList.add("faded");
  if (emailLogin.value !== "") {
    emailLogin.value = "";
  }
  if (passwordLogin.value !== "") {
    passwordLogin.value = "";
  }
  if (emailLogin.classList.contains("border-red")) {
    emailLogin.classList.remove("border-red");
  }
  if (emailNotice.innerHTML) {
    emailNotice.innerHTML = "";
  }
  if (passwordLogin.value !== "") {
    passwordLogin.value = "";
  }
  if (passwordLogin.value !== "") {
    passwordLogin.value = "";
  }
  if (passwordLogin.classList.contains("border-red")) {
    passwordLogin.classList.remove("border-red");
  }
  if (passwordNotice.innerHTML) {
    passwordNotice.innerHTML = "";
  }
  if (loginNotice.innerHTML) {
    loginNotice.innerHTML = "";
  }
});

emailLogin.onblur = function () {
  if (emailLogin.value === "") {
    emailNotice.innerHTML = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  } else {
    emailNotice.innerHTML = "";
    emailLogin.classList.remove("border-red");
  }
  if (passwordLogin.value === "") {
    passwordNotice.innerHTML = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  }
};
passwordLogin.onblur = function () {
  if (passwordLogin.value === "") {
    passwordNotice.innerHTML = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  } else {
    passwordNotice.innerHTML = "";
    passwordLogin.classList.remove("border-red");
  }
  if (emailLogin.value === "") {
    emailNotice.innerHTML = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
};
btnLogin.addEventListener("click", function () {
  if (passwordLogin.value !== "" && emailLogin.value !== "") {
    loginNotice.innerHTML = "Account not existed";
  } else if (passwordLogin.value === "" && emailLogin.value === "") {
    passwordNotice.innerHTML = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
    emailNotice.innerHTML = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
  if (passwordLogin.value === "" || emailLogin.value === "") {
    loginNotice.innerHTML = "";
  }
});

faEye.addEventListener("click", function () {
  faEye.classList.remove("show");
  faEyeSlash.classList.add("show");
  passwordLogin.type = "text";
});

faEyeSlash.addEventListener("click", function () {
  faEyeSlash.classList.remove("show");
  faEye.classList.add("show");
  passwordLogin.type = "password";
});

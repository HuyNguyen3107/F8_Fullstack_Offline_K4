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
var faEye2 = registerForm.querySelector(".fa-eye");
var faEyeSlash2 = registerForm.querySelector(".fa-eye-slash");
var nameRegister = registerForm.querySelector("#name");
var emailRegister = registerForm.querySelector("#email-register");
var passwordRegister = registerForm.querySelector("#password-register");
var btnRegister = registerForm.querySelector(".btn-register");
var registerNotice = registerForm.querySelector(".register-notice");
var nameNoticeRg = registerForm.querySelector(".notice-name");
var emailNoticeRg = registerForm.querySelector(".notice-email-rg");
var passwordNoticeRg = registerForm.querySelector(".notice-password-rg");

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
  if (emailRegister.value !== "") {
    emailRegister.value = "";
  }
  if (passwordRegister.value !== "") {
    passwordRegister.value = "";
  }
  if (nameRegister.value !== "") {
    nameRegister.value = "";
  }
  if (nameRegister.classList.contains("border-red")) {
    nameRegister.classList.remove("border-red");
  }
  if (nameNoticeRg.innerHTML) {
    nameNoticeRg.innerHTML = "";
  }
  if (emailRegister.classList.contains("border-red")) {
    emailRegister.classList.remove("border-red");
  }
  if (emailNoticeRg.innerHTML) {
    emailNoticeRg.innerHTML = "";
  }
  if (passwordRegister.classList.contains("border-red")) {
    passwordRegister.classList.remove("border-red");
  }
  if (passwordNoticeRg.innerHTML) {
    passwordNoticeRg.innerHTML = "";
  }
  if (registerNotice.innerHTML) {
    registerNotice.innerHTML = "";
  }
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
  }
  if (passwordLogin.value === "") {
    passwordNotice.innerHTML = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  }
};
emailLogin.oninput = function () {
  emailNotice.innerHTML = "";
  emailLogin.classList.remove("border-red");
};
passwordLogin.onblur = function () {
  if (passwordLogin.value === "") {
    passwordNotice.innerHTML = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  }
  if (emailLogin.value === "") {
    emailNotice.innerHTML = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
};
passwordLogin.oninput = function () {
  passwordNotice.innerHTML = "";
  passwordLogin.classList.remove("border-red");
};
btnLogin.addEventListener("click", function (e) {
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
  e.preventDefault();
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

faEye2.addEventListener("click", function () {
  faEye2.classList.remove("show");
  faEyeSlash2.classList.add("show");
  passwordRegister.type = "text";
});

faEyeSlash2.addEventListener("click", function () {
  faEyeSlash2.classList.remove("show");
  faEye2.classList.add("show");
  passwordRegister.type = "password";
});

emailRegister.onblur = function () {
  if (emailRegister.value === "") {
    emailNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
  if (nameRegister.value === "") {
    nameNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
};

emailRegister.oninput = function () {
  emailNoticeRg.innerHTML = "";
  emailRegister.classList.remove("border-red");
};

passwordRegister.onblur = function () {
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
  if (emailRegister.value === "") {
    emailNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (nameRegister.value === "") {
    nameNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
};

passwordRegister.oninput = function () {
  passwordNoticeRg.innerHTML = "";
  passwordRegister.classList.remove("border-red");
};

nameRegister.onblur = function () {
  if (nameRegister.value === "") {
    nameNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
  if (emailRegister.value === "") {
    emailNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
};

nameRegister.oninput = function () {
  nameNoticeRg.innerHTML = "";
  nameRegister.classList.remove("border-red");
};

btnRegister.addEventListener("click", function (e) {
  if (
    passwordRegister.value !== "" &&
    emailRegister.value !== "" &&
    nameRegister.value !== ""
  ) {
    registerNotice.innerHTML = "Account not existed";
  } else if (
    passwordRegister.value === "" &&
    emailRegister.value === "" &&
    nameRegister.value === ""
  ) {
    passwordNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
    emailNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
    nameNoticeRg.innerHTML = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
  if (
    passwordRegister.value === "" ||
    emailRegister.value === "" ||
    nameRegister.value === ""
  ) {
    registerNotice.innerHTML = "";
  }
  e.preventDefault();
});

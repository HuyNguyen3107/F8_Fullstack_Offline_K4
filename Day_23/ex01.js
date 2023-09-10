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
  if (nameNoticeRg.innerText) {
    nameNoticeRg.innerText = "";
  }
  if (emailRegister.classList.contains("border-red")) {
    emailRegister.classList.remove("border-red");
  }
  if (emailNoticeRg.innerText) {
    emailNoticeRg.innerText = "";
  }
  if (passwordRegister.classList.contains("border-red")) {
    passwordRegister.classList.remove("border-red");
  }
  if (passwordNoticeRg.innerText) {
    passwordNoticeRg.innerText = "";
  }
  if (registerNotice.innerText) {
    registerNotice.innerText = "";
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
  if (emailNotice.innerText) {
    emailNotice.innerText = "";
  }
  if (passwordLogin.classList.contains("border-red")) {
    passwordLogin.classList.remove("border-red");
  }
  if (passwordNotice.innerText) {
    passwordNotice.innerText = "";
  }
  if (loginNotice.innerText) {
    loginNotice.innerText = "";
  }
});

emailLogin.onblur = function () {
  if (emailLogin.value === "") {
    emailNotice.innerText = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
  if (passwordLogin.value === "") {
    passwordNotice.innerText = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  }
};
emailLogin.oninput = function () {
  emailNotice.innerText = "Vui lòng nhập đúng định dạng email.";
  emailLogin.classList.add("border-red");
  if (
    emailLogin.value.includes("@") &&
    emailLogin.value.includes(".") &&
    emailLogin.value.slice(emailLogin.value.indexOf(".") + 1).length >= 2
  ) {
    emailLogin.classList.remove("border-red");
    emailNotice.innerText = "";
  }
  if (emailLogin.value === "") {
    emailNotice.innerText = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
  if (passwordLogin.value === "") {
    passwordNotice.innerText = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  }
};
passwordLogin.onblur = function () {
  if (passwordLogin.value === "") {
    passwordNotice.innerText = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  }
  if (emailLogin.value === "") {
    emailNotice.innerText = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
};
passwordLogin.oninput = function () {
  passwordNotice.innerText = "";
  passwordLogin.classList.remove("border-red");
  if (passwordLogin.value === "") {
    passwordNotice.innerText = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
  }
  if (emailLogin.value === "") {
    emailNotice.innerText = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
};
btnLogin.addEventListener("click", function (e) {
  if (passwordLogin.value !== "" && emailLogin.value !== "") {
    loginNotice.innerText = "Account not existed";
  } else if (passwordLogin.value === "" && emailLogin.value === "") {
    passwordNotice.innerText = "Vui lòng nhập thông tin";
    passwordLogin.classList.add("border-red");
    emailNotice.innerText = "Vui lòng nhập thông tin";
    emailLogin.classList.add("border-red");
  }
  if (passwordLogin.value === "" || emailLogin.value === "") {
    loginNotice.innerText = "";
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
    emailNoticeRg.innerText = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerText = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
  if (nameRegister.value === "") {
    nameNoticeRg.innerText = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
};

emailRegister.oninput = function () {
  emailNoticeRg.innerText = "Vui lòng nhập đúng định dạng email.";
  emailRegister.classList.add("border-red");
  if (
    emailRegister.value.includes("@") &&
    emailRegister.value.includes(".") &&
    emailRegister.value.slice(emailRegister.value.indexOf(".") + 1).length >= 2
  ) {
    emailRegister.classList.remove("border-red");
    emailNoticeRg.innerText = "";
  }
  if (emailRegister.value === "") {
    emailNoticeRg.innerText = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerText = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
  if (nameRegister.value === "") {
    nameNoticeRg.innerText = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
};

passwordRegister.onblur = function () {
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerText = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
  if (emailRegister.value === "") {
    emailNoticeRg.innerText = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (nameRegister.value === "") {
    nameNoticeRg.innerText = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
};

passwordRegister.oninput = function () {
  passwordNoticeRg.innerText = "Mật khẩu phải chứa ít nhất 6 ký tự";
  passwordRegister.classList.add("border-red");
  if (passwordRegister.value.length >= 6) {
    passwordNoticeRg.innerText = "";
    passwordRegister.classList.remove("border-red");
  }
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerText = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
  if (nameRegister.value === "") {
    nameNoticeRg.innerText = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
  if (emailRegister.value === "") {
    emailNoticeRg.innerText = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
};

nameRegister.onblur = function () {
  if (nameRegister.value === "") {
    nameNoticeRg.innerText = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
  if (emailRegister.value === "") {
    emailNoticeRg.innerText = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerText = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
};

nameRegister.oninput = function () {
  nameNoticeRg.innerText = "";
  nameRegister.classList.remove("border-red");
  if (nameRegister.value === "") {
    nameNoticeRg.innerText = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
  if (emailRegister.value === "") {
    emailNoticeRg.innerText = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
  }
  if (passwordRegister.value === "") {
    passwordNoticeRg.innerText = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
  }
};

btnRegister.addEventListener("click", function (e) {
  if (
    passwordRegister.value !== "" &&
    emailRegister.value !== "" &&
    nameRegister.value !== ""
  ) {
    registerNotice.innerText = "Account not existed";
  } else if (
    passwordRegister.value === "" &&
    emailRegister.value === "" &&
    nameRegister.value === ""
  ) {
    passwordNoticeRg.innerText = "Vui lòng nhập thông tin";
    passwordRegister.classList.add("border-red");
    emailNoticeRg.innerText = "Vui lòng nhập thông tin";
    emailRegister.classList.add("border-red");
    nameNoticeRg.innerText = "Vui lòng nhập thông tin";
    nameRegister.classList.add("border-red");
  }
  if (
    passwordRegister.value === "" ||
    emailRegister.value === "" ||
    nameRegister.value === ""
  ) {
    registerNotice.innerText = "";
  }
  e.preventDefault();
});

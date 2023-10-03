var choose = document.querySelector(".chooses");
var select = document.querySelector(".select-file");
var fileName = document.querySelector(".file-name");
var bold = document.querySelector(".bold");
var italic = document.querySelector(".italic");
var underline = document.querySelector(".underline");
var colorChange = document.querySelector(".change-color");
var content = document.querySelector(".content");
var numChar = document.querySelector(".number-char");
var numWord = document.querySelector(".number-word");

content.focus();

choose.addEventListener("click", function (e) {
  e.stopPropagation();
  select.classList.toggle("show");
});
document.addEventListener("click", function () {
  select.classList.remove("show");
});

bold.addEventListener("click", function () {
  document.execCommand("bold");
});

italic.addEventListener("click", function () {
  document.execCommand("italic");
});

underline.addEventListener("click", function () {
  document.execCommand("underline");
});

colorChange.addEventListener("input", function () {
  document.execCommand("foreColor", false, this.value);
});

content.addEventListener("input", function () {
  var char = content.innerText.trim();
  var word = char;
  word = word.replace(/\s+/g, " ");
  numChar.innerText = char.length;
  if (!word.split(" ")[0]) {
    numWord.innerText = 0;
  } else {
    numWord.innerText = word.split(" ").length;
  }
});

content.addEventListener("paste", function (e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData("text/plain");

  // insert text manually
  document.execCommand("insertHTML", false, text);
});

select.children[0].addEventListener("click", function () {
  fileName.value = "untitled";
  numChar.innerText = 0;
  numWord.innerText = 0;
  content.innerText = "";
});

select.children[1].addEventListener("click", function () {
  var link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content.textContent]));
  link.download = `${fileName.value}.txt`;
  link.click();
});

select.children[2].addEventListener("click", function () {
  var nameFilePDF = fileName.value;
  html2pdf(content).save(nameFilePDF);
});

"use strict";

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "vi-VN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let voiceSearch = document.querySelector(".voice-search");
let btn = document.querySelector(".btn");
let action = document.querySelector(".action");
let check = false;

let handleResult = (result) => {
  result = result.toLowerCase();
  switch (result) {
    case "google":
      window.open("https://google.com");
      check = true;
      break;

    case "youtube":
      window.open("https://youtube.com");
      check = true;
      break;

    case "facebook":
      window.open("https://facebook.com");
      check = true;
      break;

    case "google drive":
      window.open("https://drive.google.com");
      check = true;
      break;

    case "google maps":
      window.open("https://maps.google.com");
      check = true;
      break;
  }

  if (
    (result.includes("chỉ đường") || result.includes("tới")) &&
    !result.includes("bài hát") &&
    !result.includes("video")
  ) {
    if (result.includes("tới")) {
      let index = result.indexOf("tới");
      result = result.slice(index + 4);
    } else {
      let index = result.indexOf("đường");
      result = result.slice(index + 6);
    }
    window.open(`https://www.google.com/maps/search/${result}`);
    check = true;
  }

  if (
    result.includes("bài hát") &&
    !result.includes("đường tới") &&
    !result.includes("video")
  ) {
    let index = result.indexOf("hát");
    result = result.slice(index + 4);
    window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${result}`);
    check = true;
  }

  if (
    result.includes("video") &&
    !result.includes("đường tới") &&
    !result.includes("bài hát")
  ) {
    let index = result.indexOf("video");
    result = result.slice(index + 6);
    window.open(`https://www.youtube.com/results?search_query=${result}`);
    check = true;
  }
};

btn.addEventListener("click", function () {
  recognition.start();
  action.innerText = "Hãy nói nội dung anh Quân muốn";
  btn.innerText = "Anh An đang lắng nghe";
  action.style.color = "purple";
  if (voiceSearch.children.length === 4) {
    voiceSearch.lastElementChild.remove();
  }
});

recognition.onresult = function (event) {
  let result = event.results[0][0].transcript;
  let status = document.createElement("div");
  let css = {
    border: "1px solid purple",
    textAlign: "center",
    color: "purple",
    marginTop: "40px",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "700",
  };
  status.innerText = `Đang thực hiện: ${result}`;
  Object.assign(status.style, css);
  voiceSearch.append(status);
  setTimeout(() => {
    handleResult(result);
    if (check) {
      status.innerText = `Anh An đã thực hiện xong`;
      check = false;
    } else {
      status.innerText = `Xin lỗi anh Quân nhé anh An không thực hiện được rùi`;
    }
  }, 1000);
  action.innerText = "Đã nói xong. Hy vọng anh An sẽ làm anh Quân hài lòng";
  btn.innerText =
    "Anh An nghe xong rùi. Nếu anh còn muốn điều gì nữa hãy nhấp vô đây";
};

recognition.onerror = function (event) {
  action.innerText = "Error occurred in recognition";
};

recognition.onspeechend = function () {
  recognition.stop();
};

// 'https://zingmp3.vn/tim-kiem/tat-ca?q=ai chung tình được mãi'
// 'https://www.google.com/maps/search/Vinhomes Smartcity Tây Mỗ'
// 'https://www.youtube.com/results?search_query=ai chung tình được mãi'

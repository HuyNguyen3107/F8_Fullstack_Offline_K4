// Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var timeLine = progressBar.querySelector(".timeline");

var progressBarWidth = progressBar.clientWidth;
var valueMove;
var initialClientX;
var currentValue = 0;
var value;
var recentTime;
var isDrag = false;
var currentTimeUpdate = 0;
var current;
var checkTimeUpdate = false;
var flag = false;
var repeatCheck = false;

var musicImage = document.querySelector(".image-music");

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    value = (e.offsetX * 100) / progressBarWidth;
    progress.style.width = `${value}%`;
    // console.log(value);
    handleChange(value);
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    currentValue = value;
  }
});

var handleDrag = function (e) {
  isDrag = true;
  valueMove = e.clientX - initialClientX;
  value = (valueMove * 100) / progressBarWidth + currentValue;
  if (value < 0) {
    value = 0;
  }

  if (value > 100) {
    value = 100;
  }
  // console.log(value);
  progress.style.width = `${value}%`;
  handleInput(valueMove);
  checkTimeUpdate = true;
};

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  e.preventDefault();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
  recentTime = audio.currentTime;
  flag = true;
});

document.addEventListener("mouseup", function () {
  // checkTime = true;
  isDrag = false;
  document.removeEventListener("mousemove", handleDrag);
  currentValue = value;
  if (checkTimeUpdate) {
    audio.currentTime = currentTimeUpdate;
  }
  checkTimeUpdate = false;
  flag = false;
});

// Nhận giá trị khi kéo, khi bấm chuột xuống
// 1.Nhả chuột
var handleChange = function (value) {
  var timeUpdate = (value * audio.duration) / 100;
  audio.currentTime = timeUpdate;
  recentTime = timeUpdate;
};

// 2. Bấm chuột xuống và kéo
var handleInput = function (valueMove) {
  var timeChange = (valueMove * 100) / progressBarWidth;
  timeChange = (timeChange * audio.duration) / 100 + recentTime;
  if (timeChange > audio.duration) {
    timeChange = audio.duration;
  }
  if (timeChange < 0) {
    timeChange = 0;
  }
  currentTimeEl.innerText = getTime(timeChange);
  currentTimeUpdate = timeChange;
  var value = (timeChange * 100) / audio.duration;
  // console.log(value);
  if (value < 0) {
    value = 0;
  }

  if (value > 100) {
    value = 100;
  }
  progress.style.width = `${value}%`;
  if (!isDrag) {
    audio.currentTime = timeChange;
  }
};

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

currentTimeEl.style.color = "purple";
durationEl.style.color = "purple";

var playBtn = document.querySelector(".play-btn");

var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var playIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
    musicImage.classList.add("effect");
  } else {
    audio.pause();
    this.innerHTML = playIcon;
    musicImage.classList.remove("effect");
  }
});

audio.addEventListener("timeupdate", function () {
  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);
    durationEl.innerText = getTime(audio.duration);
    var value = (audio.currentTime * 100) / audio.duration;
    progress.style.width = `${value}%`;
    currentTimeUpdate = audio.currentTime;
  }
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playIcon;
  musicImage.classList.remove("effect");
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseIcon;
  musicImage.classList.add("effect");
});

progressBar.addEventListener("mousemove", function (e) {
  if (!flag) {
    var barRate = (e.offsetX * 100) / progressBarWidth;
    var timeShow = (barRate * audio.duration) / 100;
    timeLine.style.display = "block";
    timeLine.innerText = getTime(timeShow);
    timeLine.style.left = `${e.offsetX}px`;
    timeLine.style.transform = `translateX(-50%)`;
    e.stopPropagation;
  }
});

audio.addEventListener("ended", function () {
  progress.style.width = 0;
  playBtn.innerHTML = playIcon;
  audio.currentTime = 0;
  currentTimeUpdate = 0;
  value = 0;
  if (repeatCheck) {
    setTimeout(function () {
      audio.play();
    }, 500);
  }
});

progressBar.addEventListener("mouseout", function () {
  timeLine.style.display = "";
});

progressSpan.addEventListener("mousemove", function (e) {
  timeLine.style.display = "";
  e.stopPropagation();
});

var count = 0;

var playList = [
  `./music/cay da quan doc.mp3`,
  `./music/Mother's Dream.mp3`,
  `./music/Cho ngay cuoi em.mp3`,
  `./music/kia bong dang ai.mp3`,
];

var imageList = [
  `./images/cay da quan doc.jpg`,
  `./images/mother's dream.jpg`,
  `./images/cho ngay cuoi  em.jpg`,
  `./images/Kia bong dang ai.jpg`,
];

var musicNameList = [
  `Cây Đa Quán Dốc`,
  `Ước Mơ Của Mẹ`,
  `Chờ Ngày Cưới Em`,
  `Kìa Bóng Dáng Ai`,
];

var nextMusic = document.querySelector(".forward-right");
var prevMusic = document.querySelector(".forward-left");
var musicName = document.querySelector(".music-name");
var playListMusic = document.querySelector(".play-list");
var playItems = playListMusic.querySelectorAll(".play-item");
var playItemImage = document.querySelector(".play-item-image");
var itemName = document.querySelector(".item-name");
var repeat = document.querySelector(".repeat-music");
var downloadMusic = document.querySelector('.download-music');
// console.log(nextMusic, prevMusic);
// console.log(playListMusic.children);

nextMusic.addEventListener("click", function () {
  if (count < playList.length - 1) {
    musicImage.children[0].src = imageList[++count];
    audio.src = playList[count];
    musicName.innerText = musicNameList[count];
    progress.style.width = 0;
    playBtn.innerHTML = playIcon;
    audio.currentTime = 0;
    currentTimeUpdate = 0;
    value = 0;
    musicImage.classList.remove("effect");
    playListMusic.children[count].classList.add("select-music");
    playListMusic.children[count].previousElementSibling.classList.remove(
      "select-music"
    );
  }
});
prevMusic.addEventListener("click", function () {
  if (count > 0) {
    musicImage.children[0].src = imageList[--count];
    audio.src = playList[count];
    musicName.innerText = musicNameList[count];
    progress.style.width = 0;
    playBtn.innerHTML = playIcon;
    audio.currentTime = 0;
    currentTimeUpdate = 0;
    value = 0;
    musicImage.classList.remove("effect");
    playListMusic.children[count].classList.add("select-music");
    playListMusic.children[count].nextElementSibling.classList.remove(
      "select-music"
    );
  }
});

// console.log(playItems);

playItems.forEach(function (item, index) {
  var temp = item;
  item.addEventListener("click", function () {
    item.classList.add("select-music");
    playItems.forEach(function (item) {
      if (item !== temp) {
        if (item.classList.contains("select-music")) {
          item.classList.remove("select-music");
        }
      }
    });
    musicImage.children[0].src = imageList[index];
    audio.src = playList[index];
    musicName.innerText = musicNameList[index];
    progress.style.width = 0;
    playBtn.innerHTML = playIcon;
    audio.currentTime = 0;
    currentTimeUpdate = 0;
    value = 0;
    musicImage.classList.remove("effect");
  });
});

repeat.addEventListener("click", function () {
  if (repeat.style.color === "") {
    repeat.style.color = "#c850c0";
    repeatCheck = true;
  } else {
    repeat.style.color = "";
    repeatCheck = false;
  }
});

downloadMusic.addEventListener('click', function () {
  
});

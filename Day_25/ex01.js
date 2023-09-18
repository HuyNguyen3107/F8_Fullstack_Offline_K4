var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

var itemWidth = carouselInner.clientWidth;
var items = carouselInner.children;

var totalWidth = items.length * itemWidth;

var dotList = carousel.querySelector(".dot-list");
for (var i = 0; i < items.length; i++) {
  var dotItem = document.createElement("span");
  dotItem.classList.add("dot-item");
  if (i === 0) {
    dotItem.classList.add("active");
  }
  dotList.appendChild(dotItem);
}
var dotItems = dotList.querySelectorAll(".dot-item");

carouselInner.style.width = `${totalWidth}px`;
var position = 0;
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
    var count = 1;
    dotItems.forEach(function (item) {
      if (item.classList.contains("active") && count === 1) {
        item.classList.remove("active");
        item.nextElementSibling.classList.add("active");
        count++;
      }
    });
  }
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
    var count = 1;
    dotItems.forEach(function (item) {
      if (item.classList.contains("active") && count === 1) {
        item.classList.remove("active");
        item.previousElementSibling.classList.add("active");
        count++;
      }
    });
  }
});

dotItems.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    var prevIndex;
    var currentIndex = index + 1;
    this.classList.add("active");
    dotItems.forEach(function (itemDot, index) {
      if (itemDot.classList.contains("active") && itemDot !== item) {
        itemDot.classList.remove("active");
        prevIndex = index + 1;
      }
    });
    if (currentIndex > prevIndex) {
      var step = currentIndex - prevIndex;
      position -= step * itemWidth;
      carouselInner.style.translate = `${position}px`;
    } else {
      var step = prevIndex - currentIndex;
      position += step * itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
  });
});

var isDrag = false;
var initialOffsetX;
var rateChange = (10 * itemWidth) / 100;
var check = false;
var checkMove = false;

carouselInner.addEventListener("mousedown", function (e) {
  isDrag = true;
  initialOffsetX = e.offsetX;
  checkMove = true;
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag && checkMove) {
    var currentOffsetX = e.offsetX;
    var moveWidth = currentOffsetX - initialOffsetX;

    if (moveWidth < 0) {
      if (Math.abs(moveWidth) > rateChange) {
        if (!check && Math.abs(position) < totalWidth - itemWidth) {
          carouselInner.style.transition = null;
          position -= itemWidth;
          carouselInner.style.translate = `${position}px`;
          check = true;
          checkMove = false;
          var count = 1;
          dotItems.forEach(function (item) {
            if (item.classList.contains("active") && count === 1) {
              item.classList.remove("active");
              item.nextElementSibling.classList.add("active");
              count++;
            }
          });
        }
      } else {
        carouselInner.style.transition = "none";
        carouselInner.style.translate = `${position + moveWidth}px`;
      }
    } else {
      if (Math.abs(moveWidth) > rateChange) {
        if (!check && Math.abs(position) > 0) {
          carouselInner.style.transition = null;
          position += itemWidth;
          carouselInner.style.translate = `${position}px`;
          check = true;
          checkMove = false;
          var count = 1;
          dotItems.forEach(function (item) {
            if (item.classList.contains("active") && count === 1) {
              item.classList.remove("active");
              item.previousElementSibling.classList.add("active");
              count++;
            }
          });
        }
      } else {
        carouselInner.style.transition = "none";
        carouselInner.style.translate = `${position + moveWidth}px`;
      }
    }
  }
});

carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  if (check) {
    check = false;
  } else {
    carouselInner.style.transition = null;
    carouselInner.style.translate = `${position}px`;
  }
});

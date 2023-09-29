var sortTable = document.querySelector(".sort-table");
var modules = sortTable.querySelectorAll(".module");
var sortItems = sortTable.querySelectorAll(".sort-item");

var indexItem = 0;
var indexModule = 0;

var renderIndex = function (modules, sortItems) {
  modules.forEach(function (item) {
    var content = item.innerText;
    item.innerText = `Module ${++indexModule}: ${content}`;
    item.draggable = "true";
  });
  sortItems.forEach(function (item) {
    if (!item.classList.contains("module")) {
      var content = item.innerText;
      item.innerText = `Bài ${++indexItem}: ${content}`;
      item.draggable = "true";
    }
  });
};

var sortIndex = function (modules, sortItems) {
  modules.forEach(function (item) {
    var temp = item.innerText.split("");
    var index = temp.indexOf(":");
    temp.splice(7, index - 7, ++indexModule);
    item.innerText = temp.join("");
  });
  sortItems.forEach(function (item) {
    if (!item.classList.contains("module")) {
      var temp = item.innerText.split("");
      var index = temp.indexOf(":");
      temp.splice(4, index - 4, ++indexItem);
      item.innerText = temp.join("");
    }
  });
};

renderIndex(modules, sortItems);
var dragContent;
var current = 0;
var tempDrag;

modules.forEach(function (module) {
  module.addEventListener("dragstart", function (e) {
    tempDrag = e.target;
    e.target.style.opacity = 0.5;
    indexItem = 0;
    indexModule = 0;
  });
  module.addEventListener("dragend", function (e) {
    tempDrag.style.opacity = 1;
    var moduleList = document.querySelectorAll(".module");
    var itemList = document.querySelectorAll(".sort-item");
    sortIndex(moduleList, itemList);
    current = 0;
  });
  module.addEventListener("dragenter", function (e) {
    if (e.target.previousElementSibling) {
      var tempPrev = e.target.previousElementSibling.getBoundingClientRect();
    }
    if (e.pageY > current) {
      if (tempPrev?.bottom <= e.pageY) {
        sortTable.insertBefore(tempDrag, e.target.nextElementSibling);
      }
      current = e.pageY;
    } else {
      sortTable.insertBefore(tempDrag, e.target);
      current = e.pageY;
    }
  });
});

sortItems.forEach(function (sortItem) {
  if (!sortItem.classList.contains("module")) {
    sortItem.addEventListener("dragstart", function (e) {
      tempDrag = e.target;
      e.target.style.opacity = 0.5;
      indexItem = 0;
      indexModule = 0;
    });
    sortItem.addEventListener("dragend", function (e) {
      tempDrag.style.opacity = 1;
      var moduleList = document.querySelectorAll(".module");
      var itemList = document.querySelectorAll(".sort-item");
      sortIndex(moduleList, itemList);
      current = 0;
    });
    sortItem.addEventListener("dragenter", function (e) {
      if (e.target.previousElementSibling) {
        var tempPrev = e.target.previousElementSibling.getBoundingClientRect();
      }
      if (e.pageY > current) {
        if (tempPrev?.bottom <= e.pageY) {
          sortTable.insertBefore(tempDrag, e.target.nextElementSibling);
        }
        current = e.pageY;
      } else {
        console.log("huy", e.target);
        sortTable.insertBefore(tempDrag, e.target);
        current = e.pageY;
      }
    });
  }
});

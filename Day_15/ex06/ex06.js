var container = document.getElementById("container");
for (var i = 1; i <= 8; i++) {
  if (i % 2 === 0) {
    for (var j = 1; j <= 8; j++) {
      if (j % 2 === 0) {
        var item = document.createElement("div");
        item.style.display = "inline-block";
        item.style.width = "50px";
        item.style.height = "50px";
        item.style.backgroundColor = "black";
        item.style.verticalAlign = "bottom";
        container.appendChild(item);
      } else {
        var item = document.createElement("div");
        item.style.display = "inline-block";
        item.style.width = "50px";
        item.style.height = "50px";
        item.style.backgroundColor = "white";
        item.style.verticalAlign = "bottom";
        container.appendChild(item);
      }
    }
  } else {
    for (var j = 1; j <= 8; j++) {
      if (j % 2 === 0) {
        var item = document.createElement("div");
        item.style.display = "inline-block";
        item.style.width = "50px";
        item.style.height = "50px";
        item.style.backgroundColor = "white";
        item.style.verticalAlign = "bottom";
        container.appendChild(item);
      } else {
        var item = document.createElement("div");
        item.style.display = "inline-block";
        item.style.width = "50px";
        item.style.height = "50px";
        item.style.backgroundColor = "black";
        item.style.verticalAlign = "bottom";
        container.appendChild(item);
      }
    }
  }
  var space = document.createElement("br");
  container.appendChild(space);
}

var container = document.getElementById("container");
var count = 1;
for (var i = 1; i <= 9; i++) {
  var box = document.createElement("div");
  container.appendChild(box);
  for (var j = 1; j <= 10; j++) {
    var value = count * j;
    var item = document.createElement("div");
    item.innerHTML = `${count} * ${j} = ${value}`;
    box.appendChild(item);
  }
  count++;
  var space = document.createElement("br");
  container.appendChild(space);
}

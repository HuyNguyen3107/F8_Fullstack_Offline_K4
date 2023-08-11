var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit omnis non suscipit, deserunt possimus
harum hic itaque, consectetur sapiente qui beatae asperiores porro deleniti voluptatem modi rerum pariatur ullam.`;

var temp = content.split(" ");

for (var i = 0; i < temp.length; i++) {
  temp[i] = `<span>${temp[i]}</span>`;
}
content = temp.join(" ");

var index = 0;
setInterval(function () {
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);

  if (char === ">" && charNext !== " ") {
    document.getElementById("container").innerHTML =
      content.slice(0, index) + ` class = "redColor"` + content.slice(index);
  }
  index++;
  if (index === content.length) {
    index = 0;
  }
}, 10);

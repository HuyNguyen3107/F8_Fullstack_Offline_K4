var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit omnis non suscipit, deserunt possimus
harum hic itaque, consectetur sapiente qui beatae asperiores porro deleniti voluptatem modi rerum pariatur ullam.`;

content = `<span>${content}</span>`

content = content.replaceAll(' ', `</span> <span>`);


var n = 0;
setInterval(function () {
  var a = content.charAt(n);
  var b = content.charAt(n + 1);

  if (a === ">" && b !== " ") {
    document.getElementById("container").innerHTML =
      content.slice(0, n) + " " + `style = 'color: red'` + content.slice(n);
  }
  n++;
  if (n === content.length) {
    n = 0;
  }
}, 20);

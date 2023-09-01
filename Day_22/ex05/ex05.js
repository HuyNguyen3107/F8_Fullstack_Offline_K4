var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

var count = 0;

function render(arr) {
  if (Array.isArray(arr) && arr.length) {
    var result = [];
    result[
      result.length
    ] = `<option value="" hidden>Chọn chuyên mục</option>  <option value="">Chọn chuyên mục</option>`;
    for (var value of arr) {
      var check = value.name.split(" ").slice(-1).join("").split(".");
      var item = `<option value = "${++count}"> ${value.name}</option>`;
      if (check.length >= 2) {
        item = item.split(" ");
        for (var i = 0; i < check.length - 1; i++) {
          item.splice(4, 0, "--|");
        }
        item = item.join(" ");
      }
      result.push(item);
      if ("children" in value) {
        var temp = render(value.children);
        result.push(temp.join(" "));
      }
    }
    return result;
  } else {
    return "Đầu vào không hợp lệ";
  }
}
console.log(render(categories).join(" "));
var value = document.querySelector(".categories");
console.log(value);
value.innerHTML = render(categories).join(" ");

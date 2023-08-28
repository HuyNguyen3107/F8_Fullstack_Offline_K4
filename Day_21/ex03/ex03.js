var arr = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function buildTree(arr, parentId = 0) {
  if (arr.length) {
    var result = [];
    for (var item of arr) {
      if ("parent" in item) {
        if (item.parent === parentId) {
          var children = [];
          for (var value of arr) {
            if (value.parent !== parentId && value.parent === item.id) {
              delete value.parent;
              var temp = buildTree(arr, value.id);
              if (temp.length) {
                value.children = temp;
              }
              children.push(value);
            }
          }
          if (children.length > 0) {
            item.children = children;
          }
          delete item.parent;
          result.push(item);
        }
      }
    }
    return result;
  } else {
    return "Giá trị không hợp lệ.";
  }
}

console.log(buildTree(arr));

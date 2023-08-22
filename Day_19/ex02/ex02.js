var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var check = function (arr) {
  return arr.every(function (value) {
    if (Array.isArray(value)) {
      return false;
    } else {
      return true;
    }
  });
};

if (arr.length && Array.isArray(arr)) {
  var newArr = arr.reduce(function (a, b) {
    return a.concat(b);
  }, []);
  
  while (!check(newArr)) {
    newArr = newArr.reduce(function (a, b) {
      return a.concat(b);
    }, []);
  }
  console.log(newArr);
} else {
  console.log(`Giá trị không hợp lệ.`);
}

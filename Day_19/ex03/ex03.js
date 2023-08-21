var arr = [
  ["a", 1, true],
  ["b", 2, false],
  ["c", 3, false, undefined],
];

var newArr = arr.reduce(function (a, b) {
  return a.concat(b);
}, []);

var check = function (arr) {
  return arr.every(function (value) {
    if (Array.isArray(value)) {
      return false;
    } else {
      return true;
    }
  });
};

while (!check(newArr)) {
  newArr = newArr.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}
console.log(newArr);
var results = [];
while (newArr.length) {
  var temp = newArr[0];
  var result = newArr
    .filter(function (value) {
      if (typeof temp === typeof value) {
        return true;
      }
    })
    .filter(function (value) {
      var index = newArr.indexOf(value);
      if (index !== -1) {
        newArr.splice(index, 1);
      }
      return true;
    });
  results.push(result);
}

console.log(results);

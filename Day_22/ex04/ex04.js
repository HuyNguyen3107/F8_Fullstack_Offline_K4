Array.prototype.filter2 = function (callback) {
  var result = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var temp = callback(this[index], index, this);
      if (temp) {
        result[result.length] = this[index];
      }
    }
  }
  return result;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  arr.filter2(function (value) {
    if (value % 2 === 0) return true;
  })
);

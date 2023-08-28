Array.prototype.reduce2 = function (callback, result) {
  if (this.length) {
    var i = 0;
    if (result === undefined) {
      i++;
      result = this[0];
    }
    for (; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }
    return result;
  } else {
    return "Error.";
  }
};

var arr = ["a", 1, true, undefined];

var total = arr.reduce2(function (result, value) {
  return result + value;
},10);

console.log(total);

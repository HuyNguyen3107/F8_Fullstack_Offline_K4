Object.prototype.getCurrency = function (unit) {
  var value = this;
  value = +value;
  if (!Number.isNaN(value) && value !== Infinity) {
    var temp = value.toString().split("");
    for (var i = temp.length - 1; i >= 0; i -= 3) {
      if (i === temp.length - 1) {
        continue;
      }
      temp[i] += ",";
    }
    return temp.join("") + " " + unit;
  } else {
    return "Giá trị không hợp lệ.";
  }
};
var price = '7678678686';
price = price.getCurrency("đ");
console.log(price);

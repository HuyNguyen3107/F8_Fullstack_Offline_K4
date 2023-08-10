function reverseNum() {
  var val = document.getElementById("value").value;
  var n = +val;
  const m = n;
  if (n % 1 === 0 && n > 0) {
    var str = "";
    if (n < 10) {
      str += n;
    } else {
      var count = 10;
      while (n > 0) {
        var a = n % count;
        str += a;
        n /= 10;
        n = n - (n % 1);
      }
    }
    document.getElementById("result").innerHTML =
      `Số đảo ngược của số ${m} là: ` + str;
  } else {
    document.getElementById("result").innerHTML =
    `Giá trị nhập vào không hợp lệ. <br> Vui lòng nhập lại!`;
  }
}

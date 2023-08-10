function getFb() {
  var val = document.getElementById("value").value;
  const n = +val;
  if (n > 0 && n % 1 === 0) {
    var str = "";
    var fb = function (n) {
      if (n === 1 || n === 2) {
        return 1;
      }
      return fb(n - 1) + fb(n - 2);
    };
    var showFb = function (n) {
      var a = fb(n);
      if (n === 1) {
        str += a;
      } else {
        str += a + " ";
      }
      if (n > 1) {
        showFb(n - 1);
      }
    };
    showFb(n);
    document.getElementById("result").innerHTML =
      `Chuỗi ${n} số FIBONACCI đầu tiên: ` + str;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Giá trị nhập vào không hợp lệ. <br> (Giá trị không hợp lệ là số âm, số 0 hoặc không phải là số nguyên) <br> Vui lòng nhập lại giá trị để hiển thị kết quả!`;
  }
}

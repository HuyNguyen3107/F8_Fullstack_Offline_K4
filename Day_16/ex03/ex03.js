function convert() {
  var val = document.getElementById("value").value;
  var n = +val;
  if (n % 1 === 0 && n >= 0 && n <= 9999) {
    var checkQuantity = function (n) {
      var count = 0;
      var m = n;
      if (m === 0) {
        return 1;
      }
      while (m > 0) {
        m /= 10;
        m = m - (m % 1);
        count++;
      }
      return count;
    };
    var checkNum = function (n) {
      switch (n) {
        case 9:
          return "Chín";
        case 8:
          return "Tám";
        case 7:
          return "Bảy";
        case 6:
          return "Sáu";
        case 5:
          return "Năm";
        case 4:
          return "Bốn";
        case 3:
          return "Ba";
        case 2:
          return "Hai";
        case 1:
          return "Một";
        case 0:
          return "Không";
      }
    };
    function t(n) {
      if (n % 10 === 0) {
        var a = n / 10;
        return checkNum(a) + " Mươi";
      } else {
        var a = n / 10;
        a = a - (a % 1);
        var b = n % 10;
        var c;
        if (checkNum(b) === "Một") {
          c = "Mốt";
        } else if (checkNum(b) === "Bốn") {
          c = "Tư";
        } else {
          c = checkNum(b);
        }
        return checkNum(a) + " Mươi " + c;
      }
    }
    function s(n) {
      for (var i = 10; i <= 19; i++) {
        if (n === i) {
          var a = n % 10;
          if (checkNum(a) === "Không") {
            return "Mười";
          } else {
            return "Mười " + checkNum(a);
          }
        }
      }
    }

    var str = "";
    if (checkQuantity(n) === 4) {
      if (n % 1000 === 0) {
        var a = n / 1000;
        str = checkNum(a) + " Ngàn";
      }
      if (checkQuantity(n % 1000) === 1 && n % 1000 !== 0) {
        var a = n / 1000;
        a = a - (a % 1);
        var b = n % 10;
        str =
          checkNum(a) + " Ngàn " + "Không " + "Trăm " + "Linh " + checkNum(b);
      }
      if (checkQuantity(n % 1000) === 2) {
        var a = n / 1000;
        a = a - (a % 1);
        var b = n % 100;
        var c;
        if (10 <= b <= 19) {
          c = s(b);
        }
        if (20 <= b <= 99) {
          c = t(b);
        }
        str = checkNum(a) + " Ngàn " + "Không " + "Trăm " + c;
      }
      if (n % 100 === 0 && checkQuantity(n % 1000) === 3) {
        var a = n / 1000;
        a = a - (a % 1);
        var b = n % 1000;
        b /= 100;
        b = b - (b % 1);
        str = checkNum(a) + " Ngàn " + checkNum(b) + " Trăm";
      }
      if (10 <= n % 100 && n % 100 <= 99 && checkQuantity(n % 1000) === 3) {
        var a = n / 1000;
        a = a - (a % 1);
        var b = n % 1000;
        b /= 100;
        b = b - (b % 1);
        var c = n % 100;
        var d;
        if (20 <= c && c <= 99) {
          d = t(c);
        }
        if (10 <= c && c <= 19) {
          d = s(c);
        }
        str = checkNum(a) + " Ngàn " + checkNum(b) + " Trăm " + d;
      }
      if (checkQuantity(n % 100) === 1 && n % 100 !== 0) {
        var a = n / 1000;
        a = a - (a % 1);
        var b = n % 1000;
        b /= 100;
        b = b - (b % 1);
        str =
          checkNum(a) +
          " Ngàn " +
          checkNum(b) +
          " Trăm " +
          "Linh " +
          f(n % 100);
      }
    }

    if (checkQuantity(n) === 3) {
      if (checkQuantity(n % 100) === 1 && n % 100 === 0) {
        var a = n / 100;
        a = a - (a % 1);
        str = checkNum(a) + " Trăm";
      }
      if (checkQuantity(n % 100) === 1 && n % 100 !== 0) {
        var a = n / 100;
        a = a - (a % 1);
        var b = n % 10;
        str = checkNum(a) + " Trăm " + "Linh " + checkNum(b);
      }
      if (n % 100 >= 10 && n % 10 <= 99) {
        var a = n / 100;
        a = a - (a % 1);
        var b = n % 100;
        var c;
        if (b >= 10 && b <= 19) {
          c = s(b);
        }
        if (b >= 20 && b <= 99) {
          c = t(b);
        }
        str = checkNum(a) + " Trăm " + c;
      }
    }

    if (checkQuantity(n) === 2) {
      if (n >= 10 && n <= 19) {
        str = s(n);
      }
      if (n >= 20 && n <= 99) {
        str = t(n);
      }
    }

    if (checkQuantity(n) === 1) {
      str = checkNum(n);
    }

    document.getElementById("result").innerHTML = str;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Giá trị nhập vào không hợp lệ <br> Vui lòng nhập lại!`;
  }
}

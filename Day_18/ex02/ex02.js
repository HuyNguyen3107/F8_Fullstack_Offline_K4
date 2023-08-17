function getAverage() {
  var val = document.getElementById("value").value;
  var myArray = val.trim().split(" ");
  var check = 0;
  for (var i = 0; i < myArray.length; i++) {
    myArray[i] = +myArray[i];
    if (myArray[i] % 1 !== 0) {
      check++;
    }
  }
  if (check === 0) {
    var arr = [];
    function checked(n) {
      if (n % 1 !== 0 || n <= 1) {
        return false;
      } else {
        for (var i = 2; i < n; i++) {
          if (n % i === 0) {
            return false;
          }
        }
      }
      return true;
    }
    for (var i = 0; i < myArray.length; i++) {
      if (checked(myArray[i])) {
        arr[arr.length] = myArray[i];
      }
    }
    if (arr.length === 0) {
      document.getElementById("result").innerHTML = `Không có số nguyên tố`;
    } else {
      var average = 0;
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        average += arr[i];
        count++;
      }
      document.getElementById(
        "result"
      ).innerHTML = `Trung bình cộng của các số nguyên tố trong mảng là ${
        average / count
      }`;
    }
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Giá trị không hợp lệ <br> Vui lòng nhập lại!`;
  }
}

function getMaxVal() {
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
    var max = myArray[0];
    var min = myArray[0];
    var a = 0, b = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] >= max) {
        max = myArray[i];
        a = i + 1;
      }
      if (myArray[i] <= min) {
        min = myArray[i];
        b = i + 1;
      }
    }
    document.getElementById(
      "result"
    ).innerHTML = `Số lớn nhất trong mảng là ${max} và là phần tử thứ ${a} trong mảng 
    <br> 
    Số nhỏ nhất trong mảng là ${min} và là phần tử thứ ${b} trong mảng`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Giá trị không hợp lệ <br> Vui lòng nhập lại!`;
  }
}

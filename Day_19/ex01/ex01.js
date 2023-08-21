function getResult() {
  var val1 = document.getElementById("firstArray").value;
  var val2 = document.getElementById("secondArray").value;
  var arr1 = val1.trim().split(" ");
  var arr2 = val2.trim().split(" ");
  var check1 = 0;
  var check2 = 0;
  for (var i = 0; i < arr1.length; i++) {
    arr1[i] = +arr1[i];
    if (!arr1[i]) {
      check1++;
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    arr2[i] = +arr2[i];
    if (!arr2[i]) {
      check2++;
    }
  }
  if (check1 === 0 && check2 === 0) {
    var newArr = arr1.filter(function (value) {
      if (arr2.includes(value)) {
        return value;
      }
    });
    document.getElementById(
      "result"
    ).innerHTML = `Mảng gồm những phần tử là giao của hai mảng là: [${newArr.join(
      ", "
    )}]`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Giá trị không hợp lệ <br> Vui lòng nhập lại!`;
  }
}

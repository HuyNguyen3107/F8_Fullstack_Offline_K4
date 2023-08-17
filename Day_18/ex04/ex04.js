function sortArr() {
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
    var n = 0;
    for (var i = 0; i < myArray.length; i++) {
      for (var j = 0; j < myArray.length - n; j++) {
        if (myArray[j] > myArray[j + 1]) {
          var temp = myArray[j];
          myArray[j] = myArray[j + 1];
          myArray[j + 1] = temp;
        }
      }
      n++;
    }
    document.getElementById(
      "result"
    ).innerHTML = `Mảng sau khi sắp xếp: [${myArray.join(", ")}]`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Giá trị không hợp lệ <br> Vui lòng nhập lại!`;
  }
}
function insertArr() {
  var val = document.getElementById("value").value;
  var element = document.getElementById("element").value;
  var myArray = val.trim().split(" ");
  var arr = element.trim().split(" ");
  var check = 0;
  for (var i = 0; i < myArray.length; i++) {
    myArray[i] = +myArray[i];
    if (myArray[i] % 1 !== 0) {
      check++;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
    if (arr[i] % 1 !== 0) {
      check++;
    }
  }
  if (check === 0) {
    var n = 0;
    for (var i = 0; i < myArray.length; i++) {
      for (var j = 0; j < myArray.length - n; j++) {
        if (myArray[j] > myArray[j + 1]) {
          var temp = myArray[j];
          myArray[j] = myArray[j + 1];
          myArray[j + 1] = temp;
        }
      }
      n++;
    }
    console.log(myArray);
    console.log(arr);
    var newArr = [];
    newArr = newArr.concat(
      myArray.slice(0, arr[1] - 1),
      arr[0],
      myArray.slice(arr[1] - 1)
    );
    document.getElementById("result").innerHTML = `Mảng sau khi chèn giá trị ${
      arr[0]
    } vào vị trí ${arr[1]} là: [${newArr.join(", ")}]`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Giá trị không hợp lệ <br> Vui lòng nhập lại!`;
  }
}

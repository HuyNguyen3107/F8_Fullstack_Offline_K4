function handler() {
  var val = document.getElementById("value").value;
  var myArray = val.trim().split(" ");
  var arr = [];
  arr[arr.length] = myArray[0];
  for (var i = 0; i < myArray.length; i++) {
    if (!arr.includes(myArray[i])) {
      arr[arr.length] = myArray[i];
    }
  }
  document.getElementById("result").innerHTML = `Mảng sau khi đã xử lý:[${arr.join(', ')}]`;
}

function paint() {
  var val = document.getElementById("value").value;
  var n = +val;
  if (n % 1 === 0 && n > 0) {
    var count = 1;
    var result = "";
    for (var i = 1; i <= n; i++) {
      for (var j = 1; j <= i; j++) {
        result += ` ${count}`;
        count++;
      }
      result += `<br>`;
    }
    document.getElementById("triangle").innerHTML = result;
  }
}

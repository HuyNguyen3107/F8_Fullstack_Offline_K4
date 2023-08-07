function getTotal() {
  var val = document.getElementById("value").value;
  var n = +val;
  var S = 0;
  if (n % 1 === 0 && n > 0) {
    for (var i = 1; i <= n; i++) {
      S += i * (i + 1);
    }
    document.getElementById("total").innerHTML = "S = " + S;
  } else {
    document.getElementById("total").innerHTML = "Illegal. Please re-enter!";
  }
}

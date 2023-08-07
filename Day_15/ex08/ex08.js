function getTotal() {
  var val = document.getElementById("value").value;
  var n = +val;
  var S = 0;
  if (n > 0 && n % 1 === 0) {
    function calculate(n) {
      if (n === 1) {
        return 1;
      } else {
        return 1 / n + calculate(n - 1);
      }
    }
    S = calculate(n);
    document.getElementById("total").innerHTML = "Total = " + S.toFixed(2);
  } else {
    document.getElementById("total").innerHTML = "Illegal. Please re-enter!";
  }
}

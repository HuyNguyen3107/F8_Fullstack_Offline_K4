function getResult() {
  var val = document.getElementById("value").value;
  var n = +val;
  function check(n) {
    if ((n % 1 !== 0) & (n <= 1)) {
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
  function truePrint() {
    document.getElementById("result").innerHTML = `Số ${n} là số nguyên tố`;
  }
  function falsePrint() {
    document.getElementById(
      "result"
    ).innerHTML = `Số ${n} không phải là số nguyên tố`;
  }

  if (check(n)) {
    truePrint();
  } else {
    falsePrint();
  }
}

function getPrice() {
  var val = document.getElementById("value").value;
  var kWh = +val;
  var totalPrice = 0;
  if (kWh > 0) {
    if (kWh <= 50) {
      totalPrice = kWh * 1678;
    } else if (51 <= kWh <= 100) {
      kWh -= 50;
      totalPrice = 50 * 1678 + kWh * 1734;
    } else if (101 <= kWh <= 200) {
      kWh -= 100;
      totalPrice = 50 * 1678 + 50 * 1734 + kWh * 2014;
    } else if (201 <= kWh <= 300) {
      kWh -= 200;
      totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + kWh * 2536;
    } else if (301 <= kWh <= 400) {
      kWh -= 300;
      totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kWh * 2834;
    } else {
      kWh -= 400;
      totalPrice =
        50 * 1678 +
        50 * 1734 +
        100 * 2014 +
        100 * 2536 +
        100 * 2834 +
        kWh * 2972;
    }
    document.getElementById("totalPrice").innerHTML = totalPrice + " VND";
  } else {
    document.getElementById("totalPrice").innerHTML =
      "Illegal. Please re-enter!";
  }
}

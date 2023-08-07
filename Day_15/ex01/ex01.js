function getPrice() {
  var val = document.getElementById("number").value;
  var distance = +val;
  var totalPrice = 0;
  if (distance > 0) {
    if (distance <= 1) {
      totalPrice = distance * 15000;
    } else if (1 < distance <= 5) {
      distance -= 1;
      totalPrice = 15000 + distance * 13500;
    } else if (5 < distance <= 120) {
      distance -= 5;
      totalPrice = 15000 + 13500 * 4 + distance * 11000;
    } else {
      distance -= 5;
      totalPrice = 15000 + 13500 * 4 + distance * 11000;
      totalPrice = totalPrice - totalPrice * 0.1;
    }
    document.getElementById("totalPrice").innerHTML = totalPrice + " VND";
  } else {
    document.getElementById("totalPrice").innerHTML =
      "Please re-enter the number of kilometers traveled!";
  }
}

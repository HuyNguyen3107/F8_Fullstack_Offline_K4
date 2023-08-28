function sum(...args) {
  var total = 0;
  for (value of args) {
    value = +value;
    if (
      !Number.isNaN(value) &&
      value !== Infinity
    ) {
      total += value;
    } else {
      return `Giá trị không hợp lệ.`;
    }
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, [1], "1", true, ['a']));


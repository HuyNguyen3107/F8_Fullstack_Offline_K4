Array.prototype.push2 = function (...args) {
  for (var i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length;
};

var arr = [1, 2, 3, 4, "5", true, null, undefined];

console.log(arr.push2(9, 4, "4", undefined));
console.log(arr);

console.log(arr.push("a", 1, 2, 3));
console.log(arr);

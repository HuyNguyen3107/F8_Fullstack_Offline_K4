var a = 40;
var b = 60;
var c = 20;

var temp;
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log('Sắp xếp theo thứ tự tăng dần:', a, b, c);
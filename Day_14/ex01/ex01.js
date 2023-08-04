var a = 31;
var b = 7;

if (a % 1 !== 0 || b % 1 !== 0) {
  a += b;
  b = a - b;
  a -= b;
  console.log('a =', a.toFixed(2));
  console.log('b =', b.toFixed(2));
} else {
  a += b;
  b = a - b;
  a -= b;
  console.log('a =', a);
  console.log('b =',b);
}

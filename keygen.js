var dict = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

var t = new Date().getTime();
var s = '';

while (s.length < 12) {
  var i = Math.floor(Math.random() * dict.length);
  s = dict[i] + s;
}

while (s.length < 20) {
  var i = t % 64;
  t = Math.floor(t/64);
  s = dict[i] + s;
}

console.log(s);

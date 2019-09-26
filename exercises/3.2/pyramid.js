var n = 5;
var a = "*";
var b = 0;
var c = " ";
var d = n;
for (i = 0; i < n; i++) {
  console.log(c.repeat(--d) + a.repeat(b++) + a.repeat(b));
}

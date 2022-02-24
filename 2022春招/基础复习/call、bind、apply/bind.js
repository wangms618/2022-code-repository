var a = {
  user: 'bind',
  fn: function (x, y, z) {
    console.log(this.user, x, y, z);
  }
}
var b = a.fn

// 下面两种都可以
var c = b.bind(a)
console.log(typeof c); // function
c(1, 2, 3) // bind 1 2 3

var d = b.bind(a, 1, 2)
d(3) // bind 1 2 3

b(1, 2, 3)
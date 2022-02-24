var a = {
  user: 'call',
  fn: function (x,y,z) {
    console.log(this.user,x,y,z);
  }
}
var b = a.fn
b.call(a, 1, 2, 3) // call 1 2 3
b(1,2,3)
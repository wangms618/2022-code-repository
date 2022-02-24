var a = {
  user: 'apply',
  fn: function (x,y,z) {
    console.log(this.user,x,y,z);
  }
}
var b = a.fn
b.apply(a,[1,2,3]) // apply 1 2 3
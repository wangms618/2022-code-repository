Function.prototype.mybind = function (context = Window) {
  if (typeof this !== 'function') {
    throw new Error('not Function')
  }
  // 因为要返回函数，所以保存作用域
  let that = this
  let arr = [...arguments].slice(1)
  console.log(arr);
  return function () {
    let arr2 = [...arguments].slice(1)
    arr = arr.concat(arr2)
    that.apply(context, arr)
  }
}

function test(x, y, z) {
  console.log(this.name);
  // console.log(x,y,z);
}
test.mybind(this, 1, 2, 3)
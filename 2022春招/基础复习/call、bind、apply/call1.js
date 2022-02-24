Function.prototype.mycall = function (context = Window) {
  if (typeof this !== 'function') {
    throw new Error('not Function')
  }
  context.fn = this
  let res
  let [arg] = [...arguments].slice(1)
  if (arg) {
    res = context.fn(...arg)
  } else {
    res = context.fn()
  }
  delete context.fn
  return res
}

function test(x, y, z) {
  console.log(123);
}
test.mycall(this)
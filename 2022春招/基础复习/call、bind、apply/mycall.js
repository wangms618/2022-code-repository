// 将要改变this指向的方法挂到目标this执行并返回
var a = {
  name: '京'
}

// context上下文
Function.prototype.mycall = function (context = window) {
  // 判断是否是个函数
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  // 如果mycall()里为空就指向window
  // this指向调用的mycall的函数
  context.fn = this // 把它挂到需要指向的对象上
  let arg = [...arguments].slice(1)
  console.log(arg);
  let result;
  result = context.fn(...arg) // 执行
  delete context.fn // 用完删掉
  return result
}

function test(x, y, z) {
  console.log(this.name);
  // console.log(x,y,z);
}
test.mycall(a)
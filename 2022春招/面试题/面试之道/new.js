// new实现
// 创建对象
// 设置对象原型
// 绑定this并执行构造函数
// 返回该对象
function myNew() {
  let obj = {}
  // 因为arguments是一个类数组，借助数组的shift将第一个参数取出，也就是构造函数
  let fn = [].shift.call(arguments)
  // 将对象原型设置为构造函数的prototype
  obj.__proto__ = fn.prototype
  // 将构造函数里的参数存入obj里，并调用构造函数
  let result = fn.apply(obj, arguments)
  // 如果构造返回的是对象，则返回构造函数返回的对象，如果不是，就返回创建的对象
  return result instanceof Object ? result : obj
}

function test(x, y) {
  this.x = x
  this.y = y
}
let obj = myNew(test, 1, 2)
obj.x = 2
console.log(test.x);
// 箭头函数和普通函数有什么不同？如何判断一个函数是普通函数还是箭头函数？
// 1. 箭头函数中和普通函数里的this指向不同，箭头函数中其实没有this，在箭头函数中调用的this是在箭头函数所属上下文中的this，普通函数里的this指向的是他自己内部
// 2. 箭头函数都是匿名函数，普通函数可以命名
// 3. 箭头函数不能用于构造函数，不能使用new。普通函数可以用于构造函数，创建对象实例
// 4. 箭头函数不绑定arguments
// 5. 箭头函数无原型

// new
function MyNew() {
  //创建一个空对象
  let obj = {}
  //获取构造函数
  let Con = [].shift.call(arguments)
  //设置空对象的原型
  obj.__proto__ = Con.prototype
  // 使用apply绑定this，执行构造函数
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
  
function Mynew() {
  let obj = {}
  let constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = constructor.prototype
  constructor.apply(obj, arguments)
  return obj
}
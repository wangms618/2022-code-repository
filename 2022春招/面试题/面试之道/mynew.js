function myNew() {
  let obj = {}
  // 获取构造函数
  let fn = [].shift.call(arguments)
  obj.__proto__ = fn.prototype
  // 将构造函数里的参数存入obj里，并调用构造函数
  let result = fn.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
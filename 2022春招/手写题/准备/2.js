// new返回一个对象，且this指向该对象
function myNew() {
    let obj = {}
    // 把它的第一个参数取出来
    let fn = [].shift.call(arguments)
    obj.__proto__ = fn.prototype
    let result = fn.apply(obj, arguments)
    return typeof result === 'object' ? object : obj
}
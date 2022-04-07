function myNew() {
    let obj = {}
    let fn = Array.prototype.shift.call(arguments)
    obj.__proto__ = fn.prototype
    let result = fn.apply(obj, arguments)
    return (typeof result === 'object' || typeof result === 'function') ? result : obj
}
function Person(name, age) {
    this.name = name
    this.age = age
    return {}
}
let p = new Person('布兰', 12)
console.log(p) // Person { name: '布兰', age: 12 }
function myNew() {
    let obj = {}
    let fn = [].shift.call(arguments)
    obj.__proto__ = fn.prototype
    let result = fn.apply(obj, arguments)
    return result instanceof Object ? result : obj
}
let p2 = myNew(Person, 1, 2)
console.log(p2);

// 需要判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
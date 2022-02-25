function SuperType() {
    this.colors = ['red', 'green', 'blue']
}
SuperType.prototype.getValue = function () {
    console.log(this.colors);
}

function SubType() {
    SuperType.call(this) // 等于在当前作用域执行了一遍SuperType函数，等同于复制父类SuperType的实例给子类（不使用原型）
}
var instance = new SubType()
instance.getValue() // instance.getValue is not a function 原型上的方法没有继承到
instance.colors.push('pink')
console.log(instance.colors); // [ 'red', 'green', 'blue', 'pink' ]
var instance2 = new SubType()
console.log(instance2.colors); // [ 'red', 'green', 'blue' ]
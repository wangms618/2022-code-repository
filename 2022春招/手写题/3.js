// function SuperType() {
//     this.colors = ['red', 'green', 'blue']
// }

// function SubType() {
//     SuperType.call(this) // 等于在当前作用域执行了一遍SuperType函数，等同于复制父类SuperType的实例给子类（不使用原型）
// }
// var instance = new SubType()
// instance.colors.push('pink')
// console.log(instance.colors); // [ 'red', 'green', 'blue', 'pink' ]
// var instance2 = new SubType()
// console.log(instance2.colors); // [ 'red', 'green', 'blue' ]

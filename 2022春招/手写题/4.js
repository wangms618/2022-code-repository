function SuperType(name) {
    this.name = name
    this.colors = ['red', 'green', 'blue']
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name) // 构造函数继承
    this.age = age
}
SubType.prototype = new SuperType() // 原型链继承，用SuperType类型的一个实例来重写SubType类型的原型对象
SubType.prototype.sayAge = function () {
    console.log(this.age);
}

var instance1 = new SubType('老鱼', 18)
instance1.colors.push('pink')
console.log(instance1.colors); // ['red', 'green', 'blue', 'pink']
instance1.sayName() // 老鱼
instance1.sayAge() // 18

var instance2 = new SubType('虾米', 20)
console.log(instance2.colors); // [ 'red', 'green', 'blue' ]
instance2.sayName() // 虾米
instance2.sayAge() // 20
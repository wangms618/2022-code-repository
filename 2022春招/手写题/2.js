function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 这里是关键，创建SuperType的实例，并将该实例赋值给SubType.prototype
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue()); // true

// 原型链方案存在的缺点：多个实例对引用类型的操作会被篡改。
// function SuperType() {
//     this.colors = ["red", "blue", "green"];
// }

// function SubType() {}

// SubType.prototype = new SuperType();

// var instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors); //"red,blue,green,black"

// var instance2 = new SubType();
// console.log(instance2.colors); //"red,blue,green,black"
// 超类构造函数中定义的引用类型的实例属性，会在子类的原型上变成属性，被所有子类的实例所共享，即修改任意一个被共享的实例都会同步到所有实例。
// 在创建子类型的实例时，不能向超类的构造函数中传递参数。
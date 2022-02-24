// function User(name) {
//   var name = name // 私有属性，只能在内部使用
//   this.name = name // 共有属性，可在外部调用
//   function getName() { // 私有方法
//     return name
//   }
// }
// User.prototype.getName = function () { // 公有方法
//   return this.name
// }
// User._name = 'yongling' // 静态方法
// User.getName = function (){ // 静态方法
//   return this.name
// }
// var test = new User('yongling')
// console.log(test._name);





function Foo() {
  getName = function () {
    alert(1)
  }
  return this
}
Foo.getName = function () {
  alert(2)
}
Foo.prototype.getName = function () {
  alert(3)
}
var getName = function () {
  alert(4)
}

function getName() {
  alert(5)
}

// 请写出以下输出结果
// Foo.getName() // 2
// getName() // 5
// Foo().getName() // 1
// getName() // 5
// new Foo.getName()  // 
// new Foo().getName()
// new new Foo().getName()
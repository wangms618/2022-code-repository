function Foo() {
  getName = function () {
    alert(1)
  }
  return this // 指向window
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
Foo.getName() // 2
getName() // 4
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // 3 // 指向实例，及空，寻找原型链上所以是3
new (new Foo()).getName() // 3


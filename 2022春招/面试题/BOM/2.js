var age = 29; // var声明的全局变量会挂在window上，但是他的configurable为false，意思就是不可配置，无法删除
// 通过var往window上添加的属性会有一个名为configurable的特性，值为false，也就是不可配置，无法删除
window.color = "red"; // 直接在window上挂color属性，他的configurable是true
delete window.age; // 不能删
delete window.color; // 可以删
alert(window.name) // ''
alert(window.age) // 29
alert(window.color) // undefined

set
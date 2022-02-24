// var let const 区别是什么？ 什么是变量提升？ 什么是暂时性死区？
// 1. var不是声明全局变量
// 如果在全局作用域中用var声明变量，此变量会默认成为window的一个属性，let声明的变量则不会添加到window对象中。


// 原型继承和class继承
// 如何实现原型继承?class如何实现继承？class本质是什么

// 原型继承和class继承
// 如何实现原型继承？class如何实现继承？class本质是什么？
// class Person{}
// Person instanceof Function // true
// 组合继承
// function Parent(value) {
//   this.val = value
// }
// Parent.prototype.getValue = function() {
//   console.log(this.val);
// }
// function Child(value) {
//   Parent.call(this, value)
// }
// Child.prototype = new Parent()

// let child = new Child(1)
// child.getValue() // 1
// child instanceof Parent // true



class Person {}
Person instanceof Function // true class本质是函数

// 寄生组合继承
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function () {
  console.log(this.val)
}

function Child(value) {
  Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})
// const child = new Child(1)
// child.getValue() // 1child instanceof Parent // true


// class继承
// class 原型组合继承和class继承继承


// 模块化 (为什么要用模块化？有哪几种模块化的实现？各有什么特点？)
// 1. 解决命名冲突
// 2. 提高代码的复用性
// 3. 提高代码的可以维护性
// 实现
// 立即执行函数
// (function test() {
// let test = function () {}
// })()

// AMD CMD

// AMD
// define(['./a', './b'], function (a, b) {
//   a.do()
//   b.do()
// })

// CMD
// define(function (require, exports, module) {
//   var a = require('./a')
//   a.do()
//   // ...
// })

// commonJS
// a.js
module.exports = {
  a: 1
}
exports.a = 1

// b.js
var module = require('./a.js')
module.a // 1

// ES module
import xxx from './a.js'
import {
  xxx
} from './a.js'
export default function () {}
export function a() {}


// Proxy(可以实现什么功能？)
// vue3.0使用了Proxy
// let p = new Proxy(target,handler)
let obj = {
  a: 1
}
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
  }
)
let onWatch = (obj, setBind, getBind) => {
  let handler = {
    get(target, property, receiver) {
      getBind(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, receiver)
    }
  }
  return new Proxy(obj, handler)
}
p.a = 2
p.a


// map filter reduce
// [1, 2, 3].map(v => v + 1)
let arr = [1, 2, 3]
const newArr = arr.map((v, i, arr) => v + 1)
console.log(arr, newArr);
['1', '2', '3'].map(parseInt)
// parseInt('1', 0) // 1
// parseInt('2', 1) // NaN
// parseInt('3', 2) // NaN

// filter
let array = [1, 2, 4, 6]
let newArray = array.filter((item, index, array) => item > 2)

// reduce

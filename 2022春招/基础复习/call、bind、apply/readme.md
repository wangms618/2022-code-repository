# 知识复盘，手写call,apply,bind
不多说，我们来看看call、apply、bind的用法
## call、apply、bind用法
### call用法
```js
var a = {
  user: 'call',
  fn: function (x,y,z) {
    console.log(this.user,x,y,z);
  }
}
var b = a.fn
b.call(a,1,2,3) // call 1 2 3
```
传递的第一个参数做为调用它的函数的this指向,后边参数为函数本身的参数
### apply用法
```js
var a = {
  user: 'apply',
  fn: function (x,y,z) {
    console.log(this.user,x,y,z);
  }
}
var b = a.fn
b.apply(a,[1,2,3]) // apply 1 2 3
```
传递的第一个参数做为调用它的函数的this指向,后边参数为函数本身参数的数组形式
### bind用法
```js
var a = {
  user: 'bind',
  fn: function (x, y, z) {
    console.log(this.user, x, y, z);
  }
}
var b = a.fn

// 下面两种都可以
var c = b.bind(a) 
console.log(typeof c); // function
c(1, 2, 3) // bind 1 2 3

var d = b.bind(a, 1, 2)
d(3) // bind 1 2 3
```
传递的第一个参数做为调用它的函数的this指向，通过控制台可以看到返回的是一个函数
## 实现
### call实现
```js
Function.prototype.mycall = function (context) {
  // 判断是否是个函数
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  // 如果mycall()里为空就指向window
  context = context || window
  // this指向调用的mycall的函数
  context.fn = this // 把它挂到需要指向的对象上
  // 取下后面需要的参数
  let arg = [...arguments].slice(1)
  let result;
  result = context.fn(...arg)  // 执行
  delete context.fn // 用完删掉
  return result
}
```
apply与call有异曲同工之妙，只需小小改动就可完成
### apply实现
```js
Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  context = context || globalThis
  // 在里面挂载一个this，即当前函数
  console.log(this)  // [Function: text]
  context.fn = this
  // 解构
  let [arg] = [...arguments].slice(1)
  let result;
  result = context.fn(...arg)
  delete context.fn
  return result
}
```
接下来来手写bind，首先，bind需要返回一个函数，且函数可以传参，使用可以这样实现
### bind实现
```js
// 初步版
Function.prototype.myBind = function (obj) {
  // 因为要返回函数，所以要防止this的丢失
  var that = this
  // 参数切割,第一个arguments对象,包含mybind第一个括号的参数
  let arr = Array.prototype.slice.call(arguments, 1)
  // 会返回一个函数
  return function () {
    // 包含mybind第二个括号的参数
    let arr2 = Array.prototype.slice.call(arguments)
    // 合并前后两个数组
    arrSum = arr.concat(arr2)
    // 此时这个that指向的是调用myBind的函数，此时就是b
    that.apply(obj, arrSum);
  }
}
```
相信你也看到了，这只是初步版，如果使用new来调用，也就是发生了构造函数，那么实例会绑定到函数调用的this，而this值会因此失效，但传入的参数会生效，所以，我们来看第二版,考虑new调用的情况
```js
// 改进版，bind方法可以配合new使用而this值会因此失效
Function.prototype.myBind2 = function (obj) {
  var that = this
  let arr = Array.prototype.slice.call(arguments, 1)
  // 将返回函数设置为具名函数
  let newFn = function () {
    // 此时的this不是调用myBind的函数，而是newFn的实例
    let arr2 = Array.prototype.slice.call(arguments)
    arrSum = arr.concat(arr2)
    // 判断有没有使用new绑定
    if (this instanceof newFn) {
      // 将apply的this绑定到新实例上面
      that.apply(this, arrSum)
    } else {
      that.apply(obj, arrSum);
    }
  }
  return newFn;
}
```
优化
```js
Function.prototype.myBind3 = function (obj) {
  var that = this
  let arr = Array.prototype.slice.call(arguments, 1)
  // 中转函数
  let o = function () {}
  // 将返回函数设置为具名函数
  let newFn = function () {
    // 此时的this不是调用myBind的函数，而是newFn的实例
    // 此时只需要将this指向      就好了
    let arr2 = Array.prototype.slice.call(arguments)
    arrSum = arr.concat(arr2)
    // 判断有没有使用new绑定
    if (this instanceof newFn) {
      // 将apply的this绑定到新实例上面
      that.apply(this, arrSum)
    } else {
      that.apply(obj, arrSum);
    }
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
  // 这里我添加了一个中转函数，防止直接修改函数的prototype
  // 将调用myBind的函数的原型对象赋值给myBind里返回函数的原型对象
  o.prototype = that.prototype
  newFn.prototype = new o
  return newFn;
}
```
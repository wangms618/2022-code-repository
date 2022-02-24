// 可以返回一个函数体，函数体里放参数
// 也可以直接调用

// var a = {
//   user: 'bind',
//   fn: function (x, y, z) {
//     console.log(this.user, x, y, z);
//   }
// }
// var b = a.fn

// // 初步版
// Function.prototype.myBind = function (obj) {
//   // 因为要返回函数，所以要防止this的丢失
//   var that = this
//   // 参数切割,第一个arguments对象,包含mybind第一个括号的参数
//   let arr = Array.prototype.slice.call(arguments, 1)
//   // 会返回一个函数
//   return function () {
//     // 包含mybind第二个括号的参数
//     let arr2 = Array.prototype.slice.call(arguments)
//     // 合并前后两个数组
//     arrSum = arr.concat(arr2)
//     // 此时这个that指向的是调用myBind的函数，此时就是b
//     that.apply(obj, arrSum);
//   }
// }


// 改进版，bind方法可以配合new使用而this值会因此失效
Function.prototype.myBind2 = function (obj) {
  // 因为要返回函数，所以要防止this的丢失
  var that = this
  // 参数切割,第一个arguments对象,包含mybind第一个括号的参数
  let arr = Array.prototype.slice.call(arguments, 1)
  // 将返回函数设置为具名函数
  let newFn = function () {
    // 此时的this不是调用myBind的函数，而是newFn的实例
    // 此时只需要将this指向      就好了
    let arr2 = Array.prototype.slice.call(arguments)
    arrSum = arr.concat(arr2)
    // 判断有没有使用new绑定
    if (this instanceof newFn) {
      // 将this绑定到新实例上面
      that.apply(this, arrSum)
    } else {
      that.apply(obj, arrSum);
    }
  }
  // 将调用myBind的函数的原型对象赋值给myBind里返回函数的原型对象
  newFn.prototype = that.prototype
  // 会返回一个函数
  return newFn;
}
// b.myBind2(a, 1, 2)(3)
// 如果使用new来调用，也就是发生了构造函数，那么实例会绑定到函数调用的this


// 终极版 ，
// Function.prototype.myBind3 = function (obj) {
//   // 因为要返回函数，所以要防止this的丢失
//   var that = this
//   // 参数切割,第一个arguments对象,包含mybind第一个括号的参数
//   let arr = Array.prototype.slice.call(arguments, 1)
//   let o = function () {}
//   // 将返回函数设置为具名函数
//   let newFn = function () {
//     // 此时的this不是调用myBind的函数，而是newFn的实例
//     // 此时只需要将this指向      就好了
//     let arr2 = Array.prototype.slice.call(arguments)
//     arrSum = arr.concat(arr2)
//     // 判断有没有使用new绑定
//     if (this instanceof newFn) {
//       // 将apply的this绑定到新实例上面
//       that.apply(this, arrSum)
//     } else {
//       that.apply(obj, arrSum);
//     }
//   }
//   // 将调用myBind的函数的原型对象赋值给myBind里返回函数的原型对象
//   o.prototype = that.prototype
//   newFn.prototype = new o
//   // 会返回一个函数
//   return newFn;
// }

function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind2(null, 'cat');
const cat = new Cat('white');
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}
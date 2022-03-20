// Function.prototype.myBind3 = function (obj) {
//     if (typeof this !== 'function') {
//         throw new Error('not function')
//     }
//     obj = obj || window
//     var that = this
//     let arr = Array.prototype.slice.call(arguments, 1)
//     // 中转函数
//     let o = function () {}
//     // 将返回函数设置为具名函数
//     let newFn = function () {
//         // 此时的this不是调用myBind的函数，而是newFn的实例
//         let arr2 = Array.prototype.slice.call(arguments)
//         arrSum = arr.concat(arr2)
//         // 判断有没有使用new绑定
//         if (this instanceof newFn) {
//             // 将this绑定到新实例上面
//             that.apply(this, arrSum)
//         } else {
//             that.apply(obj, arrSum);
//         }
//     }
//     // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
//     // 这里我添加了一个中转函数，防止直接修改函数的prototype
//     o.prototype = that.prototype
//     newFn.prototype = new o
//     return newFn;
// }

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    context = context || window
    // 取到第一个函数
    let arg = [...arguments].slice(1)
    // 保证作用域不变
    let that = this

    function newFn() {
        let arg2 = [...arguments]
        let sumArg = [...arg, ...arg2]
        // 如果当前成立，说明调用了new
        if (this instanceof newFn) {
            that.apply(this, sumArg)
        } else {
            that.apply(context, sumArg)
        }
    }

    let o = function () {}
    o.prototype = that.prototype
    newFn.prototype = new o()
    return newFn
}
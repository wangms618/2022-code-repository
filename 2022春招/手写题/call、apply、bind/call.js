// 实现call
// context为我们自己规定的this应该在的上下文
Function.prototype.myCall = function (context) {
    // 判断是不是函数在调用这个方法
    if (typeof this !== 'function') {
        throw new Error('not function')
    }
    context = context || window
    // 在我们传入的上下文上添加fn属性，给它挂上this代表的函数
    context.fn = this
    // 获取参数 
    let arg = [...arguments].slice(1)
    let result = context.fn(...arg)
    delete context.fn
    return result
}

var a = {
    user: 'call',
    fn: function (x, y, z) {
        console.log(this.user, x, y, z);
    }
}
var b = a.fn
b.myCall(a) // call 1 2 3
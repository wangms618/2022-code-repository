// call
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    context = context || window
    // 取到调用myCall的函数
    context.fn = this
    // 参数
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
b.myCall(a, 1, 2, 3) // call 1 2 3

// console.log([''] == '');
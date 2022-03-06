Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not function')
    }
    context = context || window
    // 保留this，因为他要返回一个函数出去
    let that = this
    let arr = [...arguments].slice(1)
    return function () {
        let arr2 = [...arguments]
        arrSum = [...arr, ...arr2]
        that.apply(context, arrSum)
    }
}
var a = {
    user: 'bind',
    fn: function (x, y, z) {
        console.log(this.user, x, y, z);
    }
}
var b = a.fn

// 下面两种都可以
var c = b.myBind(a)
console.log(c);
c(1, 2, 3) // bind 1 2 3

var d = b.myBind(a, 1, 2)
d(3) // bind 1 2 3
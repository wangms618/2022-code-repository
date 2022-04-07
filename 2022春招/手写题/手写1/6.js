Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('nofunc')
    }
    context = context || window
    let that = this
    let arg = [...arguments].slice(1)
    return function () {
        let arg2 = [...arguments]
        let sumArg = [...arg, ...arg2]
        that.apply(context, sumArg)
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
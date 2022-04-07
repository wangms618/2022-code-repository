Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        return
    }
    context = context || window
    // 保留指针，因为需要返回一个函数
    let that = this
    let arg1 = [...arguments].slice(1)
    let newfn = function () {
        let arg2 = [...arguments]
        let argSum = [...arg1, ...arg2]
        if (this instanceof newfn) {
            that.apply(this, argSum)
        } else {
            that.apply(context, argSum)
        }
    }
    let o = function () {}
    o.prototype = that.prototype
    newfn.prototype = new o()
    return newfn
}
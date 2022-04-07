Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
        return
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
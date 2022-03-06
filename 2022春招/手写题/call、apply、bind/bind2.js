Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not function')
    }
    context = context || window
    // 保留this，因为他要返回一个函数出去
    let that = this
    let arr = [...arguments].slice(1)
    let newFn = function () {
        let arr2 = [...arguments]
        arrSum = [...arr, ...arr2]
        // 判断是否调用new
        if (this instanceof newFn) {
            that.apply(this, arrSum)
        } else {
            thit.apply(context, arrSum)
        }
    }
    let obj = function () {}
    obj.prototype = that.prototype
    newFn.prototype = new obj()
    return newFn
}
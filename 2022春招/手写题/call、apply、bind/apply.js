Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not function')
    }
    context = context || window
    context.fn = this
    const [arg] = [...arguments].slice(1)
    let result
    if (arg) {
        result = context.fn(...arg)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
var a = {
    user: 'apply',
    fn: function (x, y, z) {
        console.log(this.user, x, y, z);
    }
}
var b = a.fn
b.myApply(a, [1, 2, 3]) // apply 1 2 3
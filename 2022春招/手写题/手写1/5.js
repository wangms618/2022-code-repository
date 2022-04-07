Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    context = context || window
    let [arg] = [...arguments].slice(1)
    context.fn = this
    let result = arg ? context.fn(...arg) : context.fn()
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

console.log([''] == '');
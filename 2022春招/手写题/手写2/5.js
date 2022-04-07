Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    context = context || window
    context.fn = this
    let [arg] = [...arguments].slice(1)
    let result = context.fn(...arg)
    delete context
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
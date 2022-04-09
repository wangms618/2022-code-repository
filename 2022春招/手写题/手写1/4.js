// call
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    context = context || window
    let args = [...arguments].slice(1)
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}
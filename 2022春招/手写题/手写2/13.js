// 终极答案

function add() {
    let args = [...arguments]
    let fn = function () {
        args.push(...arguments)
        return fn
    }
    fn.toString = function () {
        return args.reduce((x, y) => x + y)
    }
    return fn
}

console.log(add(1)(1, 2)(1, 2, 3) - 0);
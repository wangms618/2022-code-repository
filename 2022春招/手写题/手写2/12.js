// function curry(fn, args) {
//     // 获取函数需要的参数长度
//     let length = fn.length;

//     args = args || [];
//     return function () {
//         let subArgs = args.slice(0)
//         subArgs = [...subArgs, ...arguments]
//         if (subArgs.length >= length) {
//             return fn.apply(this, subArgs)
//         } else {
//             return curry.call(this, fn, subArgs)
//         }
//     }


// }

// es6 实现
// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }

function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}

function foo(a, b, c, d) {

    return a + b + c + d
}

console.log(curry(foo, [1])(2, 3)(4));
function promiseAll(promises) {
    // 返回一个新的promise
    return new Promise(function (resolve, reject) {
        // 如果参数不是数组，返回
        if (!Array.isArray(promises)) {
            throw new TypeError(`argument must be a array`)
        }
        // 完成数
        var resolvedCounter = 0;
        // 数组长度
        var promiseNum = promises.length;
        // 结果数组
        var resolvedResult = [];
        for (let i = 0; i < promiseNum; i++) {
            // 执行数组里的promise
            Promise.resolve(promises[i]).then(value => {
                // 完成数++
                resolvedCounter++;
                // 结果数组存放
                resolvedResult[i] = value;
                // 如果完成数等于结果数
                if (resolvedCounter == promiseNum) {
                    // 返回结果数组
                    return resolve(resolvedResult)
                }
            }, error => {
                return reject(error)
            })
        }
    })
}
// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})
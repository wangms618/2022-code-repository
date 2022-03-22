function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            return
        }
        let resolvedCount = 0
        let promiseNum = promises.length
        let resolvedResult = []
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolvedCount++
                resolvedResult[i] = value
                if (resolvedCount == promiseNum) {
                    return resolve(resolvedResult)
                }
            }, error => {
                return reject(error)
            })
        }
    })
}
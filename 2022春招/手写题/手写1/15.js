function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            return
        }
        let count = 0
        let result = []
        for (let i = 0; i < length; i++) {
            Promise.resolve(promises[i]).then(value => {
                result[i] = value
                count++
                if (count == len) {
                    return resolve(result)
                }
            }, error => {
                return reject(error)
            })
        }
    })
}
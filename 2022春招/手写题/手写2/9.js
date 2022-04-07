function deepClone(obj) {
    if (typeof obj !== 'function' || obj === null) {
        return obj
    }
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}
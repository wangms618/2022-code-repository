function deepClone(obj) {
    if (obj === null && typeof obj !== 'object') {
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
let arr = [1, 3, {
    username: ' kobe'
}];

let arr4 = deepClone(null)
console.log(arr4);
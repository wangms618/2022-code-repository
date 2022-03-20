// 浅拷贝
function clone(obj) {
    if (typeof obj !== 'object' && obj !== null) {
        return
    }
    let object = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            object[key] = obj[key]
        }
    }
    return object
}
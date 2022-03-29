Object.myAssign = function (target, ...source) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    
    let ret = Object(target)
    source.forEach(function (obj) {
        if (obj != null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key]
                }
            }
        }
    })
    return ret
}
let obj1 = {
    a: 1
}
let obj2 = {
    b: 2
}
Object.myAssign(obj1, obj2)
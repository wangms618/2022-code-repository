function deepClone(obj) {
    if (typeof obj !== 'object') throw new Error('只接收对象类型')
    let res = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return res
}
let arr = [1, 3, {
    username: ' kobe'
}];

let arr4 = deepClone(arr)
arr4[2].username = 'duncan';
arr4[1] = 2
console.log('arr', arr);
console.log('arr4', arr4)
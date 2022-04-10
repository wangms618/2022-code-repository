// function foo(arr, depth) {
//     if (!Array.isArray(arr)) {
//         return
//     }
//     let res = []
//     myFlat(arr, depth)

//     function myFlat(arr, depth) {
//         arr.forEach(item => {
//             if (Array.isArray(item) && depth > 0) {
//                 myFlat(item, depth - 1)
//             } else {
//                 res.push(item)
//             }
//         })
//     }
//     return res
// }

let arr = [1, 2, 3, 4, [1, 2]]


Array.prototype.flat = function (depth) {
    if (typeof Array.prototype.flat === 'function') {
        if (Array.isArray(this) && depth > 0) {
            return this.flat(depth - 1)
        } else {
            return this
        }

    }
    if (!Array.isArray(arr)) {
        return
    }
    let res = []
    myFlat(arr, depth)

    function myFlat(arr, depth) {
        arr.forEach(item => {
            if (Array.isArray(item) && depth > 0) {
                myFlat(item, depth - 1)
            } else {
                res.push(item)
            }
        })
    }
    return res
}

console.log(arr.flat(2));


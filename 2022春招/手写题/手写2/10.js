function myFalt(arr, depth) {
    let res = []
    flat(arr, depth)

    function flat(arr, depth) {
        arr.forEach(item => {
            if (Array.isArray(item) && depth > 0) {
                flat(item, depth - 1)
            } else {
                res.push(item)
            }
        })
    }
    return res
}
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", {
    name: "弹铁蛋同学"
}];
console.log(myFalt(arr, 4));
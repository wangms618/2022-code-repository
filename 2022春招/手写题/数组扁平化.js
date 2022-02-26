const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", {
    name: "弹铁蛋同学"
}];
// 递归调用
function myFlat(arr) {
    let res = []
    fn(arr)
    function fn(arr) {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                fn(item)
            } else {
                res.push(item)
            }
        })
    }

    return res
}


console.log(myFlat(arr));
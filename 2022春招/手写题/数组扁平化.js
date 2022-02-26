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
// console.log(myFlat(arr));


// 正则
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '')
// console.log(res2);

const myFlat2 = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat2(cur) : cur)
    }, [])
}
console.log(myFlat2(arr));
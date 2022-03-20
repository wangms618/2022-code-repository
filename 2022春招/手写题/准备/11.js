// 去重
let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 1, 2, 2, 3, 4, 5]
console.log([...new Set(arr)]);

let res = []
arr.forEach((item, index) => {
    if (arr.indexOf(item) == index) {
        res.push(item)
    }
})
console.log(res);
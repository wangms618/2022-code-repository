// 去重
// const arr = [1, 2, 3, 3, 4, 5, 5, 3]
// const num = [...new Set(arr)]
// console.log(num);

// const res = arr.filter((item, index) => arr.indexOf(item) === index)
// console.log(res);

// 拍平
const arr = [1, [2],
    [3, [4, [5]]]
]

// 1
// function flag(arr) {
//     const res = []
//     fn(arr)

//     function fn(arr) {
//         arr.forEach(item => {
//             if (Array.isArray(item)) {
//                 fn(item)
//             } else {
//                 res.push(item)
//             }
//         })
//     }
//     return res
// }
// console.log(arr, flag(arr));

// 2 正则
// const reg = /\[|\]/g
// let str = '[' + JSON.stringify(arr).replace(reg, '') + ']'
// console.log(JSON.parse(str));

// reduce
// function flagReduce(arr) {
//     return arr.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flagReduce(cur) : cur)
//     }, [])
// }

// console.log(flagReduce(arr));

// const nums = [1, 2, 3]
// const nums2 = 123
// console.log(nums.concat(nums2));
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", {
    name: "弹铁蛋同学"
}];
// 递归调用
// function myFlat(arr, depth) {
//     let res = []
//     fn(arr, depth)
//     function fn(arr, depth) {
//         arr.forEach((item) => {
//             if (Array.isArray(item) && depth > 0) {
//                 fn(item, depth - 1)
//             } else {
//                 res.push(item)
//             }
//         })
//     }
//     return res
// }
// 核心思想，递归的时候传入当前希望减少的层数
// console.log(myFlat(arr, 3));

// 正则
// let res2 = JSON.stringify(arr).replace(/\[|\]/g, '')

// res2 = '[' + res2 + ']'
// console.log(JSON.parse(res2));

// const myFlat2 = (arr, depth) => {
//     return arr.reduce((pre, cur) => {
//         return pre.concat((Array.isArray(cur) && depth > 0) ? myFlat2(cur, depth - 1) : cur)
//     }, [])
// }
// const myFlat = (arr, depth) => {
//     return arr.reduce((pre, cur) => {
//         return pre.concat((Array.isArray(cur) && depth > 0) ? myFlat(cur, depth - 1) : cur)
//     }, [])
// }
// console.log(myFlat2(arr, 2));
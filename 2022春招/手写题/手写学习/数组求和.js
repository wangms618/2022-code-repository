// let arr = [1, 2, 3, [
//     [4, 5], 6
// ], 7, 8, 9]

// function myFlat(nums, depth) {
//     let res = []
//     dfs(nums, depth)

//     function dfs(nums, depth) {
//         nums.forEach(item => {
//             if (Array.isArray(item) && depth > 0) {
//                 dfs(item, depth - 1)
//             } else {
//                 res.push(item)
//             }
//         })
//     }
//     return res
// }

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

// console.log(myFlat(arr, 4));

// let arr = [1, [2, [3, 4, 5]]];

// function flatten(arr) {
//     let result = [];

//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             result = result.concat(flatten(item))
//         } else {
//             result.push(item)
//         }
//     })
//     return result
// }
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5, 6]
// console.log(flatten(arr));; //  [1, 2, 3, 4，5]



// function flatten(arr) {
//     return arr.reduce((pre, next) => {
//         return pre.concat(Array.isArray(next) ? flatten(next) : next)
//     },[])
// }



// function flatten(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             res = [...res, ...flatten(arr[i])]
//         } else {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// let arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)); //  [1, 2, 3, 4，5]

let arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.toString().split(',').map(item => +item)
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
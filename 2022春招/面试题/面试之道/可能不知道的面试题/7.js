// [1, [2, 3], [1, 2, 3]]
// arr = arr.flat(Infinity)
// console.log(arr);

// function faltten(arr) {
//   var res = []
//   arr.map(item => {
//     if (Array.isArray(item)) {
//       res = res.concat(faltten(item))
//     } else {
//       res.push(item)
//     }
//   })
//   return res
// }
// console.log(faltten(arr));

// 全部转为字符串
// let str = JSON.stringify(arr)
// str = str.replace(/(\[|\])/g, '')
// str = '[' + str + ']'
// console.log(JSON.parse(str));

// function flats(arr) {
//   while (arr.some(Array.isArray)) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }
// console.log(flats(arr));


let arr = [1, [2, 3],
  [1, [2, 3]]
]

function flat2(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flat2(arr));












// let arr2 = arr.flat(Infinity)
// console.log(arr2);


// let res = []
// function flat1(arr) {
//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       res.concat(flat1(item))
//     } else {
//       res.push(item)
//     }
//   });
//   return res
// }
// let arr3 = flat1(arr)
// console.log(arr3);
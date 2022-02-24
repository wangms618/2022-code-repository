// let arr = [1, 3, {
//   username: ' kobe'
// }];
// let arr3 = JSON.stringify(arr)
// let arr4 = JSON.parse(arr3);
// arr4[2].username = 'duncan';
// console.log(arr3);
// console.log(arr4);
// console.log('arr1');
// console.log('arr4', arr4)

// let arr = [1, 3, {
//   username: ' kobe'
// },function(){}];
// let arr4 = JSON.parse(JSON.stringify(arr));
// arr4[2].username = 'duncan'; 
// console.log(arr, arr4)

// 简单版
// function deepClone(source) {
//   if (typeof source === 'object') {
//     let target = Array.isArray(target) ? [] : {}
//     for (let key in source) {
//       if (source.hasOwnProperty(key)) {
//         target[key] = deepClone(source[key])
//       }
//     }
//     return target
//   } else {
//     return source
//   }
// }

// 考虑数组
function deeoClone(obj) {
  if (typeof obj === 'object') {
    let target = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        target[key] = deeoClone(obj[key])
      }
    }
    return target
  } else {
    return obj
  }
}

function deepClone(obj) {
  if (typeof obj === 'object') {
    let target = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        target[key] = deepClone(obj[key])
      }
    }
  } else {
    return obj
  }
}
let arr = [1, 3, {
  username: ' kobe'
}];

let arr4 = deeoClone(arr)
arr4[2].username = 'duncan';
arr4[1] = 2
console.log('arr', arr);
console.log('arr4', arr4)
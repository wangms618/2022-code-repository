// 1. 讲一下排序，给一个不懂快排的人讲快排，复杂度，为什么它叫快排？

// O(N * logN) 快排的效率最高

// 思路：快速排序会将原始数组筛选成较小和较大的两个子数组，
// 然后递归的排序两个子数组

let arr = [5, 1, 3, 6, 2, 0, 7]
// [5, 1, 3, 0, 2]
// [6, 7]

// function quickSort(arr) {
//   if (arr.length > 1) {
//     let lineIndex = Math.floor(arr.length / 2)   // 3
//     let pivot = arr.splice(lineIndex, 1)[0]    // 6

//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i])
//       } else {
//         right.push(arr[i])
//       }
//     }

//     return quickSort(left).concat([pivot], quickSort(right))
//     // return [...quickSort(left), pivot, ...quickSort(right)]
//   } else {
//     return arr
//   }
// }

// console.log(quickSort(arr));


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    const lineIndex = partition(arr, left, right)

    // 左边的子数组的长度不小于1
    if (left < lineIndex - 1) {
      quickSort(arr, left, lineIndex - 1)
    }
    // 右边的子数组的长度不小于1
    if (lineIndex < right) {
      quickSort(arr, lineIndex, right)
    }
  }

  return arr
}

function partition(arr, left, right) { // 划分左右子数组
  let pivotValue = arr[Math.fool(left + (right - left) / 2)]
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivotValue) {
      i++
    }
    while (arr[j] > pivotValue) {
      j--
    }

    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
// 将一个新的数，和前面的比较，只要当前数小于前一个则和前一个交换位置
let nums = [1, 7, 3, 4, 6, 5, 9, 1, 2, 3, 111, 233, 123]

function insertSort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  return arr
}
console.log(insertSort(nums));
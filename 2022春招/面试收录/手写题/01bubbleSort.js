// 遍历数组，然后将最大数沉到最底部
// 时间：O(N^2)
// 空间: O(1)

let nums = [1, 7, 3, 4, 6, 5, 9, 1, 2, 3, 111, 233, 123]

function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    // 优化
    let flag = true
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = false
      }
    }
    if (flag) return arr
  }
  return arr
}

console.log(bubbleSort(nums));
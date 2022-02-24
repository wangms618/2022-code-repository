// 思路：先左侧部分排好序，再右侧部分排好序
// 再准备一个辅助数组，用外排的方式，从小的开始填，直到有个动到末尾，将另一个数组剩余部分拷贝到末尾
// 再将辅助数组拷贝回原数组
let nums = [1, 7, 3, 4, 6, 5, 9, 1, 2, 3, 111, 233, 123]

function mergeSort(arr) {
  if (arr == null || arr.length <= 0) {
    return []
  }
  sortProcess(arr, 0, arr.length - 1)
  return arr
}

function sortProcess(arr, L, R) {
  if (L == R) { // 递归终止条件
    return
  }
  let middle = Math.floor(L + (R - L) / 2) // 找出中间值
  sortProcess(arr, L, middle) // 对左侧进行递归
  sortProcess(arr, middle, R) // 对右侧进行递归
  merge(arr, L, middle, R) // 利用外排的方式进行结合
}

function merge(arr, L, middle, R) {
  let help = []
  let l = L
  let r = middle + 1
  let index = 0
  while (l <= middle && r <= R) {
    help[index++] = arr[l] < arr[r] ? arr[l++] : arr[r++]
  }
  while (l <= middle) {
    help.push(arr[l++])
  }
  while (r <= R) {
    help.push(arr[r++])
  }
  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }
}

console.log(mergeSort(nums));
// 遍历数组，把最小数放在头部
// 时间：O(N^2)
// 空间：O(1)

let nums = [1, 7, 3, 4, 6, 5, 9, 1, 2, 3, 111, 233, 123]

function selectSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    // 记录此时最小值下标
    let minIndex = i
    for (let j = i + 1; j < len; j++) { // 将最小值的下标取到
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    // 将最小值与当前遍历到的值做对换
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
console.log(selectSort(nums));
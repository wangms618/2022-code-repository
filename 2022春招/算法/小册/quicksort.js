// 快排？学习
// ! 思想：选取一个基准值pivot
// ! 简化版，利用filter来写
function quickSort(arr) {
    if (arr.length < 2) return arr
    const pivot = arr[arr.length - 1]
    const left = arr.filter((item, index) => item <= pivot && index !== arr.length - 1)
    const right = arr.filter(item => item > pivot)
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [1, 2, 3, 4, 5, 1, 2, 2, 3, 4]
console.log(quickSort(arr));

// ! 不借助filter版
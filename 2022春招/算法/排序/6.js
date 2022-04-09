// 一分为三，有个基准值
function quickSort(arr) {
    if (arr.length < 2) return arr
    let pivot = arr.pop()
    let left = arr.filter((item) => item <= pivot)
    let right = arr.filter(item => item > pivot)
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort([1, 4, 3, 2]));
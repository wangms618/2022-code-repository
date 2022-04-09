function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = Math.floor(arr.length / 2)
    let pivotValue = arr.splice(pivot, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivotValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivotValue], quickSort(right))
}

console.log(quickSort([1, 4, 3, 2]));
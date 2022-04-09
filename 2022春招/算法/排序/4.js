// 归并
function mergeSort(arr) {
    const len = arr.length
    if (len === 0 || len === 1) return arr // 一定要进行判断，不然会发生栈溢出
    const mid = Math.floor(len / 2)
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    return mergeArr(leftArr, rightArr)
}

function mergeArr(left, right) {
    const res = []
    let m = 0,
        n = 0

    while (m < left.length && n < right.length) {
        if (left[m] <= right[n]) {
            res.push(left[m++])
        } else {
            res.push(right[n++])
        }
    }
    return res.concat(left.slice(m)).concat(right.slice(n));
}

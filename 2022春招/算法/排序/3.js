function insertSort(arr) {
    let len = arr.length
    // 默认第一个已经是有序
    for (let i = 1; i < len; i++) {
        let preIndex = i - 1
        let current = arr[i]
        while (current < arr[i] && preIndex >= 0) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}
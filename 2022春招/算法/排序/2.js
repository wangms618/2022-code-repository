function selectSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let minIndex = i
        for (let j = i + 1; j < len; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}
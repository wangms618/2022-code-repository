let nums = [1, 7, 3, 4, 6, 5, 9, 1, 2, 3, 111, 233, 123]

function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let flag = true
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = false
            }
        }
        if (flag) return arr
    }
    return arr
}


console.log(bubbleSort(nums), nums);
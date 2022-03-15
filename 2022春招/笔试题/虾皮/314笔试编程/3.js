function findUniqueCommon(arr1, arr2) {
    // write code here
    // 如果取较短数组的值
    let arr = []
    if (arr1.length > arr2.length) {
        let len = arr2.length
        for (let i = 0; i < len; i++) {
            if (arr1.indexOf(arr2[i]) !== -1) {
                if (arr.indexOf(arr2[i]) == -1) {
                    arr.push(arr2[i])
                }
            }
        }
    } else {
        let len = arr1.length
        for (let i = 0; i < len; i++) {
            if (arr2.indexOf(arr1[i]) !== -1) {
                if (arr.indexOf(arr1[i]) == -1) {
                    arr.push(arr1[i])
                }
            }
        }
    }
    arr.sort((a, b) => a - b)
    return arr
}
// 数组去重
console.log(findUniqueCommon([3, 1, 2], [3, 1, 3, 8, 9]));
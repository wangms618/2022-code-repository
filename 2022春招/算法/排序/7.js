let arr1 = [1, 3, 6, 9, 54]
let arr2 = [2, 4, 7]

function mergeArray(arr1, arr2) {
    let res = []
    let len1 = arr1.length - 1
    let len2 = arr2.length - 1
    while (len1 >= 0 && len2 >= 0) {
        if (arr1[len1] >= arr2[len2]) {
            res.unshift(arr1[len1--])
        } else {
            res.unshift(arr2[len2--])
        }
    }
    while (len1 >= 0) {
        res.unshift(arr1[len1--])
    }
    while (len2 >= 0) {
        res.unshift(arr2[len2--])
    }
    return res
}

console.log(mergeArray(arr1, arr2));
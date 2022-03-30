const nums = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 1]

// 第1种
function unique(arr) {
    const arrs = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
    return arrs
}

// 第二种
const unique2 = (arr) => [...new Set(arr)]


console.log(unique(nums));
console.log(unique2(nums));
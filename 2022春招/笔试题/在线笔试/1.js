function foo(nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let left = nums[i][0]
        let right = nums[i][1]
        let height = nums[i][2]
        for (left; left <= right; left++) {
            if (res[left] == undefined) {
                res[left] = height;
            } else {
                res[left] = res[left] < height ? height : res[left];
            }
        }
        for (let i = 0; i < res.length; i++) {
            if (res[i] !== undefined) {
                let left = i
                let right = i + 1
                i++
                while (res[left] == res[right]) {
                    right++
                    i++
                }
            }
        }
    }
}
// [ <1 empty item>, 3, 6, 6, 6, <1 empty item>, 10, 10, 10, 6, 6 ]
let arr = [
    [1, 2, 3],
    [2, 4, 6],
    [6, 8, 10],
    [7, 10, 6]
]
foo(arr)
// 求最大乘积长度
// dp[i][0] 0到i下标下，为正数乘积长度最长的情况
// dp[i][1] 0到i下标下，为负数乘积长度最长的情况
// pd[i]
// dp[i][0] 有 如果test*nums[i] > 0 dp[i-1]
var getMaxLen = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            nums[i] = 1
        } else if (nums[i] < 0) {
            nums[i] = -1
        } else {
            continue
        }
    }

    return nums
};
let arr = [1, -2, -3, 4]
console.log(getMaxLen(arr));
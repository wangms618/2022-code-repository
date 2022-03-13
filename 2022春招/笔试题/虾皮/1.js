var maxProduct = function (nums) {
    let dp = []
    let len = nums.length
    for (let i = 0; i < len; i++) {
        dp[i] = []
    }
    dp[0][0] = nums[0]
    dp[0][1] = nums[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0] * nums[i], nums[i], dp[i - 1][1] * nums[i])
        dp[i][1] = Math.min(dp[i - 1][0] * nums[i], nums[i], dp[i - 1][1] * nums[i])
    }
    return Math.max(...dp.map((item) => item[0]))
};

let nums = [2, 3, -2, 4, -2]
console.log(maxProduct(nums));
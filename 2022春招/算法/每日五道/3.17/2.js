var maxSubArray = function (nums) {
    let dp = []
    dp[0] = nums[0]
    let len = nums.length
    for (let i = 1; i < len; i++) {

        dp[i] = Math.max(dp[i - 1] + nums[i], dp[i - 1], nums[i])
        console.log(dp[i]);
    }
    return dp[len - 1]
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
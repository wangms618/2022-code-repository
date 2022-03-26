var lengthOfLIS = function (nums) {
    let len = nums.length
    if (!len) return 0
    const dp = (new Array(len)).fill(1)
    for (let i = 1; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i - 1], dp[j] + 1)
                break
            }
        }
    }
    return dp[len - 1]
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
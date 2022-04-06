// 最长递增子序列
// dp[i] 表示包括0到i下标时的最长子序列
// j < i
// if (nums[i] > nums[j]) dp[i] = Math.max(dp[i],dp[j] + 1)
// 初始化dp[0] = 1
function foo(nums) {
    let dp = (new Array(nums.length)).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return dp[nums.length - 1]
}

console.log(foo([10, 9, 2, 5, 3, 7, 101, 18, 19]));
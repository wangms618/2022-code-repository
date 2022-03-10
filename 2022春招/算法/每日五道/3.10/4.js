// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n)。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划 
// dp[i] i 为当前下标处最大和
// dp数组
// dp[i] = nums[i] + Math.max(dp[i-1],0)
// 初始化 dp[0] = nums[0]
var maxSubArray = function(nums) {
    let dp = [nums[0]]
    let max = nums[0]
    for(let i = 1;i<nums.length;i++){
        dp[i] = nums[i] + Math.max(dp[i-1], 0)
        max = Math.max(max,dp[i])
    }
    return max
};
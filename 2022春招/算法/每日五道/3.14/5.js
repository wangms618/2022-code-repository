// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
// 动态规划
// 01背包
// 设计一个背包dp[i] 代表i重量下，最大的价值，由题可得weight[i]等于value[i]，即
// 明确递归方程 dp[i] = Math.max(dp[i],dp[i-nums[n]]+nums[n])
function canPartition(nums) {
    let sum = nums.reduce((pre, next) => pre + next)
    let len = nums.length
    let curSum = sum / 2
    if (sum % 2 !== 0) return false
    // 力扣给出范围是数组长度0~200，每项大小0~100，所以可以知道sum最大为20000,curSum可以设为10001
    let dp = (new Array(10001)).fill(0)
    // 初始化值为0
    // 设置总重量为curSum，如果如果能从n个数中选出来，且没有用完len个数，说明判断成立
    for (let n = 0; n < len; n++) {
        for (let i = curSum; i >= nums[n]; i--) {
            dp[i] = Math.max(dp[i], dp[i - nums[n]] + nums[n])
        }
        if (dp[curSum] == curSum) return true
    }
    return false
}

let nums = [1, 5, 11, 5]
console.log(canPartition(nums));
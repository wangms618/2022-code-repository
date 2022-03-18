// 检查货物
// 给定一个货物数组goods，goods[i]是第i件货物的抽查时间，如果抽查了第i件物品，那么下一件只能抽查第i+1或第i+2件物品，直到抽完物品
// 求抽完物品后，最小的时间
// 动态规划
// dp[i] 抽查第i件货物时，所花费的最小的时间

// 1 2 3 4 5
// 推导dp[i]，必须抽取当前货物的最小时间
// dp[i] = good[i] + Math.min(dp[i-1],dp[i-2])
function minCheckDuration(goods) {
    // write code here
    let len = goods.length
    let dp = []
    dp[0] = goods[0]
    dp[1] = goods[1]
    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + goods[i]
    }
    return dp[len - 1] > dp[len - 2] ? dp[len - 2] : dp[len - 1]
}
let goods = [2, 100, 2, 3, 3, 90, 3, 2, 80, 2]
console.log(minCheckDuration(goods));
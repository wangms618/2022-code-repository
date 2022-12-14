// dp[i][j] 粉刷到第i号房子时，选择j号油漆的最少花费
// dp[i][j] = Math.min(dp[i-1][另一个油漆],dp[i-1][再另外一个油漆])+costs[j]
var minCost = function (costs) {
    let n = costs.length
    let dp = []
    for (let i = 0; i < n; i++) {
        dp[i] = []
    }
    // 初始化
    dp[0][0] = costs[0][0]
    dp[0][1] = costs[0][1]
    dp[0][2] = costs[0][2]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0]
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1]
        dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + costs[i][2]
    }
    return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2])
};
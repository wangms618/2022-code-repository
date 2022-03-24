// 零钱兑换
var coinChange = function (coins, amount) {
    let dp = []
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        // 初始化dp[i]，求最小的dp[i]
        dp[i] = Infinity
        for (let x = 0; x < coins.length; x++) {
            if (i - coins[x] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[x]] + 1)
                console.log(i, dp[i]);
            }
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
};
console.log(coinChange([1, 2, 5], 11));
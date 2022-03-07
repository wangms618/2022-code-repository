// 整数拆分
var integerBreak = function(n) {
    let dp = []
    dp[2] = 1
    for(let i = 3; i<=n;i++){
        dp[i] = 0
        for (let j = 1; j <= i - j; j++){
            // 因为for循环会多次，所以带上dp[i]
            dp[i] = Math.max(dp[i],j*(i-j),j*dp[i-j])
        }
    }
    return dp[n]
};
// 给定⼀个正整数 n，将其拆分为⾄少两个正整数的和，并使这些整数的乘积最⼤化。 返回你可以获得的
// 最⼤乘积。
// 示例 1:
// 输⼊: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。
// 示例 2:
// 输⼊: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
// 说明: 你可以假设 n 不⼩于 2 且不⼤于 58。

// todo 确定dp
// dp[i]为拆分数字i得到的正整数的乘积最大值
// dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j))
var integerBreak = function (n) {
    let dp = []
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        dp[i] = 0
        for (let j = 1; j <= i - j; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    return dp[n]
};
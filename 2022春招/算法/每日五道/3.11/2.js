// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
/**
 * @param {number} n
 * @return {number}
 */
//  dp[0] = 1
//  dp[1] = 1
//  dp[2] = 2
//  dp[3] = 5
//  求dp[i]
// dp[i] = dp[2] * dp[0] + dp[1] * dp[1] + dp[0] * dp[2]
var numTrees = function(n) {
    let dp = []
    dp[0] = 1
    for(let i = 1;i<=n;i++){
        dp[i] = 0
        for(let j = 1;j<=i;j++){
            dp[i] +=  dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//  确定dp为dp[i][j]表示到达i,j下标处的路径数
//  初始化为，dp[0][0]到dp[m-1][0]为1
//  初始化为，dp[0][0]到dp[0][j-1]为1
// dp[i][j] = dp[i][j-1] + dp[i-1][j]
var uniquePaths = function(m, n) {
    let dp = []
    for(let i = 0;i<m;i++){
        dp[i] = []
    }
    for(let i = 0;i<m;i++){
        dp[i][0] = 1
    }
    for(let j = 0;j<n;j++){
        dp[0][j] = 1
    }
    for(let i = 1;i<m;i++){
        for(let j = 1;j<n;j++){
            dp[i][j] = dp[i][j-1] + dp[i-1][j]
        }
    }
    return dp[m-1][n-1]
};

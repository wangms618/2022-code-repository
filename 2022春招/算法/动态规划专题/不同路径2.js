/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp = []
    for (let i = 0; i < m; i++) {
        dp[i] = []
    }
    dp[0][0] = obstacleGrid[0][0] ? 0 : 1
    for (let i = 1; i < m; i++) {
        // 未遇到障碍 且 前一个格子可以到达(dp[i-1][0] !== 0)
        if (i > 0 && obstacleGrid[i][0] == 0 && dp[i - 1][0]) {
            dp[i][0] = 1
        } else {
            dp[i][0] = 0
        }
    }
    for (let j = 1; j < n; j++) {
        if (j > 0 && obstacleGrid[0][j] == 0 && dp[0][j - 1]) {
            dp[0][j] = 1
        } else {
            dp[0][j] = 0
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }

        }
    }
    return dp[m - 1][n - 1]
};
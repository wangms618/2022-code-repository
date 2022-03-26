var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((pre, next) => pre + next)
    let sum2 = Math.floor(sum / 2)
    let dp = []
    for (let i = 0; i < stones.length; i++) {
        dp[i] = []
        dp[i][0] = 0
    }

    for (let j = 0; j <= sum2; j++) {
        if (j >= stones[0]) {
            dp[0][j] = stones[0]
        } else {
            dp[0][j] = 0
        }
    }
    for (let i = 1; i < stones.length; i++) {
        for (let j = 0; j <= sum2; j++) {
            if (j < stones[i]) {
                dp[i][j] = dp[i-1][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - stones[i]] + stones[i])
            }
            
        }
    }
    return sum - 2 * dp[stones.length - 1][sum2]
};
console.log(lastStoneWeightII([2,7,4,1,8,1]));
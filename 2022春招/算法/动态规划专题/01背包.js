// 确定dp
// 规定 dp[i][j]为 从下标[0,i]的物品任选，放进容量为j的背包，价值总和最大是多少
// dp[i][j]有两种可能情况得到，一种是不放第i件物品 dp[i-1][j]，一种是放第i件物品 dp[i-1][j-weight[i]] + value[i]
// 所以dp公式 dp[i][j] = Math.max( dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
// 初始化dp，由公式可知必须知道dp[0][j]，dp[0][j]代表只选0号物品、背包容量为j时的价值


// N件物品,背包总容量，weight每件物品对应的重量，value每件物品对应价格
function pack(N, W, weight, value) {
    let dp = []
    for (let i = 0; i < N; i++) {
        dp[i] = []
    }
    for (let j = 0; j <= W; j++) {
        if (weight[0] <= j) {
            dp[0][j] = value[0]
        } else {
            dp[0][j] = 0
        }
    }
    for (let i = 0; i < N; i++) {
        dp[i][0] = 0
    }
    // 先遍历物品
    for (let i = 1; i < N; i++) {
        // 背包容量
        for (let j = 0; j <= W; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
    }
    console.log(dp[N - 1][W]);
}
pack(3, 4, [1, 3, 4], [15, 20, 30])
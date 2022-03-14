// 确定dp
// 设置dp[j]，代表j背包容量下，物品价格
// dp[j] 可由 dp[j]和dp[j - weight[i]] + value[i]推导可得
// 初始化dp[0] = 0
// N件物品,背包总容量W，weight每件物品对应的重量，value每件物品对应价格
function bag(N, W, weight, value) {
    let dp = (new Array(W + 1)).fill(0)
    for (let i = 0; i < N; i++) {
        for (let j = W; j >= weight[i]; j--) {
            // 从最大容量开始，防止重复赋值dp[j]
            // 确保j要大于当前遍历的物品重量才能遍历
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
            console.log(i, j, dp[j]);
        }
    }
    return dp[W]
}

bag(3, 4, [1, 3, 4], [15, 20, 30])
// 输入: costs = [[17,2,17],[16,16,5],[14,3,19]]
// 输出: 10
// 解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。
//      最少花费: 2 + 5 + 3 = 10。

// 滚动数组来一个

const minCost = (costs) => {
    let len = costs.length;
    for (let i = 1; i < len; i++) {
        // now代表的是一块内存地址，修改now也会修改到costs
        const now = costs[i]
        const pre = costs[i - 1]
        now[0] += Math.min(pre[1], pre[2])
        now[1] += Math.min(pre[0], pre[2])
        now[2] += Math.min(pre[1], pre[0])
    }
    return Math.min(costs[len - 1][0], costs[len - 1][1], costs[len - 1][2])
};

const costs = [
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19],
];
console.log(minCost(costs));
// 薯队长写了n篇笔记，编号从1~n,每篇笔记都获得了不少点赞数。
// 薯队长想从中选出一些笔记，作一个精选集合。挑选的时候有两个规则：
//  1.不能出现连续编号的笔记。
// 2.总点赞总数最多
// 如果满足1，2条件有多种方案，挑选笔记总数最少的那种
// 输入
// 4
// 1 2 3 1
// 输出
// 4 2
// 首先得保证，点赞数最多，然后再挑最少数的来
// 不能连号

// 打家劫舍

// 动态规划？
// dp[i] i 为选中的书的数量，dp[i]为点赞数
// 动态方程 dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
// 初始化需要dp[0]，dp[1]
// dp[0] = 0
// dp[1] = nums[1]
const thumbUp = (nums) => {
    const dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(dp[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
}
console.log(thumbUp([1, 2, 3, 1]));
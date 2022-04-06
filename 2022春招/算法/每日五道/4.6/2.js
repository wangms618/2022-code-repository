// 最⻓连续递增序列
// 给定⼀个未经排序的整数数组，找到最⻓且连续递增的⼦序列，并返回该序列的⻓度。
// 连续递增的⼦序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i
// + 1] ，那么⼦序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增⼦序列。
// 示例 1：
// 输⼊：nums = [1,3,5,4,7]
// 输出：3
// 解释：最⻓连续递增序列是 [1,3,5], ⻓度为3。
// 尽管 [1,3,5,7] 也是升序的⼦序列, 但它不是连续的，因为 5 和 7 在原数组⾥被 4 隔开。
// 示例 2：
// 输⼊：nums = [2,2,2,2,2]
// 输出：1
// 解释：最⻓连续递增序列是 [2], ⻓度为1。

// dp[i] 表示0到i下标的最长子序列长度
// 如果当前nums[i] > nums[i-1] dp[i] = dp[i - 1] + 1,否则dp[i] = 1
// 设置一个maxLen记录当前最长的子序列长度
function foo(nums) {
    let len = nums.length
    let dp = (new Array(nums.length)).fill(1)
    let maxLen = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    return maxLen
}
console.log(foo([10, 9, 2, 5, 3, 7, 101, 18, 19]));
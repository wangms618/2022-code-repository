// 最⻓递增⼦序列
// 给你⼀个整数数组 nums ，找到其中最⻓严格递增⼦序列的⻓度。
// ⼦序列是由数组派⽣⽽来的序列，删除（或不删除）数组中的元素⽽不改变其余元素的顺序。例如，
// [3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的⼦序列
// 输⼊：nums = [1,3,5,4,7]
// 输出：3

// 定义dp[i]为i之前包括i的最长子序列
// 位置i的最⻓升序⼦序列等于j从0到i-1各个位置的最⻓升序⼦序列 + 1 的最⼤值。
function solution(nums) {
    let dp = (new Array(nums.length)).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    console.log(dp);
    return dp[nums.length - 1]
}
let nums = [0, 3, 1, 6, 2, 2, 7]
console.log(solution(nums));
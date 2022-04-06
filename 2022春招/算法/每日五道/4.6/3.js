// 最长重复子数组
// 给两个整数数组 A 和 B ，返回两个数组中公共的、⻓度最⻓的⼦数组的⻓度。
// 示例：
// 输⼊：
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出：3
// 解释：
// ⻓度最⻓的公共⼦数组是 [3, 2, 1] 。

// dp[i][j] 为以A数组下标0到i-1，B数组下标0到j-1的最长的公共重复子数组
// 如果A[i-1] == B[j-1] dp[i-1][j-1] + 1
function foo(A, B) {
    let dp = []
    for (let i = 0; i <= A.length; i++) {
        dp[i] = []
        dp[i][0] = 0
    }
    for (let j = 0; j <= B.length; j++) {
        dp[0][j] = 0
    }
    let max = 0
    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= B.length; j++) {
            dp[i][j] = 0
            if (A[i-1] == B[j-1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            if (dp[i][j] > max) max = dp[i][j]
        }
    }
    return max
}
let A = [1, 2, 3, 2, 1]
let B = [3, 2, 1, 4, 7]
console.log(foo(A, B));
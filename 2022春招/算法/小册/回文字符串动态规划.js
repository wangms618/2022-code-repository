/**
 * @param {string} s
 * @return {string}
 */
// 动态规划
// 明确dp为二维数组dp[i][j]，i代表回文子串左节点，j代表回文子串右节点
// 动态规划方程，dp[i][j] 由 dp[i+1][j-1] s[i] s[j] 确定
// 规定，如果dp[i][j] = 0，则代表的字符串不是回文子串，反之则是回文子串
// 初始化，因为单个字母肯定是回文的，所以dp[i][i] = 1
// 优化，相邻两个字母如果相同，那么肯定有dp[i][i+1] = 1
var longestPalindrome = function (s) {
    let len = s.length
    // 初始化dp数组
    let dp = []
    let st = 0,
        end = 0
    for (let i = 0; i < len; i++) {
        dp[i] = []
    }
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1
    }
    for (let i = 0; i < len - 1; i++) {
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = 1
            st = i
            end = i + 1
        } else {
            dp[i][i + 1] = 0
        }
    }
    for (let n = 3; n <= len; n++) {
        for (let i = 0; i <= len - n; i++) {
            let j = i + n - 1
            if (dp[i + 1][j - 1] == 1 && s[i] == s[j]) {
                dp[i][j] = 1
                st = i
                end = j
            }
        }
    }
    return s.slice(st, end + 1)
};
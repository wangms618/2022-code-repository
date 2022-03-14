// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/letter-case-permutation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {string[]}
 */
// 回溯，起步
var letterCasePermutation = function (s) {
    let res = []
    // 递归，参数为上次的字符串
    function dfs(curr, nth) {
        // 边界条件
        if (nth == s.length) {
            res.push(curr)
            return
        }
        let str = s[nth]
        if ((str >= 'A' && str <= 'Z') || (str >= 'a' && str <= 'z')) {
            const low = curr + str.toLocaleLowerCase()
            const high = curr + str.toLocaleUpperCase()
            dfs(low, nth + 1)
            dfs(high, nth + 1)
        } else {
            dfs(curr + str, nth + 1)
        }
    }
    dfs('', 0)
    return res
};
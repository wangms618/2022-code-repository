/**
 * @param {string} s
 * @return {string}
 */
// 中心点思想
// 遍历数组，然后求中心点
var longestPalindrome = function(s) {
    let len = s.length
    const fun = (l,r) => {
        while(l>=0 && r<len && s[l] === s[r]){
            l--
            r++
        }
        return s.slice(l+1,r)
    }
    let res = ''
    for(let i = 0;i<len;i++){
        // 如果是奇数串，中间点
        let s1 = fun(i,i)
        // 如果是偶数串，两个点
        let s2 = fun(i,i+1)
        res = res.length > s1.length ? res : s1
        res = res.length > s2.length ? res : s2
    }
    return res
};
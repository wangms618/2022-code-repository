// 给你一个字符串 s，找到 s 中最长的回文子串。
// 中心点法
const longestPalindrome = (s) => {
    const palindrome = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--
            r++
        }
        return s.slice(l + 1, r)
    }
    let res = ''
    for (let i = 0; i < s.length; i++) {
        let s1 = palindrome(i, i)
        let s2 = palindrome(i, i + 1)
        res = s1.length > res.length ? s1 : res
        res = s2.length > res.length ? s2 : res
    }
    return res
}

const str = 'ababaczs'
console.log(longestPalindrome(str));
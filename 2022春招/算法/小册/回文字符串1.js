const validPalindrome = function (s) {
    // 缓存字符串的长度
    const len = s.length

    // i、j分别为左右指针
    let i = 0,
        j = len - 1

    // 当左右指针均满足对称时，一起向中间前进
    while (i < j && s[i] === s[j]) {
        i++
        j--
    }

    // 尝试判断跳过左指针元素后字符串是否回文
    if (isPalindrome) {
        return true
    }
    // 尝试判断跳过右指针元素后字符串是否回文
    if (s[i] == s[j - 1]) {
        return true
    }
    function isPalindrome(st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false
            }
            st++
            ed--
        }
        return true
    }

    // 默认返回 false
    return false
}

console.log(validPalindrome("bb"))

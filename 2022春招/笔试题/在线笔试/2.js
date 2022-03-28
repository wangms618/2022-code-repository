// Ace
// 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 示例 1：

// 输入：s = "Hello World "
// 输出：5

// 示例 2：

// 输入：s = " "
// 输出：0

function lowStr(str) {
    if (str == ' ') return 0
    str = str.split(' ')
    return str[str.length - 1] == ' ' ? 0 : str[str.length - 1].length
}
console.log(lowStr('Hello World'));
let a = 0
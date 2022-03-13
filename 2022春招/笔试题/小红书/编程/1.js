// 薯队长写了一篇笔记草稿，请你帮忙输出最后内容。
//  1.输入字符包括，"("    ,    ")"    和    "<"和其他字符。
//  2.其他字符表示笔记内容。
//  3.()之间表示注释内容，任何字符都无效。    括号保证成对出现。
//  4."<"表示退格,    删去前面一个笔记内容字符。括号不受"<"影响
// 例：Corona(Trump)USA<<<Virus =>  CoronaVirus
function Virus(str) {
    let res = ''
    str = str.split('')
    let flag = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            flag = true
        } else if (flag && str[i] !== ')') {
            continue
        } else if (str[i] == '<') {
            res = res.slice(0, res.length - 1)
        } else if (flag && str[i] == ')') {
            flag = false
        } else {
            res += str[i]
        }
        console.log(res);
    }
    return res
}

console.log(Virus('Corona(Trump)USA<<<Virus'));
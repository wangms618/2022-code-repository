// 给定一个Excel表格中的列名称，返回其相应的列序号。

// 例如，

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// AC -> 29
// AZ -> 52 26
// BA-> 53
// ...

// 如果长度为1，最大为26
// 如果长度为2
// 建表
let map = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26,
}

function excelCount(str) {
    let len = str.length
    let num = 0
    let res = 0
    for (let i = len - 1; i >= 0; i--) {
        if (num == 0) {
            res = res + map[str[i]]
        } else {
            res = res + map[str[i]] * num * 26
        }
        num++
    }
    return res
}
const str = 'AB'
console.log(excelCount(str));
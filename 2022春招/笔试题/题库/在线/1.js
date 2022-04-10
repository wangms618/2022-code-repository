// 在一个字符串（0 <= 字符串长度 <= 10000，全部由字母组成）
// 中找到第一个只出现一次的字符，并返回它的位置（下标从0开始），如果没有则返回 - 1（需要区分大小写)
// function firstNotRepeatingChar(str) {
//     str = str.split('')
//     let len = str.length
//     // 对其进行遍历
//     for (let i = 0; i < len; i++) {
//         let res = str[i]
//         while (str[i] === str[i + 1] && i + 1 < len) {
//             i++
//         }
//         if (str.indexOf(res) == str.lastIndexOf(res)) {
//             return str.indexOf(res)
//         }
//     }
//     return -1
// }
// let str = 'aAaacccbddd'
// console.log(firstNotRepeatingChar(str));


// 求二叉树叶子节点的个数，该节点没有左右子节点
let nodes = {
    "value": 3,
    "left": {
        "value": "9",
        "left": {
            "value": 15,
            "left": null,
            "right": null
        },
        "right": {
            "value": 7,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 9,
        "left": {
            "value": 15,
            "left": null,
            "right": null
        },
        "right": {
            "value": 7,
            "left": null,
            "right": null
        }
    }
}

// 层序遍历
// function codeNodes(nodes) {
//     nodes = JSON.parse(nodes)
//     let res = 0
//     let stack = [nodes]
//     while (stack.length) {
//         let root = stack.pop()
//         if (!root.left && !root.right) {
//             res++
//         }
//         if (root.left) {
//             stack.push(root.left)
//         }
//         if (root.right) {
//             stack.push(root.right)
//         }
//     }
//     return res
// }
// console.log(codeNodes(nodes));


// 判断数组中元素有没有只出现一次未重复的情况
// 遍历数组，出现一次的数放入visit，两次的吧visit里的值加1
// 遍历visit，记录出现0的次数，如果只出现一次，说明正确
let arr = [1, 1, 1, 2, 2, 2, 1, 3]

function isItemOnly(arr) {
    let visit = {}
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (visit[arr[i]] !== undefined) {
            visit[arr[i]] = visit[arr[i]] + 1
        } else {
            visit[arr[i]] = 0
        }
    }
    for (let key in visit) {
        if (visit[key] === 0) {
            res++
        }
    }
    console.log(visit);
    return res >= 1 ? true : false
}
console.log(isItemOnly([1]));
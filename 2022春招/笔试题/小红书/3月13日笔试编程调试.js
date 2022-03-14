// function paddingNum(num) {
//     num = num.toString()
//     let sign = ''
//     if (num[0] == '-') {
//         num = num.slice(1)
//         sign = '-'
//     }
//     // 取到小数点后的数字
//     let index = num.indexOf('.')
//     let low = num.slice(index)
//     let str = num.slice(0, index)
//     // 接下来就是塞了
//     let len = str.length
//     if (len <= 3) {
//         console.log(sign + str + low)
//     } else {
//         // 加逗号，怎么说
//         let res = ''
//         let a = -1
//         for (let i = len - 1; i >= 0; i--) {
//             a++
//             if (a % 3 == 0 && a >= 3) {
//                 res = ',' + res
//                 res = str[i] + res
//             } else {
//                 res = str[i] + res
//             }

//         }
//         console.log(sign + res + low)
//     }
// }
// let num = 1654.3
// paddingNum(num)




function userAgent(str) {
    str = str.split(' ')
    let result = str[str.length - 1].split('/')
    console.log(result[1]);
}
const str = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/100.1`
console.log(userAgent(str));
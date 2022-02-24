// 0.1 + 0.2 === 0.3 吗？为什么
// 会精度丢失，所以不等于
// IEEE 754 64位表示数字 1 + 11 + 52
// 浮点数的运算精度丢失问题就是因为，浮点数转化为该标准的二进制的过程中出现的丢失
// 解决方法
// function arr(num1, num2) {
//   const num1Digits = (num1.toString().split('.')[1].length)
//   const num2Digits = (num2.toString().split('.')[1].length)
//   const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits))
//   return (num1* baseNum + nums2 * baseNum) / baseNum
// }
let ary = [1, 2, [3, [4, 5]], 6]
// 1
// console.log(ary);
// while () {
//   ary = [].concat(...ary)
//   console.log(ary);
// }
// 遍历，如果有任何一项是数组，则返回true
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary)
}
console.log(ary);
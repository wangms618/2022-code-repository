// 给一个数字，判定是否为happy number 
// 例如 ： 91 = 9*9 + 1 * 1 = 82
// 82 = 8*8 + 2*2 = 68
// 68 = 6*6 + 8*8 = 100
// 100 = ...  = 1
// 最后结果为1，就为happy number 
// 写一个vue组件实现全选功能
let getNext = function (n) { // 获得下一个快乐数
  return n.toString().split('').map(i => i ** 2).reduce((a, b) => a + b);
}
// let isHappy = function (n) {
//   let slow = n;
//   let fast = getNext(n);
//   while (fast !== 1 && fast !== slow) {
//     // 当 fast == slow时，只有两种情况，第一种就是取到了1，第二种就是重复了
//     slow = getNext(slow); // 慢指针
//     fast = getNext(getNext(fast)); // 快指针
//   }
//   return fast === 1;
// };

function isHappy(n) {
  let set = new Set()
  while (n != 1 && !set.has(n)) {
    set.add(n)
    n = getNext(n)
  }
  return n === 1
}

console.log(isHappy(81));
let num = 1
console.log(num instanceof Number) // 原始类型无法判断 false
console.log(num.__proto__ === Number.prototype); // true
// 目标的__proto和原型相同用instanceof一定能成功吗？
// 不严谨，如果目标不是引用类型，则用instanceof返回false
num = new Number()
console.log(num instanceof Number); // new出来的就会有原型 true
console.log(num); // [Number: 0]




function myInstanceof(M, N) {
  let O = M.__proto__
  let P = N.prototype
  while (O !== P) {
    O = O.__proto__
    if (O == null) return false
  }
  return true
}
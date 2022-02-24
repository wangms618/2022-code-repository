function myInstanceof(L, R) {
  var O = R.prototype
  var L = L.__proto__
  while (L !== null) {
    if (O === L) return true
    L = L.__proto__
  }
  return false
}
var obj = {
  a: 1
}
console.log(myInstanceof(obj, Object));
console.log(myInstanceof([], Object));
// function _instanceof (obj1, obj2) {
//   let pro1 = typeof obj1 == 'function' ? obj1.prototype : obj1.__proto__
//   let pro2 = typeof obj2 == 'function' ? obj2.prototype : obj2.__proto__

//   while (pro1 !== null) {
//     if (pro1 == pro2) return true
//     else pro1 = pro1.__proto__
//   }
//   return false
// }
// const a = 1
function _const(key, value) {
  Object.defineProperty(this, key, {
    value:value,
    // 可写性为false
    writable: false,
    // 是否可枚举
    enumerable: true
  })
}
_const('obj', {
  a: 1
})
console.log(obj);
function _instanceof(L, R) {
  let O = R.prototype
  let N = L.__proto__
  while (N !== null) {
    if (N === O) return true
    N = N.__proto__
  }
  return false
}
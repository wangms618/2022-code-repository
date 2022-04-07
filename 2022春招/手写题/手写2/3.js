function myInstanceof(L, R) {
    let N = L.__proto__
    let O = R.prototype
    while (N) {
        if (N === O) return true
        N = N.__proto__
    }
    return false
}
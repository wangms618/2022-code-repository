const myInstanceof = (L, R) => {
    let O = L.__proto__
    let N = R.prototype
    while (O) {
        if (O == N) return true
        O = O.__proto__
    }
    return false
}
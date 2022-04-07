function myInstanceof(L, R) {
    let proto = L.__proto
    let prototype = R.prototype
    while (proto) {
        if (proto == prototype) return true
        proto = proto.__proto__
    }
    return false
}
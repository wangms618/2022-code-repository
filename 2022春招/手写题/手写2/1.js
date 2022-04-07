function objectCreate(obj) {
    function fn() {}
    fn.prototype = obj
    return new fn()
}
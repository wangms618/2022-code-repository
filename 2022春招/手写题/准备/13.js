function throttle(fn, delay) {
    let canRun = true
    return function () {
        if (!canRun) return
        let context = this
        canRun = false
        setTimeout(() => {
            fn.apply(context, arguments)
            canRun = true
        }, delay)
    }
}


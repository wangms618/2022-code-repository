function debounce(fn, delay) {
    let time = null
    return function () {
        let context = this
        clearTimeout(time)
        time = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay)
    }
}
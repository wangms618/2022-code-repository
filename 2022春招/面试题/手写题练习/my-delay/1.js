const delay = (ms, value, willResolve) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (willResolve) {
                resolve(value)
            } else {
                reject(value)
            }
        }, ms)
    })
}
;(async () => {
    const result = delay(1000, "今天", false)
    result.catch((res) => {
        console.log(res)
    })
    console.log("我出来了")
})()

// function thorttle(fn, delay) {
//     let flag = true
//     return function () {
//         if (!flag) return
//         let context = this
//         flag = false
//         setTimeout(() => {
//             fn.apply(context, arguments)
//             flag = true
//         }, delay)
//     }
// }

function thorttle(fn, delay) {
    let curTime = Date.now()
    return function () {
        let context = this
        nowTime = Date.now()
        if (nowTime - curTime >= delay) {
            setTimeout(() => {
                fn.apply(context, arguments)
            }, delay)
        }

    }
}
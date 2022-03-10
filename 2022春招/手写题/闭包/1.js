// setTimeout 是个异步函数，所以会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i * 200)
// }

// 首先使用了立即执行函数将 i 传入函数内部，这个时候值就被固定在了参数 j 上面不会改变
// 当下次执行 timer 这个闭包的时候，就可以使用外部函数的变量 j，从而达到目的。
// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j)
//         }, j * 1000)
//     })(i)
// }

// setTimeout
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer(j) {
//         console.log(j)
//     }, i * 1000, i)
// }

// let
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i * 1000)
// }
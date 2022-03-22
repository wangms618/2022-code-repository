// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 1000)
// })
// let promise2 = promise1.then(() => {
//     throw new Error('error')
// })

// console.log('prom1', promise1);
// console.log('prom2', promise2);

// setTimeout(() => {
//     console.log('prom1', promise1);
//     console.log('prom2', promise2);
// }, 2000)


async function test() {
    return 1
}
console.log(test);
// 并发与并行的区别
// 通过来回切换去执行多个任务，多个任务完成叫并发
// 同时执行并完成多个任务的情况叫做并行

// 回调函数(什么是回调函数？回调函数的缺点？如何解决回调地狱？)
// ajax(url, () => {
//   ajax(url2, () => {
//     ajax(url3, () => {
//       // 回调地狱，不利于代码维护
//       // 根本问题，嵌套函数耦合度过高
//     })
//   })
// })

// 缺点：代码耦合度高，嵌套多层很难处理错误，不能使用try catch捕获错误，不能使用return

// Generator
// yield next

// function* foo(x) {
//   let y = 2 * (yield(x + 1))
//   let z = yield(y / 3)
//   return (x + y + z)
// }
// let it = foo(5)
// console.log(it.next()); // 1. 是6而不是12，说明yield会返回值 { value: 6, done: false }
// console.log(it.next()); // 2-1. yield表达式本身没有返回值，或者说总是返回undefined { value: NaN, done: false }
// console.log(it.next(12)); // 2-2. 参数会将上一个yield的执行结果覆盖，也就是说上一个yield的执行结果作废 { value: 8, done: false }
// console.log(it.next(13)); // 3. { value: 42, done: true }


// function* fetch() {
//   yield ajax(url1,()=>{})
//   yield ajax(url2,()=>{})
//   yield ajax(url3,()=>{})
// }
// let it = fetch()
// let res1 = it.next() // {value:'response',done;false}
// let res2 = it.next() 
// let res3 = it.next() 

// Promise(promise特点？有什么优缺点？什么是promise链？promise构造函数执行和then构造函数执行有什么区别？)
// 特点：有三种状态，状态改变是无法回退的，Promise.then返回的是一个全新的Promise。.then()就是promise链

// new Promise((resolve, reject) => {
//     // resolve('ok')
//     // reject('err') // 无效
//     console.log('promise');
//     resolve('ok')
//   })
//   .then((res) => {
//     console.log(res); // of
//     return 123
//   })
//   .then((res) => {
//     console.log(res); // 123
//   })
// .then()返回新的Promise,因为Promise的状态不能变更
// console.log('finish');

// ajax(url1)
//   .then(res => {
//     console.log(res);
//     return ajax(url2)
//   })
//   .then(res2 => {
//     console.log(res2);
//     return ajax(url3)
//   })
//   .then(res3 => {
//     console.log(res3);
//   })

// 缺点，Promise一但执行不可终止

// async await(和Promise的区别,await的原理？)
async function test() {
  let value = await sleep()
}
console.log(test()); // Promise { '1' } 返回Promise对象

// 处理了Promise的链式调用
// 缺陷，没有查错机制
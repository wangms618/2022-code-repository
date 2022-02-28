// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint(value, ms) {
//   console.log(123);
//   await timeout(ms);
//   console.log(value);
// }
// asyncPrint('hello world', 50);
// console.log(456);

// (async function f1() {
//   console.log(123);
// })()
// console.log(456);
// 123456 这里依旧是同步

// async function fn() {
//     return 100
//   }
//   (async function () {
//     console.log(456);
//     const a = fn()
//     const b = await fn()
//     console.log(a, '1');
//     console.log(b, '2');
//   })()
// console.log(123);

// 456
// 123
// Promise(100)
// 100


// function fn() {
//   return 100
// }
// (async function () {
//   console.log(456);
//   const a = fn()
//   // const b = await fn()
//   console.log(a, '1');
//   console.log(b, '2');
// })()
// console.log(123);

async function test() {
  return 123
}
console.log(test()); // Promise { 123 }
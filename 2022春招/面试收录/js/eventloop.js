// async函数返回一个 Promise 对象， 可以使用then方法添加回调函数。
// 当函数执行的时候， 一旦遇到await就会先返回， 等到异步操作完成， 再接着执行函数体内后面的语句。
async function fn() {
    return 100
  }
  (async function () {
    const a = fn()
    const b = await fn()
    console.log(a, '1');
    console.log(b, '2');
  })()
async function async1() {
  console.log('async1 start 3');
  await async2()
  console.log('async1 end 4');
}
async function async2() {
  console.log('async2 5');
}
setTimeout(function () {
  console.log('setTimeout 6')
}, 0)

new Promise(resolve => {
    console.log('Promise 7')
    resolve()
  })
  .then(function () {
    console.log('promise1 8')
  })
  .then(function () {
    console.log('promise2 9')
  })
console.log('script start 10');
async1()
console.log('script end 11');
// 从上到下执行
// 先进入自执行函数，已知async会返回一个promise对象，所以变量a赋值为Promise(100), await一个async会产生一个Promise返回所以b为100
// 14行await 后的代码会保留上下文，然后跳出async1函数
// 但是如果在新版chrome浏览器上不是这样的，因为chrome优化了,await变得更快了，
// 所以本应该在下一次宏任务队列的async1的上下文(console.log(a, '1');console.log(b, '2');)提前到了这一次微任务的队首 微任务[console.log(a, '1');console.log(b, '2');]
// 接下来遍历到setTimeout，setTimeout里的代码进入下一次宏任务
// 接下来进入Promise,输出Promise 7 ['Promise 7']
// promise的第一个点then进入到微任务  微任务[console.log(a, '1');console.log(b, '2');console.log('promise1 8');]
// 第二个点then此时无效，不考虑
// 执行下一段代码，输出'script start 10' ['Promise 7','script start 10']
// 执行async1(),进入async1，输出'async1 start 3' ['Promise 7','script start 10','async1 start 3']
// 执行await async2()，进入async2(),输出 'async2 5' ['Promise 7','script start 10','async1 start 3','async2 5']
// await后序的代码进入异步(新版chrome浏览器,await变得更快了)，进入微任务队列 微任务[console.log(a, '1');console.log(b, '2');console.log('promise1 8');console.log('async1 end 4');]
// 跳出async1，继续当前执行，即输出'script end 11' ['Promise 7','script start 10','async1 start 3','async2 5','script end 11']
// 此时全部代码执行到底，进入微任务队列，输出微任务 Promise{100} ;100  ;promise1 ;async1 end 4
// 当执行到promise1时，此时then后继续then了，所以其后的then进入了微任务队列,位于async1 end 之后，
// 所以输出微任务 Promise{100} ;100  ;promise1 ;async1 end 4后，还有promise2
// 微任务结束后，执行下一次宏任务，setTimeout里的代码
// 总体整合得下列代码


// Promise 7
// script start 10
// async1 start 3
// async2 5
// script end 11
// Promise {<fulfilled>: 100} '1'
// 100 '2'
// promise1 8
// async1 end 4
// promise2 9
// setTimeout 6
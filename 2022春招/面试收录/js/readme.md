1. javaScript代码的执行过程中，除了依靠**函数调用栈**来搞定函数的执行顺序外，还依靠**任务队列**(task queue)来搞定另外一些代码的执行。
2. 整个执行过程，我们称为事件循环过程。一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。
3. 任务队列又分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被分别称为task与jobs。

# 宏任务大概包括
script(整体代码)
setTimeout
setInterval
setImmediate
I/O
UI render

# 微任务大概包括
process.nextTick
Promise
Async/Await(实际就是promise)
MutationObserver(html5新特性)

# 总结
1. 执行宏任务
2. 然后执行该宏任务产生的微任务
3. 若微任务在执行过程中产生了新的微任务，则继续执行微任务。
4. 微任务执行完毕后，再回到宏任务中进行下一轮循环。

[执行代码](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/27/170847cc5f5eb691~tplv-t2oaga2asx-watermark.awebp)
答案输出为：async2 end => Promise => async1 end => promise1 => promise2 => setTimeout


```js
console.log('script start')

async function async1() {
await async2()
console.log('async1 end')
}
async function async2() {
console.log('async2 end')
}
async1()

setTimeout(function() {
console.log('setTimeout')
}, 0)

new Promise(resolve => {
console.log('Promise')
resolve()
})
.then(function() {
console.log('promise1')
})
.then(function() {
console.log('promise2')
})

console.log('script end')
 // 旧版输出如下，但是请继续看完本文下面的注意那里，新版有改动
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout

```
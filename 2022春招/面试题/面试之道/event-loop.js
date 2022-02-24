// 单线程的优点
// js引擎在js运行时会阻塞ui的渲染（ 渲染引擎的工作） == > js引擎线程和渲染线程是互斥的
// 因为js可以修改dom结构， 如果在js执行的时候ui线程还在工作， 就可能导致不安全的UI渲染，
// 得益于js是单线程运行的， 可以达到节省内存（ 运行内存）， 节约上下文切换的时间。


// js 栈


// 浏览器的event-loop
console.log('script start') // 1

async function async1() {
  await async2() // 浏览器会打破规范让他更早执行
  console.log('async1 end') // 5
}
async function async2() {
  console.log('async2 end') // 2
}
async1()

setTimeout(function () {
  console.log('setTimeout')
}, 0) // 8

new Promise(resolve => {
    console.log('Promise') // 3
    resolve()
  })
  .then(function () {
    console.log('promise1') // 6
  })
  .then(function () {
    console.log('promise2') // 7
  })

console.log('script end') // 4
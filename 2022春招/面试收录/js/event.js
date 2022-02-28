// a = Promise{100}
// b = 100
// 进入微任务队列
// script start 1
// async1 start
// async2
// script end
// Promise{100}
// 100
// async1 end

async function fn() {
  return 100
}

(async function () {
  const a = fn()
  const b = await fn()
  console.log(a);
  console.log(b);
})()

async function async1() {
  console.log('async1 start');
  await async2()
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');
async1()
console.log('script end');
// setTimeout setInterval requestAnimationFrame

// 如果setTimeout前面出现了开销性能的代码，setTimeout会有延迟
// 修正setTimeout
// setTimeout, setInterval 与 requestAnimationFrame 
// setTimeout是准时的吗？ 不是，如果setimeout前发生了消耗时间的代码，就会导致settimeout不准时，延迟执行
// setInterval也不准，借助requestAnimationFrame实现准确
// requestAnimationFrame每隔16.7ms执行一次，因为电脑屏幕刷新赫兹是60赫兹
// 修正setTimeout
let period = 60 * 1000 * 60 * 2
let startTime = new Date().getTime()
let count = 0
let end = new Date().getTime() + period
let interval = 1000
let currentInterval = interval

function loop() {
  count++
  // 执行代码所消耗的时间
  let offset = new Date().getTime() - (startTime + count * interval)
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 * 60))
  let hdiff = diff % (60 * 1000 * 60)
  let m = Math.floor(hdiff / (60 * 1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / 1000
  let sCeil = Math.ceil(s)
  let sFool = Math.floor(s)
  // 下一次循环所消耗的时间
  currentInterval = interval - offset
  console.log(`时：${h}, 分：${m}, 毫秒：${s}, 秒向上取整：${sCeil}, 代码执行时间：${offset}, 下次循环间隔：${currentInterval}`);
  setTimeout(loop, currentInterval)
}


setTimeout(loop, currentInterval)

function setInterval(callback, interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback()
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}
let a = 0
setInterval(timer => {
  console.log(1);
  a++
  if(a===3) cancelAnimationFrame(timer)
},1000)
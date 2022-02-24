function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}

const light = function (times, cb) { // 创建一个函数，参数接收时间和回调函数
  return new Promise((resolve) => { // 返回一个Promise
    setTimeout(() => {
      cb()
      resolve()
    }, times)
  })
}
const step = function () {
  Promise.resolve().then(() => {
    return light(3000, red)
  }).then(() => {
    return light(1000, green)
  }).then(() => {
    return light(2000, yellow)
  }).then(() => {
    return step() // 递归的调用自己
  })
}
step()

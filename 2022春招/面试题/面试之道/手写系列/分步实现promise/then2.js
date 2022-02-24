const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
  constructor(executor) {
    // 初始化值
    this.initValue()
    this.initBind()
    // 执行传入的resovve和reject函数
    // 考虑throw的情况
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }

  }
  initValue() {
    this.value = null // 最终值
    this.state = PENDING // Promise初始状态为pending
    this.onFulfilledCallbacks = [] // 保存then中的成功回调
    this.onRejectedCallbacks = [] // 保存then中的失败回调
  }
  initBind() {
    // resolve和reject的this指向永远指向当前的MyPromise实例
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }
  resolve(value) {
    // 如果state已变化则返回，因为状态改变后就不可修改
    if (this.state !== PENDING) return
    // 如果这个函数被调用，修改状态
    this.state = FULFILLED
    // 取到resolve里的参数
    this.value = value
    // 调用onFulfilledCallbacks里保存的onFulfilled的回调
    this.onFulfilledCallbacks.map(cb => cb(value))
  }
  reject(value) {
    if (this.state !== PENDING) return
    this.state = REJECTED
    this.value = value
    // 调用onRejectedCallbacks里保存的then的onRejected回调
    this.onRejectedCallbacks.map(cb => cb(value))
  }
  then(onFulfilled, onRejected) {
    // 保持指针指向
    const that = this
    // 接收两个回调
    // 校验参数，确保是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    // 如果state状态是fulfilled，将reslove里的参数传给then里的回调参数
    if (this.state === FULFILLED) {
      onFulfilled(this.value)
    } else if (this.state === REJECTED) {
      // 如果state状态是rejected，执行第二个回调
      onRejected(this.value)
    } else { // pending状态
      // pending状态代表，尚未执行完myPromise，这时候我们需要保存回调
      that.onFulfilledCallbacks.push(onFulfilled)
      that.onRejectedCallbacks.push(onRejected)
    }
  }
}
// 实现.then在reslove或reject后执行
// 因为reject延迟执行，导致then先于reject执行，如果执行then时，发现状态是pending，说明此时reslove和reject尚未执行，所以先将回调函数保存起来
// 等到myPromise里reject或resolve执行时，再将回调函数取出去执行，就实现了then里的回调函数一定在reslove或reject后执行
// 那么为什么用数组保存回调呢，因为一个promise实例可能会多次then，用数组就一个一个保存了
const p2 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    reject('失败')
  }, 1000)
}).then(res => console.log('回调执行', res), err => console.log('回调执行', err)) // 回调执行 失败


// 遵循js执行机制，then方法是微任务
const p = new myPromise((resolve, reject) => {
  resolve(1)
}).then(res => console.log(res), err => console.log(err))
console.log(2)
// 1 2
// 可以看到这里并没有遵循js执行机制,我们加一个setTimeout简单实现以下